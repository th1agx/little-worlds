# ADR 0015 — Stylized 3D Environment e Visual Benchmark

- Estado: accepted
- Data: 2026-08-06

## Contexto

A primeira curadoria privilegiou assets CC0 leves e uma paisagem esparsa. A inspeção visual mostrou que KayKit Forest e Quaternius Simple Nature são tecnicamente eficientes, mas insuficientes para a percepção desejada. Duas novas imagens foram aprovadas: ambientes stylized com copas volumosas, vegetação estratificada, água, cliffs, luz quente e profundidade atmosférica.

Substituir imediatamente o Hub confundiria validação de arte, integração de assets, gameplay e performance. Otimizar preventivamente por primitivas também impediria medir a qualidade visual real.

## Decisão

1. Definir natureza e ambiente como **stylized 3D environment**, não simplesmente low-poly.
2. Reclassificar KayKit Forest como fallback técnico e Quaternius Simple Nature como inadequado ao benchmark visual.
3. Provar a direção em uma cena isolada, lazy-loaded, de aproximadamente 30 × 30 m antes de substituir o Hub.
4. Controlar densidade por composição e budgets: margens/fundos ricos, percurso e foco limpos.
5. Permitir assets pagos e packs de engine somente quando licença, source extraível e custo de conversão forem confirmados.
6. Harmonizar tudo por paleta, materiais, escala, iluminação, vento, fog e composição próprios.
7. Medir visual e performance no mesmo build. Qualidade insuficiente ou budget violado resulta em `NO-GO`.
8. Manter Limiar, gameplay, locomoção, computador, UI e áudio fora desta validação.

O ADR 0014 continua integralmente válido: nenhum download vai direto a `public`, nenhuma compra é implícita e nenhum asset entra em runtime sem quarentena e aprovação.

## Consequências

- overdraw, textura e fragment cost passam a ser budgets de primeira classe, além de triângulos;
- alpha cards pintados podem ser usados com controle, substituindo o veto quase absoluto anterior;
- a quantidade de árvores/grama deixa de ser limite editorial fixo e passa a depender do frame e do perfil;
- shaders, prefabs, terrain, water e VFX de Unity/Unreal nunca são presumidos portáveis;
- a identidade gratuita estimada cai até o benchmark medir o ganho de uma compra dirigida;
- o Hub atual permanece funcional e inalterado durante a prova.

## Evidência associada

- [`VISUAL_REFERENCE_ANALYSIS.md`](../../08-asset-library/VISUAL_REFERENCE_ANALYSIS.md)
- [`ASSET_RESEARCH_ROUND_2.md`](../../08-asset-library/ASSET_RESEARCH_ROUND_2.md)
- [`VISUAL_BENCHMARK.md`](../../08-asset-library/VISUAL_BENCHMARK.md)
- [`DOWNLOAD_QUEUE.md`](../../08-asset-library/DOWNLOAD_QUEUE.md)
