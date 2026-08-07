# Registro documental

**Estado:** governança da documentação

## Documentos ativos da fundação

- Bootstrap: `02-architecture/BOOTSTRAP.md` e `SECURITY.md`, com os limites, contratos e política mínima da infraestrutura executável.

- Produto: Vision, Experience Bible e Risks & Opportunities.
- Arquitetura: Architecture, Tech Stack, Repository Structure e ADRs.
- Design/engenharia: Art Direction, Scenes, UI/UX/Accessibility, Audio, Assets e Performance.
- Produção: Quality, Roadmap, Sprint 1 Readiness e o conjunto `vertical-slice/` (escopo, plano, ordem, riscos, assets, planeta, DoD, checklists e diretrizes).
- IA/pesquisa: AI Stack, Context Strategy, AI Environment, Skill Catalog, Skill Routing, Model Strategy e Visual References.
- Operação do repositório: README, AGENTS e Contributing.
- CI e deploy: `CI_CD_AND_DEPLOYMENT.md`, com workflows reproduzíveis e checklist humano para a Vercel.
- Direção Sprint 0.5: Rules, Art Bible, Experience Bible, Planet Bible + sete destinos, Asset Bible, AI Workflow, Prompt Library, Visual Moodboards e References.
- Biblioteca de assets: `08-asset-library/`, com catálogo, style guide, pipeline, fila, política de licenças e registros de aprovados/rejeitados. É a fonte operacional vigente para aquisição.

## Criar quando o gatilho ocorrer

| Documento                            | Gatilho                               | Conteúdo mínimo                                                                                     |
| ------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `THREAT_MODEL.md`                    | formulário, analytics ou API          | dados, atores, abuso, controles e riscos residuais                                                  |
| `PRIVACY.md`                         | coleta de qualquer telemetria         | eventos, finalidade, retenção, fornecedor e opt-out                                                 |
| `CONTENT_GUIDE.md`                   | conteúdo real recorrente              | voz, case-study schema, claims, links e revisão                                                     |
| `ASSET_LEDGER.md` / arquivos máquina | primeiro asset efetivamente adquirido | proveniência, licença, atribuição, hash, medições, derivado e uso; complementar à biblioteca curada |
| `BROWSER_SUPPORT.md`                 | resultados do spike                   | matriz, fallbacks e critérios de abandono                                                           |
| `DESIGN_TOKENS.md`                   | style frame aprovado                  | cor, tipo, spacing, motion, material e áudio tokens                                                 |
| `INPUT_SPEC.md`                      | controlador validado                  | mappings, remap, touch, gamepad, foco e conforto                                                    |
| `CONTENT_SCHEMA.md`                  | MDX implementado                      | frontmatter, validação, URLs e migração                                                             |
| `DEPLOYMENT.md`                      | primeiro projeto Vercel               | environments, CI, rollback, domínio e env vars                                                      |
| `RUNBOOK.md`                         | beta público                          | incidentes, black screen, asset/CDN, rollback e owners                                              |
| `OBSERVABILITY.md`                   | monitoring aprovado                   | métricas, eventos, alertas, dashboards e privacidade                                                |
| `RELEASE_CHECKLIST.md`               | v0.9                                  | QA, a11y, perf, conteúdo, licenças, SEO e rollback                                                  |
| `CHANGELOG.md`                       | primeiro release público              | mudanças orientadas ao visitante                                                                    |
| ADR novo                             | decisão cara/difícil de reverter      | contexto, opções, decisão, consequências e revisão                                                  |

## Manutenção

Revisar o registro no planning e no release. Documento sem owner implícito é responsabilidade do responsável pela área. Conteúdo obsoleto é marcado `superseded` e aponta para a nova fonte; não é apagado quando registra decisão histórica.
