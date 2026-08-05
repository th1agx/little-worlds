# Contribuição

## Fluxo

1. Vincule a alteração a uma sprint, issue ou decisão.
2. Leia o pacote mínimo de contexto indicado em `docs/05-ai/CONTEXT_STRATEGY.md`.
3. Para decisão difícil de reverter, crie um ADR a partir de `docs/templates/ADR_TEMPLATE.md`.
4. Faça mudanças pequenas e coerentes; separe conteúdo, código e assets quando possível.
5. Execute os checks definidos para a sprint e registre evidências relevantes.

## Convenções

- Idioma de produto e documentação: português brasileiro.
- Código, nomes de arquivos técnicos, commits e APIs: inglês.
- Componentes React: `PascalCase`; hooks: `useCamelCase`; outros módulos: `kebab-case`.
- Testes próximos da unidade (`*.test.ts[x]`); E2E em `tests/e2e`.
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `perf:`, `refactor:`, `chore:`).
- Imports internos pelo alias `@/` quando a aplicação for inicializada.

## Definition of Done

- Critérios de aceite atendidos.
- Typecheck, lint, testes e build verdes.
- Sem erro ou warning novo no console.
- Acessibilidade e fallback 2D preservados.
- Budget de performance respeitado ou exceção documentada.
- Asset novo registrado no inventário e acompanhado de licença.
- Documentação/ADR atualizados.

