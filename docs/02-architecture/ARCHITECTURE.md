# Arquitetura

**Estado:** alvo proposto; decisões essenciais registradas em ADR

## Visão geral

```text
Next.js App Router shell
├── Rotas semânticas 2D (conteúdo, SEO, fallback)
├── Experience shell (loading, settings, error boundary)
│   ├── Canvas R3F (um planeta por vez)
│   │   ├── World/lighting/environment
│   │   ├── Player + camera + collisions
│   │   ├── Interaction targets
│   │   └── Adaptive quality + diagnostics
│   └── DOM overlays
│       ├── Terminal acessível
│       ├── Onboarding/context prompts
│       └── Settings/navigation
├── Content layer (MDX + typed manifest)
├── Asset catalog (manifest + licenses + budgets)
└── Observability (errors + Web Vitals, após consent/privacy decision)
```

## Limites

- `app/` compõe rotas, metadata e boundaries; não contém lógica 3D de domínio.
- `features/experience` coordena modos (`boot`, `explore`, `terminal`, `travel`, `error`).
- `features/world` conhece planetas e streaming, mas não a apresentação do conteúdo.
- `features/player` conhece input/movimento, mas não rotas ou terminal.
- `features/terminal` renderiza conteúdo semântico e não depende do Canvas para funcionar.
- `content/` é dado editorial validado; não importa componentes de engine.
- `lib/three` contém adaptadores puros para loaders, disposal, quality e métricas.

## Fluxo de execução

1. Servidor entrega shell HTML, metadata, link “ver versão acessível” e conteúdo indexável.
2. Cliente verifica capacidade (WebGL, memória aproximada, reduced motion e preferência salva).
3. Perfil inicial seleciona `low`, `medium` ou `high`; o usuário pode sobrescrever.
4. Apenas o manifesto e a cena do destino são carregados.
5. Assets críticos exibem geometria/luz básica; decoração e áudio entram progressivamente.
6. Ao interagir, movimento é suspenso, cursor liberado e foco vai ao título do terminal DOM.
7. Ao fechar, foco/controle retornam previsivelmente; próxima cena pode ser pré-carregada.

## Estado

- Estado editorial: arquivos MDX e manifestos TypeScript validados por Zod.
- Estado de sessão global pequeno: Zustand (preferências, planeta atual, progresso não competitivo).
- Estado de modo: união discriminada/reducer explícito; não adicionar XState sem complexidade demonstrada.
- Estado por frame: refs/objetos Three; nunca atualizar React state a cada frame.
- Persistência: `localStorage` apenas para preferências, com schema/versionamento.

## Cenas e carregamento

- Cada planeta é um módulo com contrato `PlanetDefinition` e chunk próprio.
- Um Canvas persistente reduz reconstruções; o conteúdo da cena troca por boundary.
- Prefetch apenas do próximo destino provável, respeitando `saveData` e conexão.
- Cancelamento e disposal são obrigatórios ao trocar cena.
- Falha de asset degrada para placeholder intencional e mantém terminal acessível.

## Renderização

- WebGL 2 como baseline de produção; WebGPU só após matriz real de compatibilidade e ADR.
- glTF/GLB como formato de runtime. Fontes de asset não entram no bundle público.
- KTX2/Basis para texturas que justificarem; Meshopt preferencial para geometria, com teste de qualidade/decodificação.
- Iluminação baked/fake quando possível; poucas luzes dinâmicas e sombras seletivas.
- Post-processing é um enhancement desligável por perfil.

## Conteúdo e SEO

- URLs canônicas para `/about`, `/projects`, `/technologies`, `/certificates`, `/contact`.
- O terminal reutiliza os mesmos dados/componentes; não duplica texto.
- Links diretos abrem o conteúdo mesmo quando Canvas falha.
- Certificados e currículo são downloads explícitos, otimizados e versionados.

## Segurança e privacidade

- Sem segredos no cliente; formulário de contato, se criado, usa endpoint server-side, rate limit e honeypot.
- CSP precisa acomodar WebGL/assets sem liberar origens amplas.
- Assets externos são ingeridos no pipeline, não hotlinked.
- Analytics só após decisão de privacidade; nunca gravar teclas, movimentos ou texto do usuário.

## Fontes técnicas

- O [App Router](https://nextjs.org/docs/app) suporta a separação entre shell servidor e ilhas cliente.
- O ecossistema oficial do [React Three Fiber](https://github.com/pmndrs/react-three-fiber) inclui Drei, Rapier, post-processing e test renderer.
- O [GLTFLoader](https://threejs.org/docs/pages/GLTFLoader.html) suporta Draco, Meshopt e KTX2, mas recursos precisam de disposal explícito.
- A documentação de [scaling do R3F](https://r3f.docs.pmnd.rs/advanced/scaling-performance) fundamenta instancing, reuso, LOD e adaptação de performance.

