# Constituição do projeto

**Estado:** obrigatório  
**Owner:** Creative Director + Technical Director

## Cláusula fundamental

Este produto é um passeio contemplativo por uma carreira. O 3D cria presença e emoção; o computador transforma essa presença em informação profissional clara. Toda decisão deve fortalecer ao menos um desses papéis sem enfraquecer o outro.

## Sempre fazer

- Começar pela emoção desejada e pelo conteúdo necessário, nunca pela tecnologia disponível.
- Fazer o visitante enxergar um destino antes de explicar um controle.
- Usar espaço vazio como material de composição.
- Manter um único marco visual principal por vista importante.
- Guiar com luz, silhueta, som e caminho; texto é último recurso no mundo.
- Projetar primeiro o perfil visual low; high adiciona sutileza, não outra direção de arte.
- Preservar acesso completo por terminal DOM e rota 2D equivalente.
- Fazer todo percurso obrigatório funcionar apenas caminhando.
- Testar decisões em silêncio e sem pós-processamento: a cena-base ainda precisa funcionar.
- Registrar origem, licença, transformação e budget de cada asset.
- Comparar asset pronto com a Art Bible antes de comprá-lo ou baixá-lo.
- Permitir parar, voltar, silenciar, reduzir movimento e sair do pointer lock imediatamente.
- Dar a cada planeta uma emoção, uma pergunta profissional e uma imagem memorável.
- Manter a tela do computador legível, calma e útil.

## Nunca fazer

- Nunca adicionar combate, inimigos, dano, morte, inventário, crafting, missão, score, ranking ou colecionáveis.
- Nunca usar HUD persistente, minimapa, barra de stamina/vida, marcador flutuante ou objective tracker.
- Nunca transformar travessia em prova de habilidade, plataforma ou labirinto.
- Nunca usar pulo como controle principal, sprint com FOV kick, head bob padrão, camera roll ou motion blur.
- Nunca interromper o visitante com modal flutuante sobre a paisagem.
- Nunca renderizar conteúdo profissional apenas dentro de textura/Canvas.
- Nunca usar preto dominante, cinza industrial, branco hospitalar ou neon como linguagem principal.
- Nunca criar estação militar, laboratório estéril, cockpit, megacidade ou nave de combate.
- Nunca preencher espaço para “parecer rico”. Poucos objetos, cada um com propósito.
- Nunca copiar personagem, traje, planeta, ruína, arquitetura, interface, música, símbolo ou composição de uma referência.
- Nunca pedir a uma IA “no estilo de” obra, franquia ou artista específico.
- Nunca aceitar asset sem licença verificável ou cuja identidade visual dependa de marca/IP de terceiros.
- Nunca baixar um pack inteiro só porque está disponível.
- Nunca esconder loading real atrás de animação longa e não cancelável.
- Nunca sacrificar frame pacing, foco, contraste ou legibilidade por efeito visual.

## Obrigatório

- Fim de tarde eterno em todas as cenas.
- Paleta global quente com azul profundo restrito às sombras e céu superior.
- Um computador físico dentro de uma pequena construção em cada planeta.
- Aproximação de câmera antes da interface ocupar a tela.
- Interface do computador em DOM semântico, sem aparência de modal genérico.
- Rota 2D com o mesmo conteúdo e prioridade editorial.
- Caminhos amplos, inclinações suaves e recovery sem punição.
- Som opt-in, mute global e silêncio intencional.
- `prefers-reduced-motion` e configuração interna equivalente.
- Gate de art direction, performance, acessibilidade, licença e anti-cópia por cena.
- ADR para mudar regra estrutural ou criativa difícil de reverter.

## Evitar

- Realismo fotográfico, microdetalhe, sujeira pesada e materiais molhados.
- Árvores demais, rochas aleatórias, fog espessa ou partículas constantes.
- Domos, antenas e telas em excesso que leiam como sci-fi genérico.
- Texto monoespaçado minúsculo, scanlines fortes, glitches e terminal “hacker”.
- Música contínua emotiva demais; preferir ambiência e temas esparsos.
- Animações simultâneas em várias regiões da tela.
- Conteúdo autobiográfico abstrato sem evidência profissional.
- Excesso de variação entre planetas que destrua a família visual.

## Proibido sem ADR

- Universo contínuo com todos os planetas residentes.
- WebGPU como único renderer.
- CMS, multiplayer, conta de usuário, backend de progresso ou telemetria detalhada.
- Blender como pipeline de modelagem manual interno.
- Asset generativo publicado sem proveniência e revisão humana.
- Nova biblioteca visual/física/áudio que duplique capacidade existente.
- Alterar o número/taxonomia de planetas.

## Teste de veto em 60 segundos

Uma proposta é rejeitada se qualquer resposta for “não”:

1. Aumenta paz, curiosidade, clareza ou esperança?
2. Continua funcionando sem efeito premium?
3. Mantém conteúdo acessível sem dominar controles 3D?
4. Respeita fim de tarde, poucos objetos e identidade não militar?
5. Cabe nos budgets e possui licença/proveniência?
6. É autoral por princípios, não reconhecível por cópia?

