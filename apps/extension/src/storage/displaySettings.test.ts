import { beforeEach, describe, expect, it, vi } from 'vitest';

const storageHarness = vi.hoisted(() => {
  const values: Record<string, unknown> = {};
  return { values };
});

vi.mock('wxt/browser', () => ({
  browser: {
    storage: {
      local: {
        get: vi.fn((key: string) =>
          Promise.resolve(
            key in storageHarness.values
              ? { [key]: storageHarness.values[key] }
              : {},
          ),
        ),
        set: vi.fn((items: Record<string, unknown>) => {
          Object.assign(storageHarness.values, items);
          return Promise.resolve();
        }),
      },
    },
  },
}));

import {
  DISPLAY_SETTINGS_STORAGE_KEY,
  getDisplaySettings,
  saveDisplaySettings,
} from './displaySettings';

describe('display settings', () => {
  beforeEach(() => {
    for (const key of Object.keys(storageHarness.values)) {
      delete storageHarness.values[key];
    }
  });

  it('keeps transcripts collapsed until the option is enabled', async () => {
    await expect(getDisplaySettings()).resolves.toEqual({
      autoExpandTranscripts: false,
    });
  });

  it('stores the option and reads it back', async () => {
    await saveDisplaySettings({ autoExpandTranscripts: true });

    expect(storageHarness.values[DISPLAY_SETTINGS_STORAGE_KEY]).toEqual({
      autoExpandTranscripts: true,
    });
    await expect(getDisplaySettings()).resolves.toEqual({
      autoExpandTranscripts: true,
    });
  });

  it('falls back to the default when the stored value is corrupt', async () => {
    storageHarness.values[DISPLAY_SETTINGS_STORAGE_KEY] = {
      autoExpandTranscripts: 'sim',
    };

    await expect(getDisplaySettings()).resolves.toEqual({
      autoExpandTranscripts: false,
    });
  });
});
