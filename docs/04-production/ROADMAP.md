# Roadmap por versões

**Estado:** proposta orientada por gates, não por datas

## Sprint 0 — Fundação (concluída)

Visão, architecture, ADRs, bible, art/audio/assets research, performance, QA, AI stack, contexto e prontidão. **Gate:** documentos revisados e escolhas pendentes da Sprint 1 resolvidas.

## Sprint 0.5 — Direção definitiva (atual)

Art Bible, Experience Bible, bíblias do Hub e seis planetas, Asset Bible, constituição, AI Workflow, Prompt Library, moodboards e referências. **Gate:** ADRs 0005–0008 aprovados, moodboards executados sem gerar/adquirir assets, e direção assinada por Creative/Product/Technical owners.

## Sprint 1 — Vertical Slice “Projetos”

**Estado:** proposta, depende dos ADRs 0009 e 0010.

- Inicializar Next/TypeScript/tooling, shell HTML e rota 2D de um case real.
- Capability detection, preferências, perf overlay dev-only e fallback sem WebGL.
- Spike de pointer lock/touch, controlador, terminal DOM/foco e avaliação de locomoção.
- Hub mínimo, viagem para Projetos e retorno seguro.
- Cena Projetos no escopo aprovado, assets auditados, áudio opt-in, perfis low/high e reduced motion.
- Testes E2E/a11y/visual/performance e validação qualitativa com usuários.

**Gate v0.2:** Hub→Projetos→terminal→case/link externo→Hub funciona em devices definidos; fallback e budgets passam; sensação/direção são validadas. Se falhar, não expandir planetas.

## Sprint 2 — Consolidação e Sobre Mim

- Corrigir achados do Vertical Slice, consolidar contratos reutilizáveis e produzir Sobre Mim somente após o gate de reuso.
- Não reabrir decisões de controle/terminal sem evidência nova.

**Gate v0.3:** dois planetas reutilizam sistema sem crescimento indevido de bundle/memória e com linguagem visual coerente.

## Sprint 3 — Expansão do Hub e viagem

- Hub completo, mapa/destinos, transição e scene streaming/disposal.
- Deep links, persistência de preferências e prefetch adaptativo.

**Gate v0.4:** três ciclos de troca sem crescimento indevido de memória; conteúdo sempre alcançável.

## Sprint 4 — Projetos

- Planeta Projetos e estudos de caso orientados a problema/decisão/impacto.
- Links externos seguros, media otimizada e conteúdo indexável.

**Gate v0.5:** recrutador encontra um case e contato rapidamente; métricas e leitura aprovadas.

## Sprint 5 — Tecnologias e Experiência

- Dois planetas usando o sistema consolidado, não novos frameworks internos.
- Taxonomia honesta de competências e trajetória profissional baseada em evidências.

**Gate v0.5:** reutilização não degrada identidade; budgets cumulativos continuam isolados por cena.

## Sprint 6 — Certificados, Contato e conteúdo final

- Planeta Certificados com verificação e contexto de aprendizado.
- Planeta Contato, currículo, redes e formulário somente se threat model/anti-spam aprovados.
- Revisão editorial, localization decision e privacy/legal.

**Gate v0.6 (feature complete):** jornada completa, sem placeholders editoriais.

## Sprint 7 — Polish e beta

- Audio mix, transições, shader warmup, device matrix, bug bash, analytics mínimos e observabilidade.
- Testes com recrutadores, técnicos e participantes sensíveis a movimento.

**Gate v0.9:** zero bloqueadores, performance p75 real aceitável e rollback pronto.

## Sprint 8 — v1.0

- Produção Vercel, domínio, metadata/social cards, sitemap, monitoring e runbook.
- Auditoria de licenças final e créditos publicados.

## Pós-v1

Gamepad, PWA/offline parcial, idioma inglês, WebGPU enhancement, novas cenas ou conteúdo remoto somente com dados justificando. Multiplayer/combate/inventário permanecem fora do produto.
