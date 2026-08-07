# Asset Bible

**Estado:** regras definitivas de seleção; nenhum asset adquirido  
**Owner:** Art Director + Technical Art/Performance  
**Data de pesquisa:** 2026-08-04

> Esta Bíblia continua definindo princípios e budgets. A direção de natureza foi atualizada pelo [ADR 0015](../02-architecture/decisions/0015-stylized-environment-visual-benchmark.md): densidade passa a ser composicional e `stylized 3D environment` substitui a premissa de low-poly esparso. A fila vigente está em [`../08-asset-library/`](../08-asset-library/ASSET_LIBRARY.md).

## 1. Estratégia

O projeto não modelará assets manualmente no Blender. A autoria nasce de seleção, combinação, materiais, luz, composição e transformação permitida por licença. Assets prontos são matéria-prima, nunca direção de arte pronta.

Ordem obrigatória: **definir referência → pesquisar → validar licença/source → reutilizar ou comprar pontualmente → adaptar por parâmetros/materiais → contratar ajuste especializado**. Pack grande pode ser fonte curada, mas nunca é baixado antes de saber quais famílias e budgets serão testados.

## 2. Hierarquia de origem

1. CC0 com origem confiável e formato aberto.
2. Asset pago com licença comercial clara e formato universal.
3. CC BY com atribuição viável e autor verificável.
4. Geração por IA com termos/proveniência registrados e inspeção humana.
5. Outras licenças somente após revisão; NC, ND, SA e Editorial ficam fora do padrão.

Fontes prioritárias:

- [Kenney](https://kenney.nl/assets) — packs leves/CC0 e protótipos coerentes.
- [Quaternius](https://quaternius.com/) — low-poly gratuito; validar licença do pack.
- [Poly Haven](https://polyhaven.com/) — modelos, materiais e HDRIs [CC0](https://polyhaven.com/license), normalmente realistas e pesados; usar como base reduzida.
- [ambientCG](https://ambientcg.com/) — materiais/HDRIs CC0; conferir item/licença.
- [Poly Pizza](https://poly.pizza/) — low-poly com licença por item.
- [Sketchfab](https://sketchfab.com/) — enorme catálogo; Creative Commons exige controle de atribuição e a [documentação](https://sketchfab.com/developers/download-api/guidelines) pede que autor/licença acompanhem o modelo.
- [Fab](https://www.fab.com/) — formatos universais e filtro por licença; confirmar arquivo glTF/FBX/OBJ e termos da [Fab Standard License](https://www.fab.com/eula?lang=en).
- [Synty Studios](https://www.syntystudios.com/) — packs pagos coerentes; alto risco de aparência reconhecível e excesso de compra.
- CGTrader/TurboSquid — somente item pontual com licença, topologia e formato inspecionáveis.

## 3. Matriz por categoria

### Árvores

- **Asset ideal:** árvore estilizada de copa volumosa e assimétrica, 4–9 m; folhagem por massas, LOD e materiais compartilháveis.
- **Estilo:** stylized mid-poly/painterly, sem folhas fotográficas; alpha pintado é permitido após medir overdraw.
- **Quantidade máxima:** 2–3 modelos-base no benchmark; instâncias visíveis dependem de composição, LOD e budget, não de teto editorial fixo.
- **Origem recomendada:** Dreamscape Meadows; The Illustrated Nature; PIDI/NatureForge para estratos; KayKit/Quaternius apenas como fallback.
- **Prioridade:** P0 para vertical slice.
- **Alternativas:** árvore procedural simples de biblioteca; combinar tronco/folhagem licenciados; contratar adaptação do asset comprado.
- **Rejeitar:** árvore reconhecível de franquia, cena demo pronta, floresta sem composição, alpha sem budget ou material impossível de recolorir.

### Rochas

- **Asset ideal:** kit de três silhuetas erosionadas — baixa, média e vertical — com bordas suaves e collider simples.
- **Estilo:** planos grandes, warm stone, detalhe de superfície baixo.
- **Quantidade máxima:** 3 modelos-base; 4–8 instâncias visíveis por planeta; 12 apenas se composição e instancing aprovarem.
- **Origem recomendada:** Kenney/Quaternius nature packs; Poly Haven reduzido; Fab stylized rock kit pequeno.
- **Prioridade:** P0.
- **Alternativas:** primitivas beveladas/procedurais; uma única rocha em escalas/rotações controladas.
- **Rejeitar:** scans hiper-realistas misturados, pedras aleatórias espalhadas ou cada pedra com material próprio.

### Observatórios

- **Asset ideal:** shell pequeno, baixo, modular, com domo/oculus e interior vazio adaptável; sem branding ou equipamento embutido.
- **Estilo:** observatório habitável, cerâmica/cal + pedra + metal pintado; futuro gentil.
- **Quantidade máxima:** 1 shell exclusivo em Certificados; elementos observacionais menores podem reaparecer no Hub, nunca outro domo completo.
- **Origem recomendada:** Fab/CGTrader/Sketchfab por busca pontual “small stylized observatory”, “minimal telescope pavilion”, formatos universais; modelos NASA apenas como referência/uso conforme política específica.
- **Prioridade:** P1, após vertical slice.
- **Alternativas:** pavilhão/rotunda modular + oculus; shell arquitetônico pronto adaptado por material; asset gerado por IA apenas se sair com topologia/licença aceitáveis.
- **Rejeitar:** réplica de observatório real, base lunar, satélite, radiotelescópio gigante ou pack Unity/Unreal sem fonte universal.

### Computadores

- **Asset ideal:** console compacto com bezel, tela e 1–3 controles físicos separados; corpo simples recolorível; proporção humana.
- **Estilo:** industrial doméstico, marfim/metal pintado, cantos suaves, sem época/marca reconhecível.
- **Quantidade máxima:** 1 modelo-base modular + até 6 variações de suporte/bezel/detalhe; um computador por planeta e um no Hub.
- **Origem recomendada:** Kenney Space/Furniture como blockout; Quaternius Sci-Fi Essentials com forte triagem; Fab/Sketchfab/CGTrader “retro-future terminal”, “minimal control console”.
- **Prioridade:** P0, asset hero do produto.
- **Alternativas:** comprar um console e variar materiais/suportes; gerar concept 2D com IA e comprar o modelo mais próximo; contratar adaptação de modelo existente.
- **Rejeitar:** teclado RGB, rack, cockpit, tela holográfica, logo, console militar, green-on-black obrigatório ou dezenas de botões.

### Bancos

- **Asset ideal:** banco simples de pedra/madeira, silhueta baixa e confortável, collider único.
- **Estilo:** escultural/arquitetônico, sem mobiliário urbano moderno reconhecível.
- **Quantidade máxima:** 0–1 por planeta; 3 modelos-base no v1 no máximo.
- **Origem recomendada:** Kenney Furniture/Nature; Quaternius props; Poly Pizza; Fab stylized outdoor furniture.
- **Prioridade:** P1; P0 para Sobre.
- **Alternativas:** assento integrado à arquitetura/rocha; banco de uma única peça.
- **Rejeitar:** fileiras de assentos, banco ornamental detalhado ou prop sem escala humana.

### Vegetação

- **Asset ideal:** cobertura-base, tuft médio e arbusto instanciáveis; flores opcionais; vertex data para vento e materiais compartilháveis.
- **Estilo:** naturalista stylized/painterly, verdes aquecidos e massas legíveis.
- **Quantidade máxima:** 3 famílias + até 2 bases florais no benchmark; densidade High nunca altera caminho/silhueta e deve possuir equivalente Low.
- **Origem recomendada:** PIDI COSY, The Illustrated Nature, Dreamscape Meadows e NatureForge; KayKit/Quaternius para filler específico.
- **Prioridade:** P0.
- **Alternativas:** procedural placement de poucos modelos; billboard apenas à distância; texturas CC0 recortadas com forte harmonização.
- **Rejeitar:** lawn uniforme sem camadas, flores arco-íris, folhas fotográficas em mundo estilizado ou transparência sem medição.

### Céu

- **Asset ideal:** sky shader/gradiente próprio com sunset controlável e overlay estelar discreto; HDRI só para iluminação/reflexo quando necessário.
- **Estilo:** creme→pêssego→malva→azul profundo; sem nebulosa dominante.
- **Quantidade máxima:** 1 sistema global, 6 presets leves por planeta; 1 textura de estrelas/ruído se usada.
- **Origem recomendada:** implementação procedural futura; Poly Haven sunsets como referência/lighting; NASA/ESO apenas como referência visual ou conforme direitos específicos.
- **Prioridade:** P0.
- **Alternativas:** cubemap estilizado licenciado; gradiente em dome simples; HDRI reduzido + color grading.
- **Rejeitar:** skybox preto, Via Láctea fotográfica, HDRI terrestre com horizonte incompatível ou seis céus sem parentesco.

### HDRI

- **Asset ideal:** sunset unclipped, horizonte limpo, contraste moderado e sem objetos reconhecíveis; runtime em resolução calibrada.
- **Estilo:** iluminação quente natural; imagem pode ser invisível e servir só à luz/reflexos.
- **Quantidade máxima:** 1–2 HDRIs base no produto; no máximo um ativo por cena.
- **Origem recomendada:** Poly Haven CC0; ambientCG; HDRI Skies/Poliigon pagos após style test.
- **Prioridade:** P1 — não bloquear céu procedural.
- **Alternativas:** hemisphere/environment map sintético; baked lighting; gradient environment.
- **Rejeitar:** 8K/16K direto em runtime, cidade/estúdio, sombras duras inconsistentes ou licença sem redistribuição no site.

### Materiais

- **Asset ideal:** bibliotecas PBR de terra, pedra, cal, madeira e metal pintado, com maps separáveis e possibilidade de simplificação.
- **Estilo:** textura de baixa frequência, fosca, cores sob controle da paleta.
- **Quantidade máxima:** 5–7 famílias por planeta; 12 master materials globais no v1 antes de variações.
- **Origem recomendada:** Poly Haven/ambientCG CC0; Poliigon/Adobe Substance/Textures.com pagos conforme licença.
- **Prioridade:** P0.
- **Alternativas:** materiais procedurais simples; vertex color + roughness; atlas compartilhado.
- **Rejeitar:** material “sci-fi panels”, sujeira pesada, metal molhado, marble luxuoso ou 4–8K sem benefício visível.

### Sons

- **Asset ideal:** masters WAV limpos de vento, gramínea, madeira, pedra, mecanismos suaves, passos e UI; licença interativa clara.
- **Estilo:** natural, baixo ruído, sem assinatura cinematográfica forte.
- **Quantidade máxima:** por planeta: 1 bed, 1–2 fontes localizadas, 2–4 variações de passos, 3–5 UI compartilhados; música separada.
- **Origem recomendada:** [Sonniss GameAudioGDC](https://gdc.sonniss.com/gdc-game-audio-bundle/) sob sua [licença](https://sonniss.com/gdc-bundle-license/); Freesound CC0/CC BY; Kenney Audio; BOOM/A Sound Effect/Sonniss Store pagos.
- **Prioridade:** P0 para vertical slice, mas seleção vem após frame visual.
- **Alternativas:** gravação/compositor contratado; síntese leve para UI; IA apenas com termos comerciais/proveniência.
- **Rejeitar:** Content ID incerto, áudio comprimido como master, loop com clique, sci-fi beep pack genérico ou música usada como ambience.

### Partículas

- **Asset ideal:** 1 atlas pequeno de motes/pólen/poeira com borda macia; comportamento é mais importante que sprite.
- **Estilo:** dourado/marfim, baixa opacidade, movimento lento.
- **Quantidade máxima:** 1–2 sistemas visíveis; limites simultâneos definidos na Art Bible.
- **Origem recomendada:** textura procedural/CC0; Kenney particle sprites; OpenGameArt apenas CC0/CC BY verificado; Fab VFX texture pontual.
- **Prioridade:** P2, nunca antes da composição base.
- **Alternativas:** pontos geométricos sem textura; partículas derivadas de forma procedural.
- **Rejeitar:** magic sparkles, trail, explosão, confete, fogo, smoke ou indicador de loot.

### Efeitos

- **Asset ideal:** nenhum pack obrigatório. Efeitos devem ser configurações do renderer: fog, bloom seletivo, color grade e dissolve/transição própria.
- **Estilo:** invisível como técnica, perceptível como atmosfera.
- **Quantidade máxima:** low 0–1 passe; high até 3 passes já definidos em Performance; uma transição global.
- **Origem recomendada:** bibliotecas técnicas oficiais do stack; LUT criada a partir da paleta se necessária.
- **Prioridade:** P2.
- **Alternativas:** iluminação/material/composição; CSS/DOM para transição do terminal.
- **Rejeitar:** lens flare, glitch, scanline forte, chromatic aberration, motion blur, film grain pesado ou pack “cinematic” aplicado por padrão.

## 4. Música

Embora não estivesse na lista mínima, música exige política própria:

- Preferência: compositor independente ou biblioteca paga cujo plano cubra website/app interativo.
- Máximo: 1 identidade global + 0–1 variação discreta por planeta; não seis músicas desconectadas.
- Fontes candidatas: Artlist/Epidemic/Soundstripe após revisão da licença vigente; Pixabay/FMA/Incompetech somente item por item.
- Nenhuma faixa é baixada antes do audio moodboard e teste de loop/licença.

## 5. Score de aquisição

Cada finalista recebe 0–5:

| Critério                   | Peso |
| -------------------------- | ---: |
| aderência à Art Bible      |  25% |
| licença/proveniência       |  20% |
| topologia/performance      |  15% |
| capacidade de harmonização |  15% |
| formato/pipeline web       |  10% |
| singularidade sem IP       |  10% |
| custo total                |   5% |

Reprovação automática: licença incerta, IP/marca, formato fechado sem export, impossibilidade de reduzir, estética militar/neon ou necessidade de modelagem manual extensa.

## 6. Processo sem Blender manual

1. Brief de asset aprovado com silhueta, proporção, material, quantidade e budget.
2. Pesquisa em no máximo três fontes por rodada.
3. Shortlist de até três itens por papel, sem download quando preview basta.
4. Revisão de licença/custo/formato.
5. Aquisição autorizada.
6. Inspeção e transformação por CLI/ferramenta automatizada ou serviço contratado.
7. Conversão/otimização/LOD/collider quando permitido.
8. Comparação visual low/high e validação glTF.
9. Registro de hash, origem, licença e derivado.

Se um asset precisar de remodelagem extensa, ele foi selecionado incorretamente. A solução é trocar o asset ou contratar ajuste isolado, não criar pipeline interno de modelagem.

## 7. Lista de prova do Visual Benchmark

Somente após aprovação humana da rota:

- 2–3 árvores-base com LOD.
- 2–3 rochas/cliffs-base.
- cobertura, tuft e arbusto; até 2 flores-base.
- 4–6 materiais compartilhados.
- 1 solução de água estilizada.
- 1 sky/lighting/fog autoral.
- 1 campo de vento compartilhado.

Banco, computador, arquitetura, áudio, UI, gameplay e Limiar ficam fora desta prova.
