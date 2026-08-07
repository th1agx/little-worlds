# Art Bible

**Estado:** fonte de verdade visual  
**Owner:** Art Director  
**Mudança:** exige aprovação visual; princípios estruturais exigem ADR

## 1. Declaração visual

O universo deve parecer uma lembrança acolhedora de um lugar que nunca existiu: pequeno o bastante para ser íntimo, amplo o bastante para inspirar curiosidade. É um cosmos artesanal, não tecnológico; poético, não infantil; estilizado, não cartunesco; belo porque seleciona, não porque acumula.

Frase-guia: **“um fim de tarde que decidiu não acabar.”**

## 2. Pilares

### Solidão acolhedora

Poucas construções e nenhuma multidão. A ausência sugere espaço pessoal, não abandono. Sempre existe um sinal de cuidado humano: banco, luz acesa, trilha varrida, computador esperando.

### Escala compreensível

O planeta é pequeno e curvo, mas não brinquedo. Portas, bancos, árvores e degraus dão escala humana. O horizonte revela a curvatura sem fazer o visitante sentir que está sobre uma bola minúscula.

### Calor sem nostalgia literal

Materiais foscos, luz dourada e controles físicos transmitem cuidado. Evitar reproduzir décadas/objetos específicos. O computador é “futuro gentil”, não retro replica.

### Simplicidade expressiva

Simplicidade significa hierarquia, não pobreza visual. Uma massa de árvores bem composta vale mais que uma floresta procedural sem foco. Uma abertura para o céu vale mais que vinte janelas. Cada família de assets precisa sustentar narrativa, navegação, atmosfera ou composição.

### Esperança no horizonte

Toda cena oferece pelo menos uma vista aberta. Arquitetura nunca aprisiona; interiores possuem saída/oculus/janela que mantém o céu presente.

## 3. Paleta global

Os hex abaixo são alvos de direção, não valores finais de shader. Cor final depende de tone mapping, exposição e display. Contraste de texto é validado separadamente.

| Papel            | Cor-alvo  | Uso                                                         |
| ---------------- | --------- | ----------------------------------------------------------- |
| warm white       | `#F7E9CF` | superfícies claras, interior do terminal, highlights amplos |
| parchment        | `#E8CFA7` | chão claro, pedra quente, UI secundária                     |
| sun gold         | `#F2BC5B` | disco solar, bordas, ponto de orientação                    |
| honey            | `#D9943D` | luz funcional, detalhes do computador                       |
| soft orange      | `#CE714A` | horizonte, metal pintado, acento emocional                  |
| dusk rose        | `#B77779` | transição céu/névoa, variação por planeta                   |
| gentle purple    | `#78658D` | céu médio, sombra colorida, planeta Tecnologia              |
| deep shadow blue | `#263B59` | sombra máxima, céu superior, nunca fundo preto puro         |
| sage             | `#7D8F61` | vegetação base                                              |
| dry grass        | `#B79A61` | gramíneas, Sobre/Experiência                                |
| warm stone       | `#9C7B67` | rochas e arquitetura mineral                                |
| painted metal    | `#C8BFAE` | computadores, observatórios, estruturas                     |

### Distribuição

- 55–65% tons claros/quentes e neutros.
- 20–30% laranja/rosa/roxo atmosférico.
- 10–20% azul profundo em sombras/céu alto.
- Até 5% acento funcional do planeta.
- Preto absoluto: 0% em superfícies principais; apenas necessidade técnica transitória.

### Regras de cor

- O dourado indica orientação, vida ou disponibilidade; não é moeda/recompensa.
- Roxo conecta céu e sombra; nunca vira neon saturado.
- Azul aparece por profundidade e contraste térmico, não para tornar uma cena “sci-fi”.
- Verde é aquecido pela luz e controlado pelo color grade. Verdes ricos são permitidos; verde neon/esmeralda uniforme continua proibido.
- Cada planeta recebe um acento, mas permanece dentro da paleta global.

## 4. Materiais

### Filosofia

Materiais devem ser legíveis por roughness, cor e silhueta antes de depender de mapas complexos. O estilo é “PBR simplificado”: fisicamente plausível o bastante para responder à luz, editado o bastante para manter unidade.

### Famílias permitidas

| Família        | Aparência                                 | Uso                         | Evitar                                          |
| -------------- | ----------------------------------------- | --------------------------- | ----------------------------------------------- |
| terra mineral  | mate, granularidade larga, variação suave | solo e caminhos             | displacement ruidoso, lama molhada              |
| pedra erodida  | bordas arredondadas, planos grandes       | marcos, assentos, fundações | scan hiper-real sem estilização                 |
| cerâmica/cal   | warm white, irregularidade sutil          | paredes internas e domos    | branco clínico/reflexo plástico                 |
| metal pintado  | fosco/satinado, bordas discretas          | computador e mecanismos     | chrome, gunmetal militar, desgaste extremo      |
| madeira clara  | fibra ampla e baixa frequência            | banco, corrimão, detalhes   | cabana rústica excessiva                        |
| vidro leitoso  | translúcido/opalino, brilho baixo         | luminárias e telas inativas | vidro preto espelhado                           |
| vegetação      | cores por massa/vertex, roughness alta    | plantas                     | folhas recortadas fotorrealistas inconsistentes |
| emissivo âmbar | intensidade controlada e borda suave      | estado interativo           | bloom estourado ou ciano padrão                 |

### Regras técnicas de aparência

- Máximo visual recomendado: 5–7 famílias de material por planeta.
- Reutilizar material com variações por cor/vertex antes de criar novo.
- Microdetail invisível à distância de uso é removido.
- Decals só para função/narrativa clara; não adicionar sujeira aleatória.
- Transparência continua cara; folhagem pode usar alpha recortado/pintado quando overdraw, sorting, mipmaps e perfil Low forem medidos no Visual Benchmark.

## 5. Iluminação

### Estado global

Fim de tarde eterno, sol baixo entre 8° e 16° do horizonte. O sol nunca está diretamente no centro do percurso por longos períodos e não deve ofuscar controles/conteúdo.

### Estrutura

1. **Key solar:** quente, direcional, sombras longas e macias.
2. **Fill do céu:** roxo/azul suave, suficiente para preservar leitura em sombra.
3. **Bounce quente falsificado/baked:** próximo ao solo e paredes claras.
4. **Luzes práticas:** computadores e interiores; poucas e justificadas.
5. **Emissivos:** orientação sutil, sem substituir iluminação de cena.

### Valores de direção

- Temperatura percebida da key: 3.600–4.300 K.
- Fill percebido: azul/roxo dessaturado, nunca branco neutro.
- Penumbra ampla; contact shadow apenas onde ancora objeto.
- Exposição preserva detalhe no céu e no warm white.
- Contraste cinematográfico moderado: sombras coloridas, não esmagadas.

### Interiores

- Sempre recebem luz natural por porta, janela ou oculus.
- O computador é o segundo foco luminoso, nunca a única fonte.
- A saída deve permanecer visualmente legível ao usar o terminal.
- Nada de corredores escuros ou iluminação de emergência vermelha.

### Proibido

Meio-dia, noite completa, luz fluorescente, rim lights múltiplas sem fonte, volumetric god rays constantes, lens flare agressivo, bloom em toda superfície clara ou sombra preta.

## 6. Céu, estrelas e cosmos

### Céu

Gradiente vertical sugerido:

- Horizonte: creme dourado → pêssego.
- 10–35°: laranja suave → rosa queimado.
- 35–65°: malva/roxo suave.
- Zênite: azul profundo, ainda cromático.

O gradiente varia por planeta no peso das faixas, não em linguagem.

### Sol

- Disco pequeno e macio, sem textura de fogo.
- Pode ficar parcialmente oculto por terreno/arquitetura para controlar contraste.
- Não criar eclipse, dois sóis ou eventos dramáticos no MVP.

### Estrelas

- Visíveis apenas no céu roxo/azul superior por licença poética.
- Densidade baixa, distribuição irregular e tamanho subpixel/pequeno.
- Sem constelações reconhecíveis, Via Láctea fotográfica ou starfield veloz.
- Twinkle lento e raro; nenhum piscar síncrono.

### Outros planetas

- Orbes distantes com silhueta simples, halo mínimo e cores da paleta.
- Escala subordinada ao sol/horizonte; não ocupar mais que pequena fração da vista normal.
- Nenhum anel, cratera ou padrão distintivo deve remeter diretamente às referências.

## 7. Atmosfera e neblina

- Fog serve à separação de planos e à curvatura, não para esconder cenário incompleto.
- Cor entre parchment, dusk rose e gentle purple conforme direção solar.
- Visibilidade sempre cobre o caminho completo ao marco principal.
- Altura baixa opcional em vales; interior nunca recebe “fumaça”.
- Volumetria é enhancement high; o perfil low mantém a mesma composição via fog simples.
- Sem tempestade de areia, nuvem tóxica, fumaça industrial ou horror liminal.

## 8. Vegetação

### Linguagem

Vegetação é estratificada, resiliente e movida pelo vento. Pode ser visualmente densa nas margens, fundos e transições, preservando percurso, horizonte e foco. O desenho lê por massas, não por espécies botânicas.

### Camadas de composição por vista

1. Cobertura baixa descontínua.
2. Grupos de gramíneas e flores em drift.
3. Arbustos formando transição e enquadramento.
4. 1 marco arbóreo ou mineral e grupos de copas secundárias nas bordas/fundo.

### Árvores

- Tronco ligeiramente curvo; copa assimétrica e volumosa, formada por massas sobrepostas.
- Folhagem em massas grandes, não milhares de folhas visíveis.
- Altura comum 4–7 m; árvore-marco até 9 m.
- Cor oliva/sálvia com bordas aquecidas.
- Nunca árvore diretamente reconhecível das obras de referência.

### Gramíneas e arbustos

- Grupos de 3, 5 ou 7, com vazios entre massas.
- Variação controlada de altura/rotação; aleatoriedade não substitui composição.
- Plantas devem revelar o caminho e a base da arquitetura.
- Inspiração em paisagismo naturalista: estrutura, silhueta e movimento importam mais que flores.

### Proibido

Floresta procedural sem composição, grama uniforme sem variação de massa, arco-íris floral, plantas bioluminescentes neon, árvores gigantes fantásticas ou vegetação bloqueando navegação.

## 9. Vento

O vento é a “respiração” do universo.

- Direção dominante consistente por planeta.
- Ciclo-base longo de 8–18 s, com pequenas variações assíncronas.
- Vegetação baixa move mais que troncos/arquitetura.
- Partículas e áudio confirmam a mesma direção.
- Rajada é rara, suave e sem alterar controle/câmera.
- Elementos não devem balançar em sincronia.
- Em reduced motion, amplitude cai 60–90%; leitura do mundo permanece.

## 10. Partículas e efeitos

### Permitidos

- Poeira dourada próxima ao solo.
- Pólen/sementes ocasionais em Sobre/Experiência.
- Pequenos motes luminosos junto a computadores, não pelo mundo inteiro.
- Fagulhas frias muito discretas em Projetos, com origem mecânica plausível.
- Linhas/sinais lentos e opacos em Tecnologia, sempre abstratos.

### Quantidade visual

- Low: 12–40 partículas simultâneas relevantes.
- Medium: 30–80.
- High: 60–160, desde que overdraw e composição permitam.
- No máximo dois sistemas visíveis na mesma composição.

### Regras

- Movimento lento, deriva e fade; nenhuma explosão ou trail veloz.
- Tamanho variado e opacidade baixa.
- Efeito desaparece quando terminal abre.
- Partículas nunca indicam loot, checkpoint ou objetivo.

## 11. Arquitetura

### Tese

“Observatórios habitáveis”: pequenos abrigos que enquadram céu, luz e horizonte. Devem parecer construídos para observar, pensar e registrar, não pesquisar armas ou operar naves.

### Vocabulário

- Volumes baixos, redondos ou facetados suavemente.
- Paredes grossas, aberturas profundas e cantos suavizados.
- Oculi, janelas horizontais e portas acolhedoras.
- Bases minerais; detalhes em metal pintado e madeira clara.
- Mecanismos externos simples: uma antena, um braço, uma persiana — nunca todos.
- Assimetria equilibrada, sem monumentalidade.

### Limites por planeta

- Uma construção principal.
- Um volume anexo opcional, menor que 35% do principal.
- Uma entrada inequívoca.
- Uma sala principal do computador; corredor só se curto e iluminado.
- Até três props funcionais no interior além do computador/assento.

### Proporções

- Altura de olho de referência: 1,65 m.
- Porta: 1,05–1,25 m × 2,1–2,35 m.
- Caminho principal: 1,8–2,4 m.
- Pé-direito: 2,7–4,2 m; oculus pode ampliar verticalmente.
- Console: centro visual a 1,15–1,35 m; interação confortável sem agachar.
- Banco: assento a 0,43–0,48 m.
- Construção: 5–12 m de largura; nenhum “complexo”.
- Área caminhável do planeta: aproximadamente 45–80 m de diâmetro, calibrada por tempo, não escala cosmológica.

### Proibido

Hangar, bunker, base lunar realista, laboratório modular, tubulação industrial dominante, greebles, hazard stripes, portas automáticas militares, consoles infinitos, cabos espalhados ou branding corporativo.

## 12. Computadores

### Família

Todos compartilham DNA: corpo compacto, cantos suaves, metal pintado claro, vidro/tela quente, uma luz âmbar, controles físicos grandes e poucos. Cada planeta altera apoio, proporção ou detalhe material — não inventa outra linguagem.

### Estados

- **Dormindo:** tela escura azul-violeta com reflexão quente; pulso âmbar lento.
- **Disponível:** brilho marfim suave e som mecânico distante.
- **Aproximação:** elementos físicos respondem uma vez; nada pisca freneticamente.
- **Ativo:** tela ocupa a visão; bezel/material ainda influencia bordas/cores.
- **Saída:** interface recua, ambiente sonoro retorna, controle só volta após foco estar seguro.

### Interface visual

- Tipografia humanista/geométrica legível; monospace apenas para metadados.
- Fundo escuro cromático ou papel quente, conforme contraste validado.
- 1 coluna principal; navegação simples e persistente dentro da tela.
- Sem scanline forte, glitch, green-on-black, código decorativo ou jargon sci-fi.

## 13. Planetas e terreno

- Curvatura visível no horizonte a média distância, nunca deformando arquitetura próxima.
- Silhueta geral simples: uma elevação principal, uma depressão e um horizonte aberto.
- Terreno conduz por inclinação/luz; barreiras invisíveis são último recurso.
- Bordas perigosas são suavizadas por relevo/vegetação; queda recupera sem tela de falha.
- Cada planeta possui 2–3 materiais de terreno no máximo.
- Crateras, lava, gelo, oceano ou gravidade incomum só entram se servirem à carreira e passarem por ADR.

## 14. Composição

### Regra de três planos

- Primeiro plano: 1–3 elementos que dão escala e enquadramento.
- Plano médio: caminho + marco/construção.
- Fundo: horizonte, sol/outro planeta e céu.

### Spawn

- Terminal/construção não precisa estar totalmente exposto, mas sua direção deve ser clara em até 3 s.
- Um elemento foreground convida a mover; não bloquear a vista.
- A luz forma trajetória de valor do spawn à entrada.

### Caminho

- Curva única suave é preferível a linha reta ou zigue-zague.
- Uma pausa visual (banco, árvore, vista) antes da construção.
- Sem bifurcação que pareça escolha errada; exploração lateral retorna naturalmente.

### Interior

- Computador é foco por contraste, escala e alinhamento.
- Porta/horizonte permanece segundo foco.
- Props formam grupos, não bordas decorativas.

### Espaço negativo

Manter 35–55% do frame-chave sem objeto dominante. Céu conta como conteúdo atmosférico, não vazio a preencher.

## 15. Animação

### Curvas

Ease-in-out suave para câmera/arquitetura; respostas de input iniciam imediatamente e estabilizam sem overshoot. Spring/bounce é proibido na interface principal.

### Durações de direção

| Evento                        |                                    Duração |
| ----------------------------- | -----------------------------------------: |
| feedback hover/foco           |                                 160–240 ms |
| prompt contextual             |                                 240–400 ms |
| resposta física do computador |                                 450–800 ms |
| aproximação da câmera         |                                  1.2–1.8 s |
| interface ocupar tela         | 500–900 ms, sobreposta à aproximação final |
| troca de seção interna        |                                 200–350 ms |
| saída do computador           |                                  900–1.4 s |
| viagem entre planetas         |             2.5–4 s, conforme loading real |
| ciclos ambientais             |                                     8–30 s |

Reduced motion substitui dolly por fade de 150–250 ms e elimina parallax/oscilações não essenciais.

## 16. Exemplos de aplicação

### Correto

- Uma construção branca baixa, parcialmente embutida em pedra quente, iluminada lateralmente, com uma árvore e um banco.
- Um observatório simples com oculus, duas rochas grandes e gramíneas que mostram vento.
- Computador marfim com botão âmbar e tela violeta escura, sem teclado cheio de luzes.
- Três grupos de vegetação compostos manualmente e repetidos por instancing.

### Incorreto

- Base espacial cinza com antenas, painéis, cabos, neon e muitas salas.
- Planeta coberto por scatter/props de packs diferentes sem harmonização ou hierarquia.
- Céu preto com nebulosa HDR saturada e estrelas grandes.
- Interface holográfica flutuando fora do computador.
- Asset fotorrealista ao lado de terreno low-poly sem tratamento.

## 17. Gate de aprovação visual

Uma cena só avança se possuir:

- frame-chave de spawn, caminho, entrada, interior e terminal;
- comparação low/high e reduced motion;
- paleta medida e contraste do terminal validado;
- lista total de objetos e justificativa de cada um;
- source/asset board com licenças e plano de harmonização;
- verificação contra a lista proibida;
- teste de silhueta em grayscale e miniatura;
- assinatura do Art Director, UX Director e responsável por performance.
