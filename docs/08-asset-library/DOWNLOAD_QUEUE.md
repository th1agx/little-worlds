# Fila controlada de aquisição

**Estado:** LMHPOLY validado para compra manual pelo Fab; nenhum download realizado
**Snapshot:** 2026-08-06

Esta fila substitui a rodada de 2026-08-05. O pipeline, a quarentena e os gates permanecem inalterados. Computador, áudio e Limiar estão pausados; a única prioridade é provar o Visual Benchmark.

## Gate 0 — decisão registrada antes de gastar ou baixar

| Ordem | Candidato                                | Decisão/evidência                                                                                          | Condição para avançar                                                |
| ----: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|     1 | LMHPOLY Stylized Poly Nature Environment | `OK`: Fab Standard permite modificar e distribuir assets incorporados em projeto; FBX declarado pelo autor | compra manual da edição source/Fab Standard e inspeção em quarentena |

Gate 0 não cria arquivo local de asset. Capturas de licença só entram no ledger após a aprovação humana da aquisição.

Detalhes, fontes e limites estão em [`LMHPOLY_TECHNICAL_VALIDATION.md`](LMHPOLY_TECHNICAL_VALIDATION.md) e [`LMHPOLY_ACQUISITION_PLAN.md`](LMHPOLY_ACQUISITION_PLAN.md).

## Rodada A — uma rota candidata, ainda bloqueada

Autorizar **uma rota**, não todos os packs.

| Rota                           | Papel                        | Aquisição proposta                              |                                                         Teto | Por que                                                                |
| ------------------------------ | ---------------------------- | ----------------------------------------------- | -----------------------------------------------------------: | ---------------------------------------------------------------------- |
| Única, pronta para autorização | base técnica e visual curada | LMHPOLY Stylized Poly Nature Environment no Fab | preço exibido no checkout; ainda não confirmado publicamente | licença Web aceita, FBX declarado e biblioteca adequada ao quality bar |

**Limite da primeira autorização:** um pack-base. Selecionar Fab Standard com source, não `Reference-Only`, e registrar preço/tier antes do pagamento. Um complemento só pode ser autorizado depois da inspeção mostrar uma lacuna objetiva. Promoção não muda esta regra.

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
