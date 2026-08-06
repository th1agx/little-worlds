# Biblioteca oficial de assets

**Estado:** curadoria aprovada; nenhum arquivo adquirido

**Data da pesquisa:** 2026-08-05; revisão visual 2026-08-06

**Owners:** Art Director + Technical Artist + Asset Pipeline Engineer

## Decisão editorial

Little Worlds não adotará um pack como direção de arte. A biblioteca será uma coleção pequena de matérias-primas compatíveis, harmonizadas por paleta, materiais, iluminação, escala e composição próprias.

A escolha de uma base visual foi **reaberta**. KayKit Forest e Quaternius Simple Nature continuam úteis como fallback técnico, distante, colisor ou matéria-prima pontual, mas não definem a aparência do projeto. A referência dominante aparenta usar **Dreamscape Nature: Meadows**; ele passa a ser o primeiro candidato a investigar, condicionado a source, licença e conversão Web. A comparação completa está em [`ASSET_RESEARCH_ROUND_2.md`](ASSET_RESEARCH_ROUND_2.md).

Nenhum pack será adotado como direção de arte. A meta agora é `stylized 3D environment`: vegetação volumosa, estratos densos, cliffs de planos largos, água estilizada e atmosfera quente, harmonizados por materiais, paleta, iluminação, vento, fog, escala e composição próprios.

Nenhum candidato desta pesquisa está aprovado para runtime. `APPROVED_ASSETS.md` aprova apenas itens para download controlado e quarentena. Aprovação de produção exige inspeção do arquivo.

## Princípio de veto

Antes de qualquer shortlist, perguntar:

> Se este asset estivesse em uma experiência contemplativa de formas simples, luz quente e silêncio, ele pareceria deslocado ou reconhecível como vindo de outro produto?

As obras citadas pelo projeto são referências de sensação, não testes de imitação. O asset é rejeitado quando depende de linguagem visual reconhecível de Journey, Sky, O Pequeno Príncipe ou qualquer outra IP.

## Matriz das fontes

| Fonte                                                      | Licença típica                         | Formatos observados                    | Força                                 | Risco                                                | Papel                                                 |
| ---------------------------------------------------------- | -------------------------------------- | -------------------------------------- | ------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| [KayKit Forest](https://kaylousberg.itch.io/kaykit-forest) | CC0                                    | FBX, OBJ, glTF; Blend no tier Source   | atlas e topologia web-friendly        | aparência simples/kit se usado visivelmente em massa | fallback técnico, distante ou colisor                 |
| [Quaternius](https://quaternius.com/)                      | CC0 por pack verificado                | FBX, OBJ, Blend; vários packs com glTF | formas simples e variedade            | mistura de épocas e fantasia; qualidade varia        | complemento por objeto                                |
| [Kenney](https://kenney.nl/assets)                         | CC0                                    | confirmar no arquivo de cada pack      | licença excelente e assets leves      | leitura toy/prototype em alguns kits                 | fallback, escadas e props simples                     |
| [Poly Pizza](https://poly.pizza/)                          | por item: CC0 ou CC BY                 | OBJ/FBX e glTF conforme item           | objetos pontuais e preview rápido     | metadados de geometria ambíguos na página            | busca cirúrgica                                       |
| [Poly Haven](https://polyhaven.com/license)                | CC0                                    | HDR/EXR/JPG e PBR                      | proveniência forte e HDRIs puros      | realismo e arquivos grandes                          | referência/iluminação, nunca estética pronta          |
| [ambientCG](https://ambientcg.com/)                        | CC0                                    | PBR/HDRI, conforme item                | materiais com licença simples         | frequência visual fotográfica                        | pesquisa de base, ainda sem aprovado                  |
| [Freesound](https://freesound.org/help/faq/)               | CC0, CC BY ou BY-NC por item           | WAV/FLAC/MP3                           | gravações individuais específicas     | upload comunitário e licenças misturadas             | SFX individual com snapshot                           |
| [OpenGameArt](https://opengameart.org/node/5571)           | CC0, CC BY, OGA-BY, SA ou GPL por item | variável                               | arquivo aberto e histórico de autoria | qualidade, formatos e obrigações muito heterogêneos  | fonte secundária; apenas item CC0/CC BY após inspeção |
| [Sonniss GDC](https://gdc.sonniss.com/)                    | royalty-free própria                   | WAV, conforme arquivo                  | masters profissionais, uso comercial  | bundle enorme; licença veda IA/ML                    | fallback de áudio após busca dirigida                 |
| [Sketchfab](https://sketchfab.com/licenses)                | licença por item                       | variável                               | catálogo amplo                        | autoria, remoção, atribuição e termos por item       | último recurso; nunca busca em massa                  |
| [Synty](https://syntystore.com/)                           | licença comercial própria              | packs orientados a engines             | consistência e suporte                | identidade reconhecível, volume e custo              | não comprar nesta fase                                |

Preços e disponibilidade são snapshots, não garantias. Devem ser reconfirmados no dia da aquisição.

## Estratégia por categoria

| Categoria            | Direção                                             |           Quantidade-base v1 | Fonte inicial                             | Estado                   |
| -------------------- | --------------------------------------------------- | ---------------------------: | ----------------------------------------- | ------------------------ |
| Pedras/cliffs        | massas erodidas, arredondadas e de planos largos    |                    2–3 bases | Dreamscape; AeonShaper condicional        | shortlist visual         |
| Vegetação            | base, tufts e arbustos em estratos composicionais   |                   3 famílias | PIDI, Illustrated Nature ou NatureForge   | shortlist visual         |
| Árvores              | copas volumosas, densas e assimétricas              |                  2–3 modelos | Dreamscape ou Illustrated Nature          | shortlist visual         |
| Flores               | dois acentos relacionados, em bolsões               |                  até 2 bases | PIDI ou NatureForge                       | shortlist visual         |
| Grama                | cobertura descontínua + grupos instanciados         |                    2–3 bases | PIDI ou NatureForge                       | shortlist visual         |
| Pontes               | baixa, simples, parte do terreno                    | 1 por cena quando necessária | CreativeTrio Bridge                       | fila P2                  |
| Escadas              | largas, baixas, sem desafio de plataforma           |                     1 módulo | Kenney Stairs Closed                      | fila P2                  |
| Pequenas construções | shell autoral por composição, não kit urbano        |                1 por planeta | sem finalista                             | gap crítico              |
| Computadores         | console doméstico, tela separável, sem marca        |               1 base modular | CreativeTrio Computer como teste          | gap crítico              |
| Observatórios        | pavilhão/oculus pequeno, não base espacial          |                  1 exclusivo | telescope CreativeTrio apenas como prop   | shell em aberto          |
| Bancos               | massa escultural baixa                              |       até 3 bases no produto | Quaternius Bench                          | fila P1                  |
| Lanternas            | luz doméstica, sem runas/ornamento                  |                       1 base | Kay Lousberg Lantern                      | fila P1                  |
| Cristais             | somente forma mineral opaca, sem linguagem de loot  |          no máximo 1 família | iPoly3D Crystal                           | pesquisa, não prioridade |
| Vento                | comportamento e áudio, não ícone/mesh               |              sistema próprio | nenhum asset visual                       | procedural               |
| Partículas           | motes discretos; sistema existente primeiro         |                  0–1 textura | nenhum download                           | adiado                   |
| Céu                  | gradiente autoral; HDRI invisível se necessário     |                    1 sistema | Kloppenheim 01 Pure Sky como teste de luz | fila P1                  |
| Nuvens               | massas muito lentas, sem skybox fotográfico visível |                  0–1 recurso | nenhum finalista                          | adiado                   |
| Áudio                | vento, passos, folhas em faixas separadas           |            1 bed + variações | Freesound CC0 individual                  | fila P0                  |
| Música               | esparsa, opt-in, sem condução emocional constante   |            0–1 tema no slice | Scott Buckley para temp track             | fila P2                  |
| Materiais            | stylized/painterly, foscos, atlas/vertex color      |            4–6 famílias/cena | materiais próprios sobre source curado    | Visual Benchmark         |

## Referências conceituais para os Limiares

Estas são referências de princípios. Nenhuma obra, geometria ou composição deve ser reproduzida.

| Referência                                                                                              | Princípio extraído                                                          | Aplicação permitida                                       | O que não copiar                                      |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| [The Color Inside, James Turrell](https://turrell.utexas.edu/)                                          | luz e enquadramento alteram percepção; silêncio e tempo fazem parte da obra | um fenômeno cuja presença depende do céu e da aproximação | oculus, arquitetura ou sequência cromática específica |
| [Aten Reign, James Turrell](https://web.guggenheim.org/exhibitions/turrell/)                            | luz pode parecer matéria sem ornamento                                      | núcleo sem moldura, bordas perceptivas suaves             | forma espacial/instalação reconhecível                |
| [Solid-light works, Anthony McCall](https://www.anthonymccall.com/)                                     | volume legível nasce da luz atravessando atmosfera                          | feixe volumétrico muito contido e lento                   | cone, desenho ou coreografia de uma obra              |
| [The Weather Project, Olafur Eliasson](https://olafureliasson.net/exhibition/the-weather-project-2003/) | fenômeno ambiental simples cria escala e comunidade                         | luz que reorganiza a atmosfera ao redor                   | semicírculo solar, espelho e composição da Tate       |
| [Raios crepusculares, NOAA](https://forecast.weather.gov/glossary.php?word=crepuscular+rays)            | alternância natural de luz e sombra sugere presença sem objeto              | direção luminosa filtrada e irregular                     | efeito teatral constante                              |

Síntese autoral: o Limiar deve parecer uma mudança local nas regras da luz — quieta, sem moldura, sem runa, sem pedra ritual e sem promessa de poder. A paisagem reage primeiro; o “objeto” é percebido depois.

## Avaliação crítica

### Quanto da identidade pode ser gratuita?

Após as novas referências, a estimativa cai para **45–60% da identidade ambiental v1** com assets totalmente gratuitos. Fontes CC0 ainda podem resolver fillers, distância, rochas secundárias e parte da vegetação, mas as copas hero, cliffs e estratos painterly provavelmente justificam uma compra dirigida. A porcentagem só será recalibrada depois do Visual Benchmark.

### Onde vale investir

1. **Computador hero:** é o elo entre mundo e conteúdo; um asset genérico compromete o produto inteiro.
2. **Shell arquitetônico/observatório:** precisa parecer futuro gentil e habitável sem sci-fi ou fantasia pronta.
3. **Áudio de ambiência e foley:** gravações consistentes, loops invisíveis e variações de passos têm impacto maior que mais decoração.
4. **Música original ou licença clara:** somente após a linguagem de silêncio estar validada.
5. **Natureza hero e estrato painterly:** agora justificam investimento se Dreamscape, Illustrated Nature ou PIDI provarem ganho perceptivo mensurável.
6. **Adaptação especializada pontual:** retopologia, separação de materiais ou ajuste de um asset comprado, em vez de comprar bundles.

Não vale investir agora em partículas, HDRIs 16K, materiais 4–8K ou bundles `complete`. Pack de natureza só é investimento aceitável quando nomeado na fila revisada e autorizado para o benchmark.

## Fontes complementares consultadas

- [Quaternius Ultimate Stylized Nature](https://quaternius.com/packs/ultimatestylizednature.html)
- [Quaternius Simple Nature](https://quaternius.com/packs/simplenature.html)
- [Kenney Nature Kit](https://kenney.nl/assets/nature-kit)
- [KayKit Prototype Bits](https://kaylousberg.itch.io/prototype-bits)
- [Licenças Sketchfab](https://sketchfab.com/licenses)
- [Synty One-Time Purchase Licence](https://syntystore.com/pages/one-time-purchase-licence)
- [Scott Buckley — uso da biblioteca](https://www.scottbuckley.com.au/library/using-this-music/)
- [OpenGameArt — FAQ de licenças](https://opengameart.org/node/5571)
