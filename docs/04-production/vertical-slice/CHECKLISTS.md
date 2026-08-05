# Checklists reutilizáveis

## Abrir uma PR

- [ ] Task brief aponta objetivo, não objetivo, critérios e docs/ADRs lidos.
- [ ] Mudança é pequena e não mistura refactor, feature, asset e dependência sem motivo.
- [ ] Conteúdo essencial possui equivalente 2D/DOM e deep link quando aplicável.
- [ ] Estados de foco, loading, erro, retorno e reduced motion foram tratados.
- [ ] Assets/áudio alterados têm ledger, licença, atribuição e budget.
- [ ] Testes e evidências correspondem ao risco; itens manuais estão anotados.
- [ ] Não há segredo, arquivo-fonte bruto, arquivo grande não justificado ou dependência não aprovada.

## Revisar uma PR

- [ ] A mudança respeita `RULES.md`, ADRs aceitos e o planeta/feature spec.
- [ ] A solução resolve a necessidade sem introduzir jogo, HUD, modal genérico, lore ou abstração prematura.
- [ ] O fluxo de teclado/foco/Esc/pointer lock é seguro e a rota 2D continua equivalente.
- [ ] R3F/Three não atualiza React por frame nem cria recursos repetidos; cleanup/lifecycle são claros.
- [ ] A cena preserva low-first, budgets e uma composição legível sem pós.
- [ ] Licenças, proveniência, links externos e conteúdo profissional são verificáveis.
- [ ] Testes cobrem regressões prováveis; screenshots não ocultam risco de device/GPU.
- [ ] Achados citam cenário, impacto e correção mínima; aprovação declara riscos não cobertos.

## Aprovar asset

- [ ] Brief existe e corresponde a função real na cena.
- [ ] Até três fontes e três finalistas foram comparados; não é compra por impulso/pack inteiro.
- [ ] Licença/EULA atual, autor, URL, preço/data e prova foram registrados.
- [ ] Sem marca/IP, cláusula NC/ND/SA/Editorial ou origem ambígua.
- [ ] Formato pode chegar a GLB/glTF sem modelagem manual extensa.
- [ ] Triângulos, materiais, texturas, transparência, LOD, collider e bytes cabem no budget.
- [ ] Escala, silhueta e materiais passam em Art Bible; harmonização é viável.
- [ ] Autorização identifica candidato e uso; aquisição ainda entra em quarentena.

## Validar UX de mundo/terminal

- [ ] Em 3 s, visitante percebe um destino; em 20–60 s caminhando, alcança o computador.
- [ ] Nenhuma etapa obrigatória requer pulo, precisão de mira, corrida ou conhecimento de jogo.
- [ ] Onboarding cabe em quatro linhas/ícones e desaparece após o primeiro movimento.
- [ ] Terminal libera pointer lock, move foco ao título e disponibiliza conteúdo sem espera artificial.
- [ ] Esc fecha terminal antes de qualquer outro comportamento; foco retorna ao elemento coerente.
- [ ] Som, reduced motion, sensitividade, FOV/qualidade e saída estão acessíveis sem HUD persistente.
- [ ] Teclado, touch e rota 2D completam a intenção equivalente.

## Validar performance

- [ ] Medir fluxo completo em low/high e devices definidos, incluindo viagens repetidas.
- [ ] Registrar p50/p95 frame, stutter, draw calls, triângulos, materiais, texturas/GPU e bytes.
- [ ] Comparar contra budget, não apenas contra FPS médio.
- [ ] Low mantém marco/caminho/terminal; efeito/decoração é removido antes de conteúdo.
- [ ] Dados de cena anterior são descartados e memória não cresce nos ciclos repetidos.
- [ ] DPR adaptativo tem histerese; não oscila visualmente.

## Atualizar documentação

- [ ] Decisão cara/difícil de reverter virou ADR ou atualizou ADR existente.
- [ ] Fonte de verdade única foi alterada; documentos derivados apenas apontam para ela.
- [ ] Status, owner, data e condição de revisão estão corretos.
- [ ] Registro documental, roadmap/readiness e links locais continuam coerentes.
- [ ] Handoff não inclui log bruto: registra decisão, evidência, risco e próximo passo.

