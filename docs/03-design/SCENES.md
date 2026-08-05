# Cenas e planetas

**Estado:** superseded por [`../07-sprint-0.5/PLANET_BIBLE.md`](../07-sprint-0.5/PLANET_BIBLE.md)

| Cena | Papel | Marco | Conteúdo do terminal | Atmosfera |
| --- | --- | --- | --- | --- |
| Hub | orientação | pequeno farol/mapa celeste | índice completo e acesso 2D | noite índigo, vento leve |
| Sobre | identidade | árvore solitária + banco | bio, valores, trajetória | fim de tarde, folhas e calor |
| Projetos | evidência | oficina/estrutura inacabada | estudos de caso, links, resultados | azul petróleo, metal/cobre |
| Tecnologias | competência | jardim de sinais/constelações | stack por domínio e proficiência contextual | violeta/ciano, pulsos lentos |
| Certificados | aprendizado | observatório compacto | certificados verificáveis e cronologia | noite clara, mecânica suave |
| Contato | conversão | estação de comunicação ao amanhecer | email, redes, currículo, disponibilidade | pêssego/dourado, horizonte aberto |

## Contrato de uma cena

- `id`, slug, título e conteúdo associado.
- spawn, limites seguros, recovery point e volume de interação.
- lista de assets com orçamento e licença.
- perfis de luz/sky/fog/audio/quality.
- colisores simples e área navegável validada.
- comportamento sem áudio, sem WebGL e reduced motion.
- critério de conclusão: terminal aberto, não “coletável encontrado”.

## Hub

Não deve carregar miniaturas completas de todos os planetas. Representações baratas (orbes, ícones abstratos ou mapa DOM) comunicam destinos. O visitante pode abrir o índice imediatamente.

## Vertical slice: Sobre

Escopo máximo: terreno pequeno, caminho, massas de rocha/vegetação, árvore marco, banco, terminal e céu. Prova controles, colisão, terminal DOM, áudio, streaming, perfis de qualidade e acessibilidade. Nenhum outro planeta é produzido antes dos gates.

## Viagem

Seleção explícita no hub/terminal, seguida de transição de 2–4 s que permite preload e cancelamento. Em reduced motion, usar fade curto e progress indicator. Não fingir voo interativo.
