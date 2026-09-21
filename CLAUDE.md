# Convenções do projeto

## Git

- Mensagens de commit e de merge em inglês, sempre, no formato Conventional Commits (`type(scope): description`). Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`.
- O corpo do commit também fica em inglês e explica o motivo da mudança.
- Mensagens de merge seguem o padrão `merge: <assunto> (<branch>)`.

## Idioma do restante

Documentação, changelog, interface da extensão, comentários de código e conversa com o usuário permanecem em português.

## Build

- `NODE_ENV=production` é obrigatório ao rodar `pnpm build` e `pnpm store:package`. Sem isso o plugin React compila o JSX com o runtime de desenvolvimento e o content script quebra com `jsxDEV is not a function`.
