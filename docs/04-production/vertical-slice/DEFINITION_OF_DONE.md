# Definition of Done — Vertical Slice

**Regra:** “funciona no meu computador” não é pronto. Cada nível abaixo acumula os anteriores e requer evidência proporcional ao risco.

## Sprint

- [ ] Todo P0 do `SPRINT_1.md` foi concluído, adiado explicitamente por decisão ou removido com aprovação.
- [ ] Gates G0–G4 possuem decisão, owner e evidência registrada.
- [ ] Os riscos críticos foram fechados, mitigados com aceite explícito ou convertidos em bloqueio da próxima sprint.
- [ ] Handoff lista o que mudou, como foi validado, riscos residuais e próximo gate.

## Feature

- [ ] Objetivo, não objetivo, critérios observáveis e pacote de docs constam do task brief.
- [ ] Estados normal, loading, erro, cancelamento e saída são definidos quando aplicáveis.
- [ ] Implementação não introduz HUD, progressão, conteúdo Canvas-only ou dependência nova sem justificativa.
- [ ] Testes proporcionais passam e as limitações não automatizáveis estão registradas.
- [ ] Acessibilidade, performance e efeito em low/reduced foram considerados antes do merge.

## Planeta / cena

- [ ] Pergunta profissional, emoção, marco, caminho e conteúdo correspondem à Planet/First Planet Spec.
- [ ] Spawn aponta para destino em até 3 s; computador é alcançável em 20–60 s somente caminhando.
- [ ] Há cinco frames aprováveis: spawn, percurso/pausa, entrada, interior e terminal.
- [ ] Um único marco domina cada frame-chave e 35–55% de espaço negativo é preservado quando aplicável.
- [ ] Low/high/reduced são a mesma cena em composição e conteúdo; apenas detalhe/custo mudam.
- [ ] Uma cena residente por vez; troca/retorno não deixam recursos ativos indevidos.
- [ ] Terminal abre, recebe foco, permite leitura/links e sai com Esc sem prender pointer lock.
- [ ] Rota 2D equivalente expõe o mesmo conteúdo e deep links funcionam.

## Asset / áudio

- [ ] Brief, candidato, autor, URL, data, licença/EULA, prova, custo e atribuição foram registrados.
- [ ] Origem não contém marca/IP proibida e passa no teste anti-cópia.
- [ ] Formato, escala, topologia, materiais, texturas, animações e bytes foram inspecionados.
- [ ] Derivado runtime foi validado e respeita budget de cena; fonte fica fora do bundle público.
- [ ] Ledger/manifest inclui hash, uso, LOD/collider quando aplicável e transformação executada.
- [ ] Áudio tem permissão para website interativo, loop/loudness revisados e não inicia sem gesto.

## Código e entrega técnica

- [ ] Typecheck, lint, format, build e testes relevantes passam em ambiente reproduzível.
- [ ] Sem erros/avisos novos de console no fluxo crítico.
- [ ] Não há estado React atualizado por frame, alocação repetida por render, loader duplicado ou recurso sem cleanup conhecido.
- [ ] Fluxos críticos passam em Chromium, Firefox e WebKit atuais, mais os devices físicos acordados.
- [ ] Acesso por teclado, zoom 200%, viewport 320 px, reduced motion, som desligado e falha WebGL foram exercitados.
- [ ] Performance foi medida ao caminhar, abrir/fechar terminal e trocar Hub↔Projetos; budgets comparados.
- [ ] Screenshots/baselines foram revistos por humano, não apenas aceitos por diff automatizado.
- [ ] Documentação, ADR/ledger e changelog de escopo refletem o contrato final.

