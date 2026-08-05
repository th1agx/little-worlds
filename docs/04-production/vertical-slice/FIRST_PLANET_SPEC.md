# Especificação do primeiro planeta — Projetos / Oficina das Pontes

**Estado:** proposta de Vertical Slice  
**Owner:** Art Director + UX Director + Technical Director  
**Depende de:** ADR 0009 aceito, moodboard e asset brief aprovados

## Por que este é o primeiro planeta

Projetos é a menor cena que comprova a promessa profissional completa: o visitante vê uma paisagem, alcança o computador e encontra evidência real de trabalho com um link externo verificável. Sobre Mim é mais simples visualmente, mas exigiria um conteúdo adicional artificial para provar a conversão profissional do Slice.

## Identidade

| Dimensão | Especificação |
| --- | --- |
| Título público | Projetos |
| Nome interno | Oficina das Pontes |
| Pergunta | “O que esta pessoa construiu?” |
| Emoção | confiança serena e curiosidade prática |
| Duração 3D | 60–120 s de exploração; 2–5 min de leitura do case |
| Marco | uma passarela/arco baixo em cobre quente |
| Antítese | fábrica, showroom de troféus, ponte perigosa, oficina industrial |

## Limites físicos e percurso

- Área percebida: 45–55 m de diâmetro; nunca uma ilha minúscula ou mapa expansivo.
- Spawn: o visitante vê em até 3 s a passarela, o pavilhão e parte do horizonte.
- Percurso essencial: 25–45 s caminhando a 1,6–2,2 m/s; passo rápido pode reduzi-lo, mas não abaixo de 18 s.
- Dois níveis com diferença máxima de 0,45 m. Passarela com largura de 2,2–2,6 m, guarda visual baixa ou relevo lateral seguro; não há queda punitiva.
- Pavilhão: 7–10 m de largura, aberto para o horizonte; caminho principal 1,9–2,3 m; entrada inequívoca.
- Todo acesso obrigatório funciona caminhando. O teste de pulo baixo não habilita atalhos, áreas ou conteúdo.

## Composição de cinco frames obrigatórios

1. **Spawn:** primeiro plano com uma rocha/gramínea; meio com passarela; fundo com pavilhão, céu e horizonte.
2. **Pausa antes da ponte:** banco/assento integrado opcional ou abertura de vista; espaço negativo mínimo de 35%.
3. **Travessia:** arco/estrutura cobre guia o olhar, sem virar portal ou checkpoint.
4. **Entrada:** pavilhão baixo, tela âmbar como segundo foco, saída/horizonte ainda perceptível.
5. **Terminal ativo:** bezel físico e luz conduzem ao DOM; conteúdo é o foco, não uma decoração de UI.

## Mundo, objetos e máximos

| Grupo | Quantidade para o Slice | Regra |
| --- | ---: | --- |
| pavilhão/oficina | 1 | shell aberto, pedra clara + cal + metal pintado cobre |
| computador | 1 | asset hero modular; tela, corpo e controles separáveis |
| passarela/ponte | 1 | modular, larga, segura e sem linguagem militar |
| formas abstratas | 2–3 | sugerem processo, não representam produtos específicos |
| rochas-base | até 3 modelos / 3–5 instâncias | silhuetas grandes, instancing quando aplicável |
| vegetação | 2–3 famílias / 3 grupos | resistente, baixa, sálvia/palha; nunca obstrui caminho |
| iluminação prática | 1–2 | terminal e detalhe funcional, não decoração |
| partículas | 0 no baseline; até 1 sistema após aprovação | fagulhas frias raras, origem mecânica plausível |

## Materiais e iluminação

- Materiais percebidos: solo mineral quente, pedra erodida, cal warm white, metal pintado cobre, vidro opalino. Madeira só se for necessária a uma interação humana.
- Sol lateral entre 8° e 16°, key de 3.600–4.300 K percebidos; fill lavanda/azul dessaturado e bounce quente próximo às superfícies claras.
- Céu: creme/pêssego no horizonte, malva no meio, azul profundo cromático no zênite. Sem HDRI de céu reconhecível como fundo obrigatório.
- Fog separa os dois planos e preserva visibilidade total do caminho. Low usa fog simples; high pode adicionar nuance, nunca nova composição.
- Sem pós no baseline low; qualquer bloom é seletivo, restrito ao emissivo do terminal e aprovado por comparação.

## Computador e conteúdo

### Forma física

Console “workstation”: corpo marfim, base em cobre fosco, tela larga, dois controles físicos grandes e luz âmbar única. Ele não imita um produto histórico, cockpit ou rack.

### Conteúdo mínimo real

Um case escolhido pelo owner antes do código, com:

- título e resumo de uma frase;
- contexto e problema;
- papel/responsabilidade e colaboração;
- uma decisão técnica/de produto com justificativa;
- processo resumido;
- resultado mensurável ou evidência honesta quando métrica não puder ser publicada;
- aprendizado;
- tecnologias no contexto; e
- um link externo real, acessível e seguro (por exemplo, repositório, projeto publicado ou case autorizado).

O destino externo abre com rótulo explícito e comportamento seguro. Se não existir um link real/publicável, o Slice não começa: conteúdo fictício não valida portfólio.

### Estados de interação

Dormindo → disponível → aproximação → conteúdo DOM ativo → saída. A aproximação dura 1,2–1,8 s e libera o pointer lock antes do foco ir ao título. Reduced motion troca o deslocamento por fade de 150–250 ms. Conteúdo fica clicável/legível assim que aparece; não há typing effect.

## Áudio

- Opt-in após gesto. Sem áudio, a cena continua integral.
- Bed: vento leve entre pedra e estrutura.
- Assinatura: mecanismo metálico suave em intervalos longos; sem marteladas, fábrica, synthwave ou faíscas constantes.
- Passos: solo/pedra discretos, com variações suficientes para não repetir de modo óbvio.
- UI: um feedback macio de confirmação, sem sons por hover.
- Música: fora do baseline; só entra após o ambiente e o silêncio serem aprovados.

## Configurações e acessibilidade específicas

- Perfis auto/low/high alteram densidade, sombras, DPR e pós, não conteúdo ou rota.
- Reduced motion remove dolly, animação ambiental não essencial e partículas; mantém indicação de interação em DOM.
- Teclado, mouse, touch e rota 2D recebem o mesmo case. Touch pode cair para passeio guiado ou 2D se o controle livre não for confortável.
- Sem pointer lock, o terminal e o case continuam alcançáveis por rota/índice DOM.

## Budget inicial do planeta

| Recurso | Low | High |
| --- | ---: | ---: |
| chunk transferido | <= 3 MB | <= 6 MB |
| triângulos visíveis | <= 150k | <= 500k |
| draw calls | <= 100 | <= 180 |
| materiais ativos | <= 35 | <= 60 |
| memória de texturas estimada | <= 128 MB | <= 256 MB |
| sombras | 0–1 | <= 2 |

Se a cena só atende ao visual ao ultrapassar o budget, remover ou substituir objetos antes de elevar limite.

## Critérios de aceite do planeta

- O marco e a entrada são percebidos sem HUD ou instrução adicional.
- O case é aberto, lido e seu link externo alcançado por mouse e teclado.
- O retorno ao Hub preserva segurança de foco e não deixa cena anterior residente.
- Todos os objetos passam em função narrativa, navegação ou composição; extras são removidos.
- Frames low/high/reduced motion permanecem reconhecivelmente a mesma cena.
- Asset ledger, licença e origem existem para todo asset real usado.

