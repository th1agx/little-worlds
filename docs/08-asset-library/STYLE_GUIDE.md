# Guia de estilo para assets

**Estado:** obrigatório para curadoria e aprovação

**Owner:** Art Director

## Norte visual

Little Worlds é um cosmos artesanal de baixa complexidade: silhuetas fortes, materiais foscos, massas grandes, poucas cores e muito espaço respirando. O asset deve sustentar tranquilidade, curiosidade, conforto, exploração e esperança sem parecer infantil, épico ou espetacular.

Referências externas fornecem princípios de ritmo, escala e emoção. Nunca fornecem personagens, objetos, arquitetura, símbolos, paleta exata ou composição.

## Teste em quatro distâncias

1. **Miniatura:** a silhueta continua identificável?
2. **Média distância:** o asset orienta sem virar marcador de HUD?
3. **Próximo:** materiais e escala permanecem coerentes?
4. **Em movimento:** o detalhe não produz ruído, cintilação ou distração?

Falha em qualquer distância impede aprovação.

## Vocabulário aprovado

- curvas largas e planos macios;
- assimetria calma, não aleatoriedade;
- base mineral quente, vegetação oliva/sálvia e luz âmbar;
- madeira clara envelhecida com moderação;
- cerâmica, cal, pedra e metal pintado fosco;
- um contraste frio profundo apenas no céu alto e nas sombras;
- formas que parecem construídas para habitar, observar e descansar.

## Vocabulário rejeitado

- fotogrametria, microdetalhe e sujeira como realismo;
- bevels de brinquedo, olhos, proporções chibi e saturação de desenho infantil;
- runas, arcos, cristais brilhantes, cogumelos mágicos e arquitetura medieval;
- neon, hologramas, painéis técnicos, cabos expostos e cockpit;
- templos, ruínas reconhecíveis, monumentos bélicos e megaconstruções;
- vegetação densa usada apenas para “encher”;
- asset cuja origem é imediatamente reconhecível como um kit comercial.

## Forma e topologia

- Priorizar uma massa principal e no máximo duas secundárias.
- Preferir geometria a alpha cards próximos da câmera.
- Silhueta vale mais que normal map.
- Pequenos detalhes devem poder ser removidos sem destruir identidade.
- Pivot, escala e eixos precisam ser normalizáveis por CLI.
- Separar somente partes com função: tela, corpo, emissivo, colisão ou animação.
- Não multiplicar materiais para simular variedade cromática; usar atlas, vertex color ou instâncias.

## Materiais

| Família       | Aparência                        | Evitar                                    |
| ------------- | -------------------------------- | ----------------------------------------- |
| pedra         | quente, seca, variação ampla     | scan, rachadura nítida, brilho molhado    |
| terra         | pêssego/ocre dessaturado         | lama, ruído fino, repetição visível       |
| vegetação     | sálvia/oliva/seco                | verde puro, folhas fotográficas           |
| madeira       | clara, fosca, veios discretos    | verniz, tábuas medievais                  |
| cal/cerâmica  | creme e marfim quente            | branco hospitalar, marble luxuoso         |
| metal pintado | baixo brilho, azul/cobre contido | chrome, gunmetal, painel sci-fi           |
| emissivo      | âmbar/marfim, área pequena       | neon saturado, bloom como forma principal |

KTX2 só é adotado quando textura realmente existe e o ganho de memória/upload compensa. Um atlas de 1024 px não vira automaticamente um conjunto de mapas PBR.

## Regras por família

### Natureza

- Rochas: três silhuetas-base, não uma coleção de vinte variações.
- Árvores: copa aberta, leitura individual; uma árvore pode ser marco, uma floresta não.
- Grama: grupos compostos e margens; nunca cobertura homogênea.
- Flores: uma cor de acento por composição, em grupos raros.
- Cristais: apenas minerais opacos e geológicos; se parecer recompensa, magia ou moeda, rejeitar.

### Arquitetura e props

- Pontes e escadas devem prolongar o terreno, não anunciar desafio.
- Construções são pequenas, acolhedoras e parcialmente abertas.
- Observatório é lugar de contemplação, não base científica pesada.
- Computador deve parecer ferramenta doméstica de memória e trabalho, sem marca, época ou estética hacker.
- Banco deve oferecer escala humana e pausa; preferir peça escultural única.
- Lanterna ilumina uma relação espacial. Nunca deve decorar um caminho inteiro.

### Atmosfera

- Céu é um sistema global autoral; HDRI serve primeiro para luz/reflexo.
- Nuvem deve ter movimento quase imperceptível e baixo contraste.
- Partículas existem em bolsões, não em todo o planeta.
- Vento aparece no som e na resposta de poucos elementos, nunca como símbolo gráfico constante.
- Limiar é fenômeno, não portal: sem moldura, pedestal, runa ou partículas explosivas.

### Áudio

- Silêncio é uma camada intencional.
- O bed não deve conter eventos chamativos irrepetíveis em loop curto.
- Passos precisam ser secos, próximos e leves; sem botas heroicas.
- Música não deve explicar ao visitante o que sentir.
- Toda fonte deve funcionar com mute, opt-in e normalização coerente.

## Gate anti-kit

Um asset aprovado individualmente ainda é rejeitado na cena quando:

- três ou mais objetos exibem a mesma assinatura de pack;
- o atlas original determina a paleta da cena;
- a composição parece uma demo do fornecedor;
- recoloração e material não bastam para integrá-lo;
- removê-lo torna a cena mais autoral e legível.
