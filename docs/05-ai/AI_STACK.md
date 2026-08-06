# AI Stack definitivo

**Estado:** seis Skills mantidas; expansão 3D aguardando aprovação humana
**Pesquisa:** stack local e candidatos 3D reavaliados em 2026-08-06; fontes/commits instalados estão em [`.codex/skills.lock.md`](../../.codex/skills.lock.md) e a auditoria detalhada em [`VISUAL_BENCHMARK_SKILL_AUDIT.md`](./VISUAL_BENCHMARK_SKILL_AUDIT.md)

## Princípio

Poucas skills, de mantenedores confiáveis, ativadas no momento certo. Skills são instruções executáveis: excesso cria regras conflitantes, aumenta contexto e amplia risco de supply chain. A disponibilidade pública não é selo de segurança.

## Stack selecionado

| Skill                     | Origem                                                     | Prioridade | Benefício                                                                | Conflito/controle                                                                                                             | Quando usar                                       |
| ------------------------- | ---------------------------------------------------------- | ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `react-best-practices`    | [Vercel Labs](https://github.com/vercel-labs/agent-skills) | P0         | regras priorizadas de waterfall, bundle, SSR e re-render para React/Next | algumas regras server-first não se aplicam ao Canvas client-only; arquitetura deste repo prevalece                            | toda implementação/review React/Next              |
| `web-design-guidelines`   | Vercel Labs                                                | excluída   | auditoria ampla de a11y, motion, touch, foco e UX                        | busca regras de branch móvel em runtime, quebrando reprodutibilidade; usar documentos/checklists locais até snapshot auditado | não usar no core                                  |
| `composition-patterns`    | Vercel Labs                                                | P1         | APIs React sustentáveis e menos boolean props                            | abstração prematura; aplicar depois de segunda necessidade real                                                               | desenho/refactor de componentes compartilhados    |
| `playwright`              | [OpenAI curated](https://github.com/openai/skills)         | P0         | automação/browser QA reproduzível                                        | wrapper usa `npx` sem versão; preferir `@playwright/test` local pinado ou browser integrado; visual WebGL varia por runner    | fluxo/browser QA quando explicitamente necessário |
| `security-best-practices` | OpenAI curated                                             | P1         | revisão proporcional de frontend/Next e segredos                         | não substitui threat model nem revisão de licenças                                                                            | dependências, headers, formulário e release       |
| `security-threat-model`   | OpenAI curated                                             | P1 tardio  | modela abuso, dados, formulário e telemetria                             | cerimônia desnecessária antes de haver superfície dinâmica                                                                    | antes de contato/analytics na Sprint 6            |
| `vercel-deploy`           | OpenAI curated                                             | P2         | deploy/preview padronizado                                               | somente Vercel CLI autenticado; fallback que envia source a endpoint intermediário é proibido                                 | preview/release explicitamente autorizado         |

O repositório da Vercel declara que `react-best-practices` reúne mais de 40 regras e que `web-design-guidelines` cobre mais de 100 checks de UX/acessibilidade/performance. Isso o torna mais específico e confiável para este stack que catálogos genéricos.

## Capacidades já disponíveis, não reinstalar

- `openai-docs`: documentação oficial atual de Codex/OpenAI; não é fonte de Three.js.
- `browser`: inspeção manual de app local, console, interação e screenshots.
- `imagegen`: concept frames/texturas de referência somente com proveniência e revisão anti-cópia; não substitui asset runtime otimizado.
- `skill-installer`/`skill-creator`: instalar após auditoria e criar skill local quando um workflow repetível estiver comprovado.

## Skills públicas avaliadas

| Candidato                                               | Benefício                                    | Possível conflito                                                                                         | Prioridade / decisão                                                 | Momento                                          |
| ------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------ |
| `threejs-game-director`                                 | orquestra gameplay, arte, UI, QA e geração   | assume “jogo”, Vite/Three scaffold, AAA/HUD/loop e provedores externos; contraria Next/R3F e contemplação | não adotar                                                           | —                                                |
| `threejs-gameplay-systems`                              | input, câmera, física e game feel            | padrões de pontuação/hit feedback e vanilla Three podem induzir escopo errado                             | P3, consultar somente após auditoria                                 | spike de controle, se docs oficiais não bastarem |
| `threejs-aaa-graphics-builder`                          | scorecards e technical-art budgets           | “AAA” incentiva pós/complexidade e linguagem oposta ao projeto                                            | rejeitar como default; extrair checklists manualmente se licenciados | polish, nunca direção inicial                    |
| `threejs-debug-profiler`                                | draw calls, triângulos, texturas e runtime   | conteúdo declarativo útil, mas assume Three/Vite e ignora ownership/cache R3F e budgets locais            | auditar mais; não instalar                                           | apenas como insumo para Skill interna futura     |
| `threejs-qa-release`                                    | canvas checks, screenshots, mobile e release | script exige dependência ausente, hooks de jogo e budgets hardcoded; sobrepõe Playwright/browser          | não instalar                                                         | —                                                |
| `threejs-3d/image/audio-generator`                      | automação de criação                         | chaves/custos, estética derivativa, licenças e outputs pesados                                            | não incluir no stack core                                            | experimentos isolados com aprovação              |
| `frontend-design` de catálogos comunitários             | ideação visual rápida                        | prompts opinativos e risco de visual genérico                                                             | não instalar; usar Product/Art Bible                                 | concept phase                                    |
| skills genéricas de Software Architecture/Documentation | templates e revisão                          | competem com ADRs/estrutura específica e carregam muito contexto                                          | não instalar                                                         | usar templates locais                            |
| `sentry` curated                                        | integração guiada de observabilidade         | dependência/telemetria antes de privacy decision                                                          | P2                                                                   | beta, se Sentry for aprovado                     |

O pacote comunitário [threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills) é substancial e MIT, mas seu próprio README declara scaffold Vite + TypeScript + Three.js, direção de jogo/AAA e integrações Tripo/Gemini/ElevenLabs. A auditoria do commit `7221c1f4a6d2ae189a4d85d058d24f3228499d46` não aprovou instalação integral nem modular nesta etapa.

## Lacuna 3D e decisão proposta

O stack continua sem uma Skill confiável para lifecycle R3F, ownership/disposal, GLTF/KTX2, budgets GPU e profiling de cenas. A proposta é uma futura Skill interna declarativa `little-worlds-r3f`, sem scripts, dependências ou números duplicados. Ela apenas rotearia para as fontes oficiais e budgets já versionados. Seu escopo e gate estão em [`VISUAL_BENCHMARK_SKILL_AUDIT.md`](./VISUAL_BENCHMARK_SKILL_AUDIT.md); **ela não foi criada nem instalada**.

## AI Stack operacional

```text
AGENTS.md (guardrails curtos)
  -> Task Context (escopo e docs mínimas)
  -> skill especializada confiável, no máximo 1–2 por tarefa
  -> docs oficiais/MCP (fatos atuais)
  -> implementação pequena
  -> Playwright/browser + checks de repo
  -> handoff + ADR/docs atualizados
```

## Instalação e manutenção

As seis Skills aprovadas e reprodutíveis estão em `.codex/skills/`, com commit, path e licença no lockfile. Usar `skill-installer` com paths exatos ao atualizar; revisar `SKILL.md`, scripts, licença e diff antes. Não usar `npx ... '*'`, instaladores globais genéricos ou auto-update. Reiniciar Codex após mudança e validar com `codex debug prompt-input`.

## Plugins opcionais

Dos plugins disponíveis, apenas Build Web Apps, Product Design, Vercel e Codex Security são potencialmente relevantes. Eles não entram no stack definitivo até que suas skills/ferramentas concretas sejam inspecionadas; instalar um plugin amplo só pelo nome violaria a política de contexto mínimo.
