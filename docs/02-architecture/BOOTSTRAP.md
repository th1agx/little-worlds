# Bootstrap técnico

**Estado:** implementado na Sprint 1 de infraestrutura · **Atualizado:** 2026-08-04

Este documento registra apenas a base executável. Ele não autoriza conteúdo, assets finais, planetas, terminal, HUD, áudio, partículas, shaders finais ou gameplay adicional.

## Limites implementados

- `app/` é somente o shell App Router e metadata técnica.
- `features/experience` hospeda o Canvas R3F persistente e seu contêiner de experiência.
- `features/world` contém o registry de cenas com imports preguiçosos, `SceneManager` e ambiente temporário.
- `features/player` isola input, contrato de gamepad futuro, movimento FPS e a fronteira de colisão mínima.
- `lib/three` concentra câmera e criação/configuração do renderer.
- `lib/assets` contém manifest vazio, cache em memória e loader base; nenhum asset é carregado nesta Sprint.

## Contratos preservados

- Há um único `Canvas`; cenas `hub` e `test` são módulos independentes e carregados sob `Suspense`.
- Estado por frame permanece em objetos/refs do Three e não em estado React.
- O `SceneRegistry` é a fonte única dos destinos técnicos desta Sprint.
- `PlayerController` depende apenas de `InputSnapshot` e `CollisionAdapter`; não conhece cenas, conteúdo ou interface.
- A iluminação, céu e fog atuais são placeholders intencionais e estão localizados em `EnvironmentManager`.

## Decisões adiadas deliberadamente

- Física Rapier e colisores reais, até o spike previsto na ADR 0010.
- Perfis de qualidade, adaptive DPR, pós-processamento e telemetria.
- Entrada real de gamepad, remapeamento, touch e especificação de conforto.
- Carregadores GLTF/KTX2/Draco/Meshopt, descarte de recursos e aquisição de assets.
- Rotas semânticas, terminal DOM, acessibilidade completa e conteúdo MDX.

## Operação local

Use Node `24.19.0` e pnpm `10.34.5`:

```bash
pnpm install
pnpm dev
```

Os gates locais são `pnpm typecheck`, `pnpm lint`, `pnpm format`, `pnpm test` e `pnpm build`.

> O pnpm pode pedir aprovação explícita para scripts de dependências. Essa aprovação não faz parte deste bootstrap: ela deve ser analisada antes de liberar scripts de terceiros.
