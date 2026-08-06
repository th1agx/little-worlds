# Portfólio Universo

Portfólio web contemplativo em primeira pessoa. O mundo 3D cria presença e emoção; o conteúdo profissional futuro será entregue por interfaces DOM acessíveis.

## Estado atual

O bootstrap técnico e a locomoção experimental estão concluídos. A CI/CD está configurada e o primeiro blockout visual do Vertical Slice está em desenvolvimento. O visual continua experimental: não há assets finais, terminal funcional ou conteúdo profissional publicado.

## Executar localmente

Requer Node `24.19.0` e pnpm `10.34.5`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Qualidade

```bash
pnpm format
pnpm typecheck
pnpm lint
pnpm test
pnpm test:e2e
pnpm build
```

## Stack

Next.js, TypeScript, React, React Three Fiber, Three.js, Zustand, Vitest e Playwright. O Canvas é persistente e as cenas são carregadas sob demanda.

## Documentação

1. [`docs/README.md`](docs/README.md) — mapa da documentação.
2. [`docs/02-architecture/BOOTSTRAP.md`](docs/02-architecture/BOOTSTRAP.md) — contratos técnicos.
3. [`docs/02-architecture/decisions/0011-controlled-levitation-calibration.md`](docs/02-architecture/decisions/0011-controlled-levitation-calibration.md) — calibração de locomoção.
4. [`docs/04-production/CI_CD_AND_DEPLOYMENT.md`](docs/04-production/CI_CD_AND_DEPLOYMENT.md) — CI, diagnóstico e checklist Vercel.
5. [`AGENTS.md`](AGENTS.md) — regras concisas para agentes de IA.

O visitante nunca deve precisar dominar controles 3D para conhecer o profissional. A experiência imersiva é uma camada de descoberta; acessibilidade e rota 2D equivalente são requisitos do produto.
