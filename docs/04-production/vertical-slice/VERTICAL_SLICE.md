# Vertical Slice — Sprint 1

**Estado:** proposta para aprovação antes de qualquer código  
**Owner:** Lead Technical Director + Creative Director + Product Owner  
**Data:** 2026-08-04

## Decisão de recorte

O Vertical Slice será **Hub — Limiar + Projetos — Oficina das Pontes**, com um único estudo de caso real e um link externo funcional. Ele substitui, somente para fins de validação inicial, a ordem anterior que começava pelo planeta Sobre Mim.

O motivo é objetivo: o Slice precisa provar que a atmosfera 3D melhora — e não esconde — a prova profissional. Um projeto real, legível e linkável testa essa hipótese diretamente. Sobre Mim continua sendo o primeiro planeta emocional na sequência editorial posterior; não é descartado.

Esta decisão permanece **proposta** até aprovação do ADR 0009.

## Objetivo

Demonstrar, em uma experiência pequena mas completa, que uma pessoa consegue:

1. ajustar preferências antes de entrar no mundo;
2. explorar o Hub e chegar a um único planeta sem HUD, pressão ou ambiguidade;
3. abrir o computador físico do planeta por interação diegética;
4. ler um case profissional real em interface DOM acessível;
5. abrir um link externo real e retornar ao Hub;
6. obter o mesmo conteúdo pela rota 2D quando WebGL, controles ou preferência não forem adequados.

O Slice valida produto, arquitetura, pipeline e direção de arte. Não é uma demo de mecânicas nem uma versão reduzida do universo inteiro.

## Hipóteses que precisam de evidência

| Hipótese | Evidência mínima | Falha que invalida |
| --- | --- | --- |
| O 3D aumenta curiosidade sem esconder conteúdo | Testes moderados: participantes encontram computador, case e link sem ajuda; rota 2D continua imediata | Usuários não entendem como acessar informação ou preferem abandonar por fricção |
| Hub orienta sem virar menu de jogo | Todos localizam Projetos em até 30 s, sem marcador persistente | Perguntas repetidas de “o que faço agora?” ou procura aleatória |
| Terminal diegético é mais memorável sem ferir a11y | Foco, teclado, zoom 200%, Esc e rota direta funcionam; leitura inicia sem espera artificial | Foco preso, conteúdo em Canvas, texto pouco legível ou transição longa |
| Perfil low preserva a intenção | Comparação low/high mantém marco, caminho, luz e terminal; budget/frametime aprovados | Low vira cena visualmente diferente ou instável |
| Passo rápido e pulo baixo merecem existir | Avaliação controlada de conforto/clareza descrita no ADR 0010 | Criam leitura de jogo, desorientação ou não agregam liberdade percebida |

## Escopo incluído

### Entrada e configurações

- Tela inicial leve, chamada **Boas-vindas e preferências**, não “menu de jogo”.
- Escolhas equivalentes: explorar em 3D ou abrir o portfólio 2D.
- Preferências mínimas: qualidade `auto/low/high`, intensidade de movimento `reduzida/padrão`, som desligado por padrão com ativação após gesto, sensibilidade de olhar e passo rápido hold/toggle.
- Estado de capacidade e fallback compreensível; o visitante pode ignorar o 3D.
- Persistência local apenas das preferências aprovadas; sem conta, progresso ou telemetria detalhada.

### Hub — Limiar

- Platô compacto, pavilhão/terminal de navegação, horizonte, anel de pedra e indicadores leves.
- Apenas **Projetos** é destino 3D navegável nesta sprint. Os demais destinos levam à rota 2D ou exibem estado honesto de “em preparação”; nunca ficam bloqueados como recompensa.
- Caminho e construção legíveis nos primeiros 3 s; terminal/índice também permite selecionar Projetos.
- Transição cancelável de 2,5–4 s apenas enquanto houver carregamento real; reduced motion usa fade curto.

### Projetos — Oficina das Pontes

- Terreno de dois níveis baixos, passarela larga, pavilhão aberto, computador, até três formas abstratas e vegetação esparsa.
- Um case real completo no computador e em URL 2D. O case contém contexto, problema, papel, decisão, processo, resultado/aprendizado e link externo seguro.
- Entrada/retorno ao Hub, recuperação sem punição, áudio opt-in, low/high e reduced motion.

### Qualidade e operação

- Capacidade/falha WebGL redireciona para conteúdo 2D, sem tela preta.
- Testes de fluxo crítico, teclado/foco, reduced motion, WebGL ausente, rotas 2D e link externo.
- Evidência de performance nos dispositivos definidos no gate de início; baseline visual dos cinco frames: Hub spawn, Hub terminal, Projetos spawn, terminal aberto e retorno.
- Ledger e provas de licença para todo asset efetivamente adquirido/uso; nenhum asset entra sem registro.

## Fora de escopo explícito

- Os outros cinco planetas em 3D, universo contínuo, nave pilotável, mapa/minimapa, HUD, inventário, combate, missões, colecionáveis ou progressão.
- Formulário, CMS, login, backend, analytics detalhado, gamepad, WebGPU obrigatório, PWA e internacionalização.
- Pulo como requisito de percurso, obstáculos que exigem habilidade, corrida/sprint, stamina, head bob, camera roll, motion blur ou FOV kick.
- Biblioteca definitiva de áudio, música final, compra em lote de assets, modelagem manual no Blender e arte generativa publicada.
- Otimização especulativa, pós-processamento decorativo, física complexa ou abstrações para planetas ainda inexistentes.

## Critérios de sucesso do Slice

### Produto e UX

- Um participante desktop encontra Projetos, abre o terminal, lê o case e encontra o link externo sem instrução adicional após o onboarding curto.
- A rota 2D do mesmo case é navegável por teclado, suporta zoom de 200% e não depende de Canvas, áudio ou pointer lock.
- Esc fecha primeiro a interface e devolve o foco/controle de modo previsível; não há trap de pointer lock.
- Nenhuma informação profissional essencial aparece apenas no mundo 3D.
- Pelo menos 5 sessões qualitativas moderadas ou observadas, com registro de hesitação, conforto e as palavras espontâneas usadas para descrever a experiência. Não é pesquisa estatística; é gate de risco.

### Técnica e performance

- Uma única cena 3D residente por vez; três idas e voltas Hub↔Projetos não mostram crescimento progressivo de memória observável.
- Perfil low atinge p95 de frame <= 33 ms no dispositivo móvel/referência definido; high busca p95 <= 16,7 ms no desktop de referência. Medir spawn, caminhada, terminal, saída e viagem.
- Shell/rota 2D mantém LCP <= 2,5 s, INP <= 200 ms e CLS <= 0,1 no ambiente de medição acordado.
- Chunk 3D inicial do Hub e de Projetos respeita os budgets iniciais de 3 MB low / 6 MB high por cena; exceção exige ADR + evidência.
- Sem erros de console, tela preta, asset sem licença, deep link quebrado ou falha não recuperável no fluxo crítico.

### Direção e acessibilidade

- Fim de tarde, paleta, espaço negativo, um marco principal, terminal físico e conteúdo DOM passam nos gates das bíblias.
- Low, high e reduced motion preservam a composição e a leitura profissional.
- Teste de veto em 60 segundos de `RULES.md` passa para cada frame-chave e asset aprovado.

## Critérios de fracasso / stop conditions

Interromper expansão e corrigir a fundação se ocorrer qualquer um destes casos:

- O visitante não encontra o conteúdo ou entende o Hub apenas após orientação humana.
- O terminal prejudica foco, legibilidade, URL, saída ou equivalência 2D.
- A cena depende de salto, sprint ou HUD para ser navegável.
- O perfil low perde o marco/caminho/terminal ou fica abaixo do budget de frame de modo recorrente.
- Asset crítico não tem licença/proveniência comprovável.
- Testes de conforto relatam enjoo, pressa, confusão ou sensação predominante de “jogo com currículo”.

## Gates antes e depois

| Gate | Condição | Decisão |
| --- | --- | --- |
| G0 — autorização | ADRs 0005–0010 aprovados, conteúdo real e devices definidos | pode iniciar código |
| G1 — style + asset brief | moodboards, frame-alvo e shortlist licenciável aprovados | pode adquirir somente os assets aprovados |
| G2 — fluxo estrutural | 2D, capacidade, Hub, viagem, terminal e foco funcionam com placeholders legais | pode integrar direção final |
| G3 — cena e conteúdo | Projetos completo, link externo, perfis e fallback prontos | pode iniciar validação em devices/usuários |
| G4 — aceite | budgets, QA, licença e validação qualitativa aprovados | libera Sprint seguinte |

## Métricas de decisão sobre controles

Para evitar decidir por gosto, registrar em cada sessão: tempo até o terminal, número de correções de rota, uso do passo rápido, tentativas de pulo, quedas/recovery, desconforto relatado, percepção de liberdade e leitura de “jogo”. A amostra é qualitativa; o objetivo é encontrar sinais fortes, não otimizar uma métrica isolada.

