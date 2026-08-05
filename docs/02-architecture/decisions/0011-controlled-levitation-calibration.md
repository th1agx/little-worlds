# ADR 0011 — Calibração aprovada de Controlled Levitation

**Status:** accepted
**Data:** 2026-08-05

## Decisão

Os valores calibrados manualmente passam a ser os defaults de `Controlled Levitation`: caminhada `4,0 m/s`, passo rápido `6,0 m/s`, aceleração `6,0`, desaceleração `6,0`, suspensão-base `0,15 m`, amplitude `0,11 m`, frequência `0,38`, acompanhamento de câmera `35%`, impulso `4,4`, gravidade de subida `7,9`, gravidade de descida `4,0`, controle aéreo `0,65`, rotação `18,0`, reação ao impulso `0,06` e retorno ao repouso `20,0`.

A suspensão é automática e restrita ao terreno. Não há voo nem elevação sustentada; `Espaço` é exclusivamente o impulso único. `Legacy` permanece temporariamente no painel de desenvolvimento para comparação humana.

## Consequências

O botão “Restaurar valores propostos” passa a restaurar esta calibração. Os controles permanecem não persistentes para permitir novos testes sem alterar o contrato salvo.
