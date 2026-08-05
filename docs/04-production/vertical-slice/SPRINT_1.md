# Sprint 1 — Plano operacional do Vertical Slice

**Estado:** proposta; nenhuma tarefa autoriza implementação antes do Gate G0  
**Duração indicativa:** 3 semanas / 72–96 horas úteis após aprovações  
**Cadência:** tarefas pequenas, demonstráveis e revisáveis; paralelismo só em pesquisa/conteúdo sem arquivos concorrentes

Estimativas incluem execução e verificação local básica, não esperas por aprovação, compra, conteúdo pendente ou correção de incompatibilidade externa. A estimativa deve ser revista depois do spike de controlador e do primeiro asset real.

| ID | Tarefa | Descrição e entrega observável | Prioridade | Dificuldade | Dependências | Estimativa |
| --- | --- | --- | --- | --- | --- | --- |
| S1-01 | Gate de início | Aprovar ADRs, caso real/link, orçamento, devices/browsers e regras de repo. Registrar decisão no readiness. | P0 | S | — | 2–4 h de decisão |
| S1-02 | Frame e asset brief | Executar moodboards exigidos, definir cinco frames e briefs de console/shell/terreno. Não adquirir ainda. | P0 | M | S1-01 | 6–10 h |
| S1-03 | Shortlist licenciável | Pesquisar até três fontes por categoria, pontuar candidatos e pedir autorização de aquisição. | P0 | M | S1-02 | 5–8 h |
| S1-04 | Fundação de repositório | Inicializar app, tooling, convenções, CI básico e preview sem introduzir dependências condicionais. | P0 | M | S1-01 | 5–8 h |
| S1-05 | Shell 2D e rotas | Implementar Boas-vindas, rota do case e fallback WebGL; conteúdo semântico real disponível sem Canvas. | P0 | M | S1-04, case aprovado | 6–9 h |
| S1-06 | Estado de preferências | Criar contrato de preferências, UI acessível e persistência local mínima; sem gamificação. | P0 | M | S1-04, S1-05 | 4–6 h |
| S1-07 | Capability + quality | Detectar capacidade sem bloquear; aplicar auto/low/high e reduced motion; overlay só de desenvolvimento. | P0 | M | S1-04, S1-06 | 4–7 h |
| S1-08 | Spike de movimento/câmera | Provar pointer lock, saída, mouse/touch/teclado, caminhada, passo rápido, recovery e interface de controlador. | P0 | L | S1-04, S1-06 | 8–12 h |
| S1-09 | Experimento de pulo baixo | Implementar/medir variantes A sem pulo e B com salto suave experimental conforme ADR 0010; decidir antes de arte final. | P0 | M | S1-08 | 3–5 h |
| S1-10 | Terminal DOM/foco | Provar aproximação/alternativa reduced motion, liberação de pointer lock, foco, Esc, retorno e deep link. | P0 | L | S1-05, S1-08 | 7–10 h |
| S1-11 | Hub mínimo | Criar Limiar com um destino ativo, orientação por composição e transição honesta/cancelável. | P0 | L | S1-07, S1-08, S1-10 | 7–10 h |
| S1-12 | Pipeline de assets | Para cada asset autorizado: quarentena, inspeção, derivado GLB, validação, manifest/ledger e budget. | P0 | M | S1-03, S1-04 | 5–8 h |
| S1-13 | Cena Projetos | Integrar Oficina das Pontes, terminal e case real usando somente assets aprovados; uma cena residente. | P0 | L | S1-10, S1-11, S1-12 | 10–16 h |
| S1-14 | Áudio opt-in | Integrar bed, passos, mecanismo e UI se os arquivos licenciados passarem; testar silêncio e background. | P1 | M | S1-12, S1-13 | 3–6 h |
| S1-15 | QA automatizado | Cobrir rotas, fallback, foco, keyboard, reduced motion, WebGL ausente, link externo e fluxo Hub→Projetos→Hub. | P0 | L | S1-05–S1-13 | 7–10 h |
| S1-16 | Perf e baselines | Medir frames, bundle, renderer info e memória nos devices definidos; capturar frames low/high/reduced. | P0 | L | S1-13, S1-14 | 5–8 h |
| S1-17 | Sessões qualitativas | Aplicar roteiro, registrar comportamento e decidir pulo/passo rápido/ajustes de ritmo. | P0 | M | S1-16 | 5–8 h |
| S1-18 | Gate final e handoff | Revisão técnica, criativa, acessível e de licença; atualizar docs, riscos e backlog seguinte. | P0 | M | S1-15–S1-17 | 4–6 h |

## Marcos

| Marco | Tarefas concluídas | Pergunta respondida |
| --- | --- | --- |
| M1 — autorização | S1-01–03 | Temos direção, conteúdo, devices e candidatos legais para começar? |
| M2 — esqueleto seguro | S1-04–07 | O site e suas preferências/fallback funcionam sem 3D? |
| M3 — interação validada | S1-08–10 | O visitante consegue se mover, entrar/sair do terminal e manter foco seguro? |
| M4 — Slice navegável | S1-11–14 | Hub e primeiro planeta entregam uma jornada completa com conteúdo real? |
| M5 — aceite | S1-15–18 | A experiência é estável, acessível, licenciada e contemplativa o bastante para expandir? |

## Regras de execução

- Nenhuma tarefa P1 antecede uma P0 que valide a mesma hipótese.
- Se S1-08 falhar com um controlador simples, não adicionar física complexa automaticamente: abrir decisão com evidência.
- Se S1-12 revelar asset incompatível, voltar a S1-03; não remodelar manualmente para “salvar” a escolha.
- Se S1-16 ou S1-17 falhar, corrigir/retestar antes de adicionar outro planeta, polimento ou música.

