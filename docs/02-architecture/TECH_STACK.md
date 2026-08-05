# Stack técnico e bibliotecas

**Estado:** shortlist; versões serão fixadas na Sprint 1 após teste de compatibilidade React/R3F

## Runtime essencial

| Pacote/capacidade | Decisão | Por quê / limite |
| --- | --- | --- |
| Next.js App Router | adotar | shell SSR/SSG, metadata, rotas semânticas e deploy Vercel; Canvas permanece client-only |
| React + TypeScript strict | adotar | composição e contratos; nenhuma lógica por frame em state React |
| `three` | adotar | render, loaders e matemática base |
| `@react-three/fiber` | adotar | ciclo de vida declarativo e integração React; conferir matriz de versão, pois R3F 9 acompanha React 19 |
| `@react-three/drei` | adotar seletivamente | loaders, helpers, environment e performance monitor; evitar abstrações sem entender custo |
| `@react-three/rapier` | adotar após spike | colisão e controlador cinemático; não simular decoração estática |
| `@react-three/postprocessing` | adotar seletivamente | bloom/tonemapping/vinheta calibrados; cada passe precisa de budget e fallback |
| `zustand` | adotar | estado pequeno entre Canvas e DOM; não armazenar objetos Three nem valores por frame |
| `zod` | adotar | validar conteúdo, manifests e preferências persistidas |
| MDX (`@next/mdx`) | adotar | conteúdo local, versionado, sem CMS precoce; componentes permitidos devem ser whitelisted |

## Plataforma e qualidade

| Ferramenta | Uso |
| --- | --- |
| pnpm + versão de Node fixada | instalação determinística e CI reprodutível |
| ESLint + Prettier | corretude e formato; regras com conflito são resolvidas no config, não por disable disperso |
| Vitest + React Testing Library | unidades, reducers, conteúdo e componentes DOM |
| Playwright + `@axe-core/playwright` | jornadas E2E, teclado, ARIA e screenshots em ambiente fixo |
| `@react-three/test-renderer` | lógica estrutural R3F quando útil; não substitui teste no navegador/GPU |
| glTF Transform CLI + glTF Validator/Auditor | otimização, compressão, inspeção e gate de assets |
| Lighthouse CI | budgets de carregamento e regressões do shell/rotas 2D |
| Husky + lint-staged (opcional) | checks rápidos pre-commit; CI continua sendo autoridade |
| Changesets | não adotar agora | monorepo/pacotes publicados não existem; seria cerimônia vazia |

## Observabilidade (adiada até decisão de privacidade)

- `useReportWebVitals`/Vercel Web Analytics para métricas reais; o [Next.js documenta ambas as opções](https://nextjs.org/docs/app/guides/analytics).
- Sentry para erros de runtime, device/GPU breadcrumbs mínimos e sourcemaps protegidos.
- Eventos de produto mínimos: `experience_started`, `fallback_selected`, `terminal_opened`, `contact_opened`; sem gravar trajetória detalhada.

## Decisões de não adoção

- **Redux/XState:** não há complexidade suficiente no MVP; reducer tipado + Zustand cobre o domínio.
- **GSAP:** movimento principal pertence ao render loop e interpolação Three; só reavaliar para sequências DOM complexas.
- **Howler + Three.Audio simultaneamente:** dois grafos de áudio criariam volume/pause divergentes. Começar com um serviço sobre Web Audio/Three Audio.
- **CMS remoto:** aumenta falhas, custo e superfície de segurança; MDX atende o portfólio pessoal.
- **Tailwind por padrão:** terminal pequeno pode usar CSS Modules/tokens com menos dependência. Escolha na Sprint 1 após wireframe.
- **WebGPU como baseline:** maturidade/compatibilidade e integração precisam ser medidas; WebGL 2 continua o caminho seguro.
- **Monorepo/Turborepo:** um único produto não justifica a complexidade agora.

## Critério para nova dependência

Uma biblioteca entra somente se: resolve problema observado; é compatível com as versões fixadas; tem manutenção/licença adequadas; não duplica capacidade; custo de bundle/runtime foi medido; alternativa nativa foi considerada; remoção é viável.

