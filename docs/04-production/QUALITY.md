# Estratégia de qualidade

**Estado:** política inicial

## Pirâmide prática

- **Unitários:** reducers de modo, seleção de qualidade, schemas, content queries, math pura e input mapping.
- **Componentes DOM:** terminal, foco, settings, erros e rotas 2D com Testing Library.
- **R3F estrutural:** contratos/montagem quando o test renderer agrega valor; não testar pixels em JSDOM.
- **E2E navegador:** entrada 3D/2D, pointer lock, interação, troca de foco, navegação, falha de WebGL e contato.
- **Visual/performance:** screenshots determinísticos, canvas não vazio, métricas e profiling em devices.
- **Exploratório:** conforto, clareza do marco, enjoo, áudio e sensação — não automatizáveis por completo.

## Matriz mínima

- Chromium, Firefox e WebKit atuais no E2E.
- Desktop 1366×768 e 1920×1080; mobile 390×844 e 360×800.
- GPU integrada/low, desktop high e dispositivos Safari/Android físicos definidos em Performance.
- Teclado, mouse, touch; gamepad é posterior.
- Reduced motion, mute, zoom, alto contraste e WebGL indisponível.

## Gates de CI futuros

1. install frozen, typecheck, lint e format check.
2. unit/component tests e cobertura focada em contratos críticos (sem meta vazia de 100%).
3. build de produção.
4. E2E smoke + axe nas rotas semânticas/terminal.
5. budgets de bundle e asset manifests.
6. Lighthouse do shell e rotas 2D.
7. visual regression em runner fixo; aprovações humanas para baseline.

O Playwright suporta [comparação visual](https://playwright.dev/docs/test-snapshots), mas alerta que rendering varia por OS/hardware; baselines ficarão presos à mesma imagem de CI. Para acessibilidade, usar [`@axe-core/playwright`](https://playwright.dev/docs/next/accessibility-testing) e testes manuais — automação não prova conformidade completa.

## Gatilhos de regressão

- Mudança em shader, luz, pós ou asset: screenshot low/high e snapshot de renderer info.
- Movimento/física: percurso determinístico e recovery tests.
- Terminal/conteúdo: teclado, foco, zoom e leitor de tela spot check.
- Dependência Three/R3F/Rapier: full browser smoke e memory/disposal run.
- Novo planeta: budget report, attribution report e teste de spawn→terminal.

## Definition of Ready para tarefa

Objetivo, critérios observáveis, docs/ADR relevantes, perfil/dispositivos afetados, assets/licenças conhecidos e plano de teste. Se não couber em uma mudança revisável, decompor.

## Bugs críticos

Bloqueiam release: conteúdo inacessível; pointer lock sem saída; crash/black screen sem fallback; licença ausente; perda de foco que aprisiona teclado; regressão grave de frame/memória; contato quebrado; erro de privacidade/segredo.

