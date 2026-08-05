# Documentação

Esta pasta é a fonte de verdade da Sprint 0. “Proposto” significa que a decisão ainda pode mudar por protótipo/medição; “aceito” significa que mudar exige ADR.

> A identidade criativa definitiva está em [`07-sprint-0.5/README.md`](07-sprint-0.5/README.md). Em temas de arte, experiência, planetas, assets, narrativa e direção de IA, a Sprint 0.5 prevalece sobre os guias preliminares da Sprint 0.

## Mapa

O estado da base executável e seus limites estão em [`02-architecture/BOOTSTRAP.md`](02-architecture/BOOTSTRAP.md).

| Área | Documento | Uso |
| --- | --- | --- |
| Produto | [`01-product/VISION.md`](01-product/VISION.md) | intenção, público, sucesso e limites |
| Produto | [`01-product/GAME_BIBLE.md`](01-product/GAME_BIBLE.md) | linguagem da experiência, controles e loop |
| Pesquisa | [`01-product/RISKS_AND_OPPORTUNITIES.md`](01-product/RISKS_AND_OPPORTUNITIES.md) | desafios, riscos, gargalos e oportunidades |
| Arquitetura | [`02-architecture/ARCHITECTURE.md`](02-architecture/ARCHITECTURE.md) | componentes e fluxos |
| Arquitetura | [`02-architecture/TECH_STACK.md`](02-architecture/TECH_STACK.md) | bibliotecas e critérios de adoção |
| Arquitetura | [`02-architecture/REPOSITORY_STRUCTURE.md`](02-architecture/REPOSITORY_STRUCTURE.md) | pastas, limites e convenções |
| Decisões | [`02-architecture/decisions/README.md`](02-architecture/decisions/README.md) | índice de ADRs |
| Design | [`03-design/ART_DIRECTION.md`](03-design/ART_DIRECTION.md) | linguagem visual e anti-cópia |
| Design | [`03-design/SCENES.md`](03-design/SCENES.md) | mapa de cenas e conteúdo |
| Design | [`03-design/UI_UX_ACCESSIBILITY.md`](03-design/UI_UX_ACCESSIBILITY.md) | terminal, navegação e inclusão |
| Design | [`03-design/AUDIO.md`](03-design/AUDIO.md) | sistema sonoro e licenças |
| Engenharia | [`03-design/ASSETS.md`](03-design/ASSETS.md) | candidatos e pipeline de assets |
| Engenharia | [`03-design/PERFORMANCE.md`](03-design/PERFORMANCE.md) | budgets e degradação adaptativa |
| Produção | [`04-production/QUALITY.md`](04-production/QUALITY.md) | estratégia de testes e gates |
| Produção | [`04-production/ROADMAP.md`](04-production/ROADMAP.md) | versões e entregas |
| Produção | [`04-production/SPRINT_1_READINESS.md`](04-production/SPRINT_1_READINESS.md) | checklist antes da implementação |
| Produção | [`04-production/vertical-slice/VERTICAL_SLICE.md`](04-production/vertical-slice/VERTICAL_SLICE.md) | escopo, gates e sucesso do primeiro Slice |
| Produção | [`04-production/vertical-slice/SPRINT_1.md`](04-production/vertical-slice/SPRINT_1.md) | tarefas, dependências e estimativas da Sprint 1 |
| Produção | [`04-production/vertical-slice/IMPLEMENTATION_ORDER.md`](04-production/vertical-slice/IMPLEMENTATION_ORDER.md) | sequência de construção e razões |
| Produção | [`04-production/vertical-slice/RISK_MATRIX.md`](04-production/vertical-slice/RISK_MATRIX.md) | riscos e mitigações do Slice |
| Produção | [`04-production/vertical-slice/ASSET_ACQUISITION_PLAN.md`](04-production/vertical-slice/ASSET_ACQUISITION_PLAN.md) | plano de pesquisa/aquisição sem download |
| Produção | [`04-production/vertical-slice/FIRST_PLANET_SPEC.md`](04-production/vertical-slice/FIRST_PLANET_SPEC.md) | especificação completa de Projetos |
| Produção | [`04-production/vertical-slice/DEFINITION_OF_DONE.md`](04-production/vertical-slice/DEFINITION_OF_DONE.md) | critérios objetivos de término |
| Produção | [`04-production/vertical-slice/CHECKLISTS.md`](04-production/vertical-slice/CHECKLISTS.md) | checklists de PR, asset, UX, performance e docs |
| Produção | [`04-production/vertical-slice/IMPLEMENTATION_GUIDELINES.md`](04-production/vertical-slice/IMPLEMENTATION_GUIDELINES.md) | protocolo para futuras IAs de implementação |
| Governança | [`04-production/DOCUMENT_REGISTER.md`](04-production/DOCUMENT_REGISTER.md) | documentos atuais e gatilhos futuros |
| IA | [`05-ai/AI_STACK.md`](05-ai/AI_STACK.md) | skills avaliadas e stack definitivo |
| IA | [`05-ai/AI_ENVIRONMENT.md`](05-ai/AI_ENVIRONMENT.md) | instalação, lockfile e manutenção do ambiente de Skills |
| IA | [`05-ai/SKILL_CATALOG.md`](05-ai/SKILL_CATALOG.md) | fichas, riscos e exclusões de Skills |
| IA | [`05-ai/SKILL_ROUTING.md`](05-ai/SKILL_ROUTING.md) | roteamento obrigatório/opcional por tipo de tarefa |
| IA | [`05-ai/MODEL_STRATEGY.md`](05-ai/MODEL_STRATEGY.md) | uso de Luna, Terra e Sol |
| IA | [`05-ai/CONTEXT_STRATEGY.md`](05-ai/CONTEXT_STRATEGY.md) | economia de contexto e handoffs |
| Referências | [`06-research/VISUAL_REFERENCES.md`](06-research/VISUAL_REFERENCES.md) | moodboard pesquisável e princípios |
| Referências | [`06-research/MOVEMENT_REFERENCES.md`](06-research/MOVEMENT_REFERENCES.md) | análise de locomoção e síntese autoral |
| Direção definitiva | [`07-sprint-0.5/README.md`](07-sprint-0.5/README.md) | índice das bíblias e constituição criativa |

## Governança

- Cada documento começa com estado e data quando a volatilidade importa.
- Links externos são referências de pesquisa, não autorização automática de uso.
- Preço, licença e disponibilidade de assets devem ser reconfirmados na data de aquisição.
- Decisões irreversíveis ou de alto custo usam ADR; detalhes mutáveis ficam nos guias temáticos.
