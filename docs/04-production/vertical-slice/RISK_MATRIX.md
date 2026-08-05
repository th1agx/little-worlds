# Matriz de riscos — Vertical Slice

**Escala:** impacto/probabilidade de 1 (baixo) a 5 (crítico/alta). Priorizar produto pelo produto `I × P`; reavaliar a cada gate.

| ID | Classe | Risco | I | P | Sinal antecipado | Mitigação / resposta | Owner |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| R1 | Produto | 3D atrasa ou esconde o case | 5 | 3 | participante pergunta como “ver o portfólio” | rota 2D primeiro, terminal imediato, teste de tempo/hesitação | UX + Product |
| R2 | UX | Hub parece menu de jogo/confuso | 4 | 3 | procura sem direção ou espera por objetivo | um destino ativo, marco/índice claros, teste sem HUD | UX + Art |
| R3 | UX | Pointer lock/foco prende visitante | 5 | 2 | Esc falha, leitor/teclado perde foco | contrato de estados, E2E, retorno de foco e fallback 2D | Frontend |
| R4 | Conforto | Câmera causa enjoo | 5 | 3 | relato de tontura, muitas pausas, movimento errático | FOV seguro, sem bob/roll/blur, reduced motion e testes físicos | UX + Frontend |
| R5 | Mecânica | Pulo/velocidade induzem leitura de plataforma | 4 | 3 | usuários tentam “vencer” percurso ou aceleram sem observar | experimento A/B, nenhum obstáculo/atalho, ADR 0010 | UX + Tech |
| R6 | Técnica | Controlador simples falha em ponte/desnível | 4 | 3 | clipping, jitter, quedas ou recovery frequente | spike isolado, terreno suave, interface de controlador, avaliar Rapier só com evidência | Tech |
| R7 | Técnica | Cena anterior não é descartada | 5 | 2 | memória cresce após Hub↔Projetos | uma cena residente, lifecycle/disposal test, profiling de três ciclos | R3F |
| R8 | Performance | Mobile low não sustenta frame pacing | 5 | 3 | p95 >33 ms, aquecimento, stutter ao abrir terminal | low-first, DPR/efeitos adaptativos, instancing e budgets por asset | Performance |
| R9 | Performance | Asset hero excede bundle/GPU | 4 | 3 | GLB/texturas grandes, draw calls inesperados | shortlist técnica, quarentena, validator/auditor e substituir cedo | Tech Art |
| R10 | Arte | Assets de fontes diferentes parecem colagem | 4 | 3 | materiais/escala incompatíveis em frame grayscale | style frame, poucas famílias de materiais, rejeitar ao invés de remendar | Art |
| R11 | Arte | Cena deriva para sci-fi militar/cyberpunk | 4 | 2 | muitos painéis, neon, mecanismos ou sombras pretas | veto 60 s, Art Bible e revisão fresh-eyes | Art + Creative |
| R12 | Conteúdo | Case/link real não fica pronto | 5 | 3 | texto placeholder, claim sem prova ou URL indefinida | gate de conteúdo antes de código, owner/editorial definido | Product |
| R13 | Legal | Asset/áudio tem licença incerta | 5 | 2 | preview sem autor/EULA, arquivo sem prova | não adquirir, ledger e prova obrigatórios, fonte alternativa | Product + Legal |
| R14 | Acessibilidade | Canvas é único caminho de conteúdo | 5 | 2 | deep link falha ou não há rota sem WebGL | shell 2D primeiro, smoke WebGL ausente | Frontend + QA |
| R15 | Acessibilidade | Reduced motion só desliga efeitos, não transição espacial | 4 | 3 | câmera ainda faz dolly/partículas ativas | contrato por estado, teste dedicado e screenshot/fluxo | UX + QA |
| R16 | Áudio | Som começa sem gesto ou mascara problema visual | 3 | 2 | autoplay bloqueado, feedback excessivo | opt-in, teste em silêncio, AudioContext lifecycle | Audio |
| R17 | Processo | ADRs propostos são ignorados | 5 | 3 | decisões contraditórias no PR | G0 bloqueia código; aceitar/superar ADRs explicitamente | Technical Director |
| R18 | Escopo | Hub completo e seis destinos entram no Slice | 5 | 3 | placeholders viram mini-planetas/novas mecânicas | Definition of Done e changelog de escopo; P1 após gate | Product |
| R19 | Dependências | Adotar física/pós/biblioteca sem necessidade | 3 | 3 | packages antes de hipótese validada | matriz de adoção e spike; uma capacidade por biblioteca | Tech |
| R20 | Validação | Aprovação por screenshots substitui usuários/devices | 4 | 3 | feedback apenas interno em desktop high | sessões observadas e matriz real de dispositivos | QA + UX |

## Riscos que bloqueiam G0

R12, R13 e R17 impedem a primeira linha de código. R3, R4, R7, R8 e R14 bloqueiam o aceite final mesmo que a cena esteja visualmente bonita.

