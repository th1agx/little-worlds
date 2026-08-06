# CI/CD e preparação para Vercel

## GitHub Actions

`.github/workflows/quality.yml` roda em pull requests para `main`, pushes em `main` e por acionamento manual. O job `quality` instala com `pnpm install --frozen-lockfile` e executa Prettier, TypeScript, ESLint, testes unitários e build. O job `e2e` instala somente Chromium, executa o smoke test Playwright e publica relatório apenas em caso de falha.

Para reproduzir localmente:

```bash
pnpm install --frozen-lockfile
pnpm format
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

Em falhas E2E, abra `playwright-report/` e `test-results/`. Falhas de instalação exigem conferir a versão fixa de Node em `.nvmrc`, pnpm em `package.json` e o lockfile. Scripts de dependências bloqueados pelo pnpm não são aprovados pelo workflow.

## Vercel

O projeto usa Next.js App Router, `packageManager: pnpm@10.34.5`, Node `24.19.0` e `pnpm build`; não depende de caminhos absolutos, localhost ou configuração proprietária. A Vercel CLI não está autenticada neste ambiente, portanto nenhum deployment foi criado.

Checklist humano:

1. Importe `th1agx/little-worlds` na Vercel.
2. Selecione o framework Next.js e a branch de produção `main`.
3. Confirme Node `24.19.0`, instalação `pnpm install --frozen-lockfile` e build `pnpm build`.
4. Habilite Preview Deployments para pull requests.
5. Faça o primeiro deploy, teste Pointer Lock, troca de cena e reduced motion.
6. Registre a URL de produção neste documento quando aprovada.
