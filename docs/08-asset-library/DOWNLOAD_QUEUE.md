# Fila controlada de aquisição

**Estado:** Dreamscape validado como `NO-GO`; NatureForge aguarda esclarecimento de licença e autorização humana
**Snapshot:** 2026-08-06

Esta fila substitui a rodada de 2026-08-05. O pipeline, a quarentena e os gates permanecem inalterados. Computador, áudio e Limiar estão pausados; a única prioridade é provar o Visual Benchmark.

## Gate 0 — decisão registrada antes de gastar ou baixar

| Ordem | Candidato                  | Decisão/evidência                                                                   | Condição para avançar                             |
| ----: | -------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
|     1 | Dreamscape Nature: Meadows | `NO-GO`: Unity não publica source Web; Fab entrega UEFN/Unreal referenced asset     | nenhuma; não comprar                              |
|     2 | NatureForge Meadow & Farm  | glTF, FBX com/sem LOD, Blend e texturas confirmados; licença web precisa de clareza | confirmação escrita do autor + autorização humana |

Gate 0 não cria arquivo local de asset. Capturas de licença e respostas do publisher só entram no ledger após a aprovação humana da aquisição.

Detalhes, fontes e limites estão em [`DREAMSCAPE_ROUTE_VALIDATION.md`](DREAMSCAPE_ROUTE_VALIDATION.md).

## Rodada A — uma rota candidata, ainda bloqueada

Autorizar **uma rota**, não todos os packs.

| Rota             | Papel                        | Aquisição proposta        |                     Teto | Por que                                                                            |
| ---------------- | ---------------------------- | ------------------------- | -----------------------: | ---------------------------------------------------------------------------------- |
| Única, bloqueada | base técnica e visual curada | NatureForge Meadow & Farm | US$ 24 antes de impostos | glTF, FBX, Blend, texturas e LODs confirmados; Dreamscape falhou no gate de source |

**Limite da primeira autorização:** um pack-base. NatureForge não é CC0 operacionalmente até o autor esclarecer a contradição entre o rótulo da página e o termo textual de não redistribuição. Um complemento só pode ser autorizado depois da inspeção mostrar uma lacuna objetiva. Promoção não muda esta regra.

## Rodada B — apenas depois do primeiro benchmark

| Candidato                           | Estado       | Condição                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------- |
| AeonShaper Stylized Environment     | HOLD         | source confirmado e lacuna de árvore/cliff não resolvida                  |
| Quaternius Stylized Nature MegaKit  | HOLD         | busca por uma silhueta específica, nunca download por abundância          |
| KayKit Forest Free                  | HOLD técnico | usar somente para distante, colisor ou fallback comprovadamente invisível |
| Two Theories Stylized Nature Bundle | HOLD         | somente A/B barato se os finalistas falharem                              |

## Removidos da fila ativa

- Quaternius Simple Nature: rejeitado para o Visual Benchmark.
- CreativeTrio Computer: adiado para a sprint do computador.
- passos, vento, folhas e ambiência: adiados para a sprint de áudio.
- banco, lanterna, telescópio, ponte, escada, cristais e música: permanecem fora do benchmark.
- Limiar: implementação preservada, refinamento pausado.

## Autorização humana exigida

Uma autorização válida deve nomear o item, a loja/edição, o tier/licença e o teto de preço. `Pode continuar` não equivale a autorização de compra ou download. Até lá, o contador permanece:

- compras: **0**;
- downloads: **0**;
- arquivos em quarentena: **0**;
- assets aprovados para runtime: **0**.
