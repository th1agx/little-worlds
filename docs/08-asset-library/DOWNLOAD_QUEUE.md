# Fila controlada de aquisição

**Estado:** pesquisa concluída; nenhum download autorizado ou realizado

**Snapshot de preço/licença:** 2026-08-05

## Legenda

- `P0`: primeiro laboratório de linguagem e pipeline.
- `P1`: somente após o P0 provar coerência.
- `P2`: necessidade futura; não baixar agora.
- `HOLD`: lacuna real, mas candidato insuficiente.
- `REJECT`: não adquirir; detalhes em `REJECTED_ASSETS.md`.

## Primeira rodada — limite de oito aquisições

| Pri. | Necessidade         | Candidato                                                                              | Autor        | Licença | Preço observado                          | Formato anunciado                 | Ação após autorização                                                 |
| ---- | ------------------- | -------------------------------------------------------------------------------------- | ------------ | ------- | ---------------------------------------- | --------------------------------- | --------------------------------------------------------------------- |
| P0   | natureza-base       | [KayKit Forest — Free](https://kaylousberg.itch.io/kaykit-forest)                      | Kay Lousberg | CC0     | grátis; Extra US$ 9,99; Source US$ 14,99 | FBX, OBJ, glTF                    | baixar apenas tier Free; separar 3 rocks, 2 grasses, 1 bush e 2 trees |
| P0   | árvore alternativa  | [Simple Nature Pack](https://quaternius.com/packs/simplenature.html)                   | Quaternius   | CC0     | grátis                                   | FBX, OBJ, Blend                   | comparar silhueta; converter só finalista                             |
| P0   | computador block-in | [Computer](https://poly.pizza/m/7KNoiQlSxi)                                            | CreativeTrio | CC0     | grátis                                   | FBX, glTF                         | verificar tela separável, escala e leitura doméstica                  |
| P0   | passos em grama     | [Walking through grassy field](https://freesound.org/people/Sadiquecat/sounds/802068/) | Sadiquecat   | CC0     | grátis                                   | WAV mono, 48 kHz/16-bit, 1:33     | recortar variações; verificar ruído e calçado                         |
| P0   | passos alternativos | [Footsteps grass.wav](https://freesound.org/people/emilgasi/sounds/685286/)            | emilgasi     | CC0     | grátis                                   | WAV stereo, 96 kHz/24-bit, 0:59   | comparar peso; resample somente derivado                              |
| P0   | vento-base          | [Gentle wind](https://freesound.org/people/fthgurdy/sounds/528944/)                    | fthgurdy     | CC0     | grátis                                   | WAV stereo, 44.1 kHz/16-bit, 0:09 | testar loop; rejeitar se repetição for audível                        |
| P0   | folhas              | [Leaves rustle in the wind](https://freesound.org/people/Cinetony/sounds/575380/)      | Cinetony     | CC0     | grátis                                   | WAV stereo, 48 kHz/24-bit, 1:46   | isolar bed discreto; observar pássaros/eventos                        |
| P0   | ambiência           | [Meadow.wav](https://freesound.org/people/PuzzleAudio/sounds/440807/)                  | PuzzleAudio  | CC0     | grátis                                   | WAV stereo, 44.1 kHz/16-bit, 1:10 | usar só como comparação; pode estar cheia demais                      |

O limite de oito evita que “biblioteca” vire acumulação. Mesmo o KayKit conta como uma aquisição e deve produzir no máximo oito candidatos internos.

## Segunda rodada

| Pri. | Categoria   | Candidato                                                                   | Autor                   | Licença   | Preço                 | Formato             | Condição                                                  |
| ---- | ----------- | --------------------------------------------------------------------------- | ----------------------- | --------- | --------------------- | ------------------- | --------------------------------------------------------- |
| P1   | banco       | [Bench](https://poly.pizza/m/7uSlZo3n9Y)                                    | Quaternius              | CC0       | grátis                | FBX, glTF           | apenas se a cena pedir pausa física                       |
| P1   | lanterna    | [Lantern](https://poly.pizza/m/CtHBJ1ufeW)                                  | Kay Lousberg            | CC0       | grátis                | FBX, glTF           | testar sem aparência medieval                             |
| P1   | telescópio  | [Telescope](https://poly.pizza/m/RjyTCQvA8b)                                | CreativeTrio            | CC0       | grátis                | FBX, glTF           | prop de escala; não define o observatório                 |
| P1   | céu/luz     | [Kloppenheim 01 — Pure Sky](https://polyhaven.com/a/kloppenheim_01_puresky) | Greg Zaal + Jarod Guest | CC0       | grátis                | HDR/EXR/JPG, 1K–24K | adquirir somente 1K/2K; invisível no runtime inicialmente |
| P2   | ponte       | [Bridge](https://poly.pizza/m/orI7eNSB38)                                   | CreativeTrio            | CC0       | grátis                | FBX, glTF           | somente com necessidade de level design                   |
| P2   | escada      | [Stairs Closed](https://poly.pizza/m/8XelTCFdjJ)                            | Kenney                  | CC0       | grátis                | FBX, glTF           | comparar com rampa; rampa é preferência                   |
| P2   | flores      | [Flowers](https://poly.pizza/m/RP8p3h7JHJ)                                  | CreativeTrio            | CC0       | grátis                | FBX, glTF           | um acento apenas; avaliar leitura cartunizada             |
| P2   | cristal     | [Crystal](https://poly.pizza/m/Wj8Qjq38T8)                                  | iPoly3D                 | CC0       | grátis                | FBX, glTF           | somente se tratado como mineral opaco                     |
| P2   | música temp | [Borealis](https://www.scottbuckley.com.au/library/borealis/)               | Scott Buckley           | CC BY 4.0 | grátis com atribuição | MP3 no catálogo     | referência temporária; não assumir como tema final        |

## Lacunas sem candidato aprovado

| Categoria          | Por que está aberta                                   | Próxima pesquisa permitida                                             |
| ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| computador hero    | candidatos gratuitos parecem PC genérico ou futurista | item avulso pago, tela/bezel separáveis, até três finalistas           |
| pequena construção | kits urbanos/medievais impõem gênero                  | pavilion, shelter, garden studio, round room; nunca “fantasy house”    |
| observatório       | telescópio não resolve shell habitável                | minimal observatory pavilion, sky viewing room, oculus shelter         |
| nuvens             | céu fotográfico conflita com linguagem de formas      | biblioteca procedural já aprovada ou textura CC0 abstrata              |
| materiais          | PBR fotográfico pode dominar a estética               | validar primeiro atlas/vertex color; pesquisar somente lacunas medidas |
| música final       | composição pronta pode conduzir demais                | briefing musical após silêncio e ambiência aprovados                   |

## Compras suspensas

- KayKit Forest Extra/Source: só se o Free provar o estilo e faltar uma silhueta específica.
- Synty: nenhuma compra.
- Sketchfab Store: nenhuma compra sem item, EULA e autoria verificados.
- Bundles completos de áudio: não baixar antes de uma busca por arquivo e leitura da tracklist.
- HDRI acima de 2K: não baixar para runtime.
