# ADR 0013 — Limiares como fenômenos luminosos

- Estado: accepted
- Data: 2026-08-05
- Substitui: ADR 0012

## Contexto

A primeira linguagem diegética resolvia a navegação, mas sua moldura de pilares, pedra e verga comunicava templo, ruína e portal tradicional. Essa leitura contradiz o cosmos artesanal, leve e contemplativo definido pelas bíblias do projeto.

## Decisão

Destinos passam a ser representados por `ThresholdPhenomenon`: massas luminosas suspensas, sem suporte arquitetônico, moldura ou formato de porta. A presença combina volumes translúcidos aninhados, respiração lenta, luz no chão e poucas partículas procedurais.

O contrato recebe uma paleta por instância (`core`, `glow` e `atmosphere`). Assim, cada planeta pode expressar uma personalidade própria sem duplicar comportamento. Os estados canônicos são `dormant`, `aware`, `active`, `crossing` e `resting`.

O Hub pode apresentar `DistantThresholdSignal` não interativos para sugerir destinos futuros. Esses sinais são composição ambiental; não registram cenas, conteúdo ou navegação ainda inexistentes.

## Consequências

- O sistema de input, transição, Scene Manager, Canvas persistente e lazy loading permanecem inalterados.
- A identidade deixa de depender de arquitetura e passa a depender de luz, cor, escala e ritmo.
- A animação usa refs dentro de `useFrame`; não provoca renderização React por quadro.
- O efeito continua leve, sem assets, texturas, pós-processamento ou shader customizado.
- Arte final ainda precisará refinar silhueta, material e integração atmosférica sem abandonar esta linguagem.
