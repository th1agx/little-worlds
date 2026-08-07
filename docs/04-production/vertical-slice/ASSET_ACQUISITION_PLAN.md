# Plano de aquisição de assets — Vertical Slice

**Estado:** plano histórico; substituído operacionalmente por [`../../08-asset-library/DOWNLOAD_QUEUE.md`](../../08-asset-library/DOWNLOAD_QUEUE.md); não autoriza download, compra ou uso
**Owner:** Art Director + Technical Art/Performance  
**Ordem:** moodboard → brief → shortlist → revisão de licença → autorização → aquisição

## Regras de orçamento

- Meta financeira da primeira rodada: **R$ 0**, priorizando CC0 e candidatos que possam ser avaliados por preview/metadados.
- Contingência proposta: até **R$ 250 total**, somente após aprovação explícita do owner e sem comprar packs por conveniência.
- Cada item pago deve provar que substitui uma lacuna real e custa menos que a adaptação/risco de um gratuito inadequado.
- Budget técnico é tão obrigatório quanto preço: asset incompatível com o bundle/cena é reprovado mesmo que gratuito.

## Ordem de busca

| Ordem | Categoria                    | Prioridade          | Necessidade no Slice             | Critérios decisivos                                                                            | Fontes a consultar primeiro                                     |
| ----: | ---------------------------- | ------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|     1 | console/computador           | P0                  | hero asset e ponte para conteúdo | GLB/glTF ou conversão autorizada; tela separável; sem marca; 1–3 controles; corpo recolorível  | Kenney, Quaternius, Fab, Sketchfab filtrado                     |
|     2 | shell arquitetônico/pavilhão | P0                  | abrigo do terminal               | volume aberto/baixo; interior simples; sem estilo militar; escala humana; materiais separáveis | Fab, CGTrader, Sketchfab filtrado, kit modular mínimo           |
|     3 | rochas                       | P0                  | escala, caminho e composição     | três silhuetas; poucos materiais; collider simples; instanciável                               | Kenney, Quaternius, Poly Pizza, Poly Haven reduzido             |
|     4 | vegetação baixa              | P0                  | vento e orientação sutil         | 2–3 famílias; pouca transparência; atlas/instancing; recolorível                               | Kenney, Quaternius, Poly Pizza, pack estilizado pequeno         |
|     5 | materiais-base               | P0                  | coesão e direção                 | CC0; 1–2K inicial; baixa frequência; maps realmente usados                                     | Poly Haven, ambientCG                                           |
|     6 | solução de céu/lighting      | P0                  | identidade global                | gradiente controlável; HDRI só como luz/reflexo; sem horizonte incompatível                    | solução procedural futura, Poly Haven/ambientCG como referência |
|     7 | áudio ambiente/UI/passos     | P0 após style frame | presença e feedback              | licença interativa clara; loops limpos; master e derivado rastreáveis                          | Sonniss GDC, Freesound CC0/CC BY, Kenney Audio                  |
|     8 | passarela/ponte              | P1                  | marco de Projetos                | modular, larga, não industrial/militar; pode derivar do shell                                  | kit arquitetônico mínimo, Fab/CGTrader/Sketchfab                |
|     9 | HDRI adicional               | P1                  | nuance de iluminação             | 1–2K runtime; uso como environment; CC0/licença clara                                          | Poly Haven, ambientCG                                           |
|    10 | partículas                   | P2                  | somente após composição aprovada | atlas pequeno ou points; baixo overdraw; sem estética mágica                                   | procedural, Kenney, CC0 pontual                                 |
|    11 | música                       | P2                  | não é requisito do Slice         | website interativo coberto; loop/stems; sem Content ID incerto                                 | compositor, Artlist/Epidemic após revisão, item a item          |

## Critério de seleção e rejeição

Cada candidato recebe nota 0–5 e score ponderado: aderência à Art Bible (25%), licença/proveniência (20%), performance/topologia (15%), harmonização (15%), formato web (10%), singularidade sem IP (10%) e custo total (5%).

Reprovação automática: licença ambígua; NC/ND/SA/Editorial sem autorização excepcional; marca/IP; formato fechado; textura ou topologia sem possibilidade realista de otimização; aparência militar, neon, cyberpunk ou fotorrealismo incompatível; necessidade de remodelagem manual extensa.

## Briefs por asset

### Computador

- 1 candidato final, até 3 candidatos na shortlist.
- Meta low/high: <= 15k / <= 35k triângulos antes de instâncias; <= 3 materiais ativos; texturas <= 2K somente se justificadas.
- Corpo marfim/metal pintado, vidro opalino, controle âmbar; sem logo, CRT verde, teclado RGB ou rack.

### Shell/pavilhão

- 1 shell ou kit mínimo, sem corredor ou ambiente externo pronto demais.
- Meta: <= 40k / <= 100k triângulos visíveis depois de corte/LOD; <= 5 famílias de material percebidas na cena inteira.
- Deve permitir uma entrada clara, abertura para horizonte e computador no interior sem adaptações estruturais extensas.

### Rochas, vegetação e ponte

- Rochas: 3 bases; vegetação: 2–3 bases; ponte: 1 módulo repetível no máximo.
- Preferir geometria simples, instancing, material compartilhado e recoloração via parâmetros. Não comprar um pack grande para obter um único prop.

### Materiais e céu

- Cinco famílias: solo, pedra, cal, metal pintado, vidro/tela. Avaliar 1K primeiro; subir somente por inspeção visual à distância real de câmera.
- Céu é sistema, não asset visual pesado. HDRI final não deve carregar um horizonte terrestre nem definir a composição.

### Áudio

- Prioridade de busca: vento, mecanismo, dois grupos de passos e 3–5 sons de UI globais. Música só após teste em silêncio.
- Registrar loop points, loudness, duração, formato, master, derivado e licença antes da integração.

## Dossiê obrigatório antes de aquisição

Para cada finalista, registrar URL, autor, preço/data, licença/EULA e prova, formato, tamanho conhecido, topologia/texturas quando disponível, uso previsto, trabalho de harmonização, risco e score. A autorização deve citar o ID do candidato, não uma categoria genérica.

Após aquisição, o asset entra em quarentena fora de `public`, passa por inspeção/validação e só então recebe derivado runtime + manifesto. A aquisição não é aceitação artística nem técnica.
