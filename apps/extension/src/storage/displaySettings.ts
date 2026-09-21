import { browser } from 'wxt/browser';
import { z } from 'zod';

export const DISPLAY_SETTINGS_STORAGE_KEY = 'wat.display-settings.v1';

export type DisplaySettings = {
  autoExpandTranscripts: boolean;
};

export const DEFAULT_DISPLAY_SETTINGS: DisplaySettings = {
  autoExpandTranscripts: false,
};

const DisplaySettingsSchema = z.object({
  autoExpandTranscripts: z.boolean(),
});

export async function getDisplaySettings(): Promise<DisplaySettings> {
  const stored = await browser.storage.local.get(DISPLAY_SETTINGS_STORAGE_KEY);
  const parsed = DisplaySettingsSchema.safeParse(
    stored[DISPLAY_SETTINGS_STORAGE_KEY],
  );
  return parsed.success ? parsed.data : { ...DEFAULT_DISPLAY_SETTINGS };
}

export async function saveDisplaySettings(
  settings: DisplaySettings,
): Promise<DisplaySettings> {
  const parsed = DisplaySettingsSchema.parse(settings);
  await browser.storage.local.set({ [DISPLAY_SETTINGS_STORAGE_KEY]: parsed });
  return parsed;
}
