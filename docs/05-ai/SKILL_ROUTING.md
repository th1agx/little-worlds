# Roteamento de Skills

**Regra:** `AGENTS.md`, `RULES.md`, ADRs e task brief sempre prevalecem. “Obrigatória” significa exigida pelo processo quando aplicável; não significa que o Codex necessariamente a invocará sem a linguagem de gatilho correspondente.

## Protocolo por tarefa

Antes de agir, registrar mentalmente ou no update de trabalho:

1. qual é a natureza da tarefa;
2. quais Skills têm gatilho realmente aplicável;
3. carregar somente as necessárias, normalmente zero a duas;
4. informar ao usuário quais foram usadas e por quê;
5. quando nenhuma for adequada, declarar isso e usar documentação oficial + fontes locais.

Skills não são carregadas por associação vaga de palavras. Uma tarefa de shader não ativa React practices; screenshot não ativa deploy; documentação não ativa threat model; performance R3F não autoriza uma Skill genérica de Three.

| Tipo de tarefa                               | Skill obrigatória                                                                  | Skill opcional                                                                                                         | Não carregar                                            | Pacote documental mínimo                                             |
| -------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| React/Next: rota, componente, estado, bundle | `vercel-react-best-practices`                                                      | `vercel-composition-patterns` após segunda reutilização; `playwright` para fluxo real                                  | threat model, deploy                                    | `RULES`, arquitetura, UX e ADRs afetados                             |
| UI/terminal/landing/UX                       | nenhuma pública no núcleo                                                          | `playwright` para validação de browser                                                                                 | composition por reflexo; web-design-guidelines excluída | `EXPERIENCE_BIBLE`, `UI_UX_ACCESSIBILITY`, ADR 0002/0005, checklists |
| Cena R3F/shader/controle                     | nenhuma pública no núcleo                                                          | `playwright` para jornada DOM/browser; React practices somente para borda React                                        | composition, deploy, security sem escopo                | `ART_BIBLE`, planeta, `PERFORMANCE`, ADRs 0001/0006/0010             |
| Performance de React/Next                    | `vercel-react-best-practices`                                                      | `playwright` para fluxo e screenshot                                                                                   | threat model                                            | `PERFORMANCE`, `QUALITY`, budget da cena                             |
| Performance R3F/WebGL                        | nenhuma pública até `little-worlds-r3f` ser aprovada e criada                      | browser integrado para inspeção; suíte Playwright local para regressão; React practices apenas bundle/DOM              | otimização genérica por microbenchmark                  | `PERFORMANCE`, `QUALITY`, Asset Bible, ADR 0015, Visual Benchmark    |
| QA funcional / browser                       | browser integrado para exploração ou suíte `@playwright/test` local para regressão | Skill `playwright` somente após resolver o wrapper flutuante; `vercel-react-best-practices` se o achado for React/Next | deploy                                                  | `QUALITY`, critérios da tarefa                                       |
| Segurança explícita                          | `security-best-practices`                                                          | `security-threat-model` se houver fronteiras/dados/API                                                                 | UX/arte                                                 | arquitetura, threat/privacy docs existentes                          |
| Threat model                                 | `security-threat-model`                                                            | `security-best-practices`                                                                                              | deploy até aprovação humana                             | arquitetura, integrações, dados e deployment                         |
| Preview/deploy Vercel explícito              | `vercel-deploy`, somente por Vercel CLI autenticado                                | `security-best-practices` após solicitação explícita de revisão                                                        | fallback HTTP da Skill; qualquer Skill de criação       | `DEPLOYMENT` futuro, `QUALITY`, secrets/política                     |
| Docs/ADR/planejamento                        | nenhuma pública                                                                    | nenhuma; usar templates locais                                                                                         | Skills de implementação                                 | `CONTEXT_STRATEGY`, ADR index, task brief                            |

## Testes de roteamento realizados

| Tarefa fictícia                 | Skills que o Codex reconhece como candidatas                                        | Obrigatórias pela política                                  | Desnecessárias                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| “Criar tela inicial Next/React” | `vercel-react-best-practices`                                                       | `vercel-react-best-practices`                               | Playwright sem teste; composition sem reuso; segurança/deploy   |
| “Revisar UX do terminal”        | nenhuma de UX instalada; `playwright` se houver teste real                          | nenhuma pública; checklist/documentos do projeto            | React practices, composition, security, deploy                  |
| “Criar shader de céu”           | nenhuma específica                                                                  | nenhuma pública; Art/Performance docs mandam                | todas as seis, salvo Playwright para smoke posterior            |
| “Otimizar performance da cena”  | `vercel-react-best-practices` somente no limite React/Next; `playwright` para fluxo | nenhuma Skill R3F pública                                   | composition, security, deploy; React rules no render loop       |
| “Preparar preview Vercel”       | `vercel-deploy`                                                                     | `vercel-deploy`, mas apenas com pedido explícito/autoridade | Playwright, composition; security se não foi solicitada revisão |

### Método e limite da validação

`codex debug prompt-input` executado na raiz confirmou a descoberta das seis Skills do workspace. O runtime lista as Skills disponíveis para o modelo, mas não oferece um log de ativação automática sem executar uma turn real. Por isso, a tabela combina o teste de descoberta com os gatilhos declarados nos `SKILL.md` e a política deste projeto. A primeira tarefa real de cada rota deve anotar Skill efetivamente usada e corrigir este mapa se houver divergência.
