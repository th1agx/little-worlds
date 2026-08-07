# ADR 0012 — Navegação diegética por limiares

- Estado: superseded por ADR 0013
- Data: 2026-08-05

## Contexto

A troca de cenas pelo painel de desenvolvimento era útil para diagnóstico, mas não pode ser o caminho do visitante. A navegação do universo precisa ser legível no próprio espaço e preservar o Canvas persistente e o carregamento preguiçoso de uma cena por vez.

## Decisão

Cada destino será representado por um `PortalGateway` reutilizável: dois pilares minerais, uma verga de reboco claro, um detalhe de cobre e luz âmbar discreta. O componente recebe somente um descritor (`id`, destino e rótulo) e posição.

O limiar percorre `dormant`, `aware`, `ready`, `transitioning` e `deactivating`. A distância da câmera controla os três primeiros; a interação `E` (ou o botão contextual) somente funciona em `ready`; a transição reaproveita o fade de cena já existente. O painel continua uma ferramenta de desenvolvimento, não uma dependência de navegação.

## Consequências

- Novos planetas podem adicionar portais sem acoplar suas cenas ao input ou ao Scene Manager.
- O feedback permanece econômico: somente luz e véu interno, sem pós-processamento, partículas ou assets finais.
- A descoberta depende temporariamente de proximidade; orientação espacial, áudio e conteúdo final pertencem às próximas sprints.
