# Experience Bible

**Estado:** fonte de verdade de sensação, ritmo e narrativa  
**Owner:** UX Director + Narrative Designer

## 1. Promessa

O visitante deve terminar a experiência sentindo que conheceu uma trajetória sem ter recebido uma apresentação. A carreira foi descoberta como paisagem: com liberdade para aproximar, pausar, ler e ir embora sem culpa.

## 2. Curva emocional global

| Momento | Sentimento principal | Necessidade do design |
| --- | --- | --- |
| chegada | segurança | carregamento honesto, escolha 3D/2D e horizonte acolhedor |
| primeiro olhar | curiosidade | marco claro, sem tutorial longo |
| primeiro passo | conforto | controle responsivo e câmera estável |
| travessia | contemplação | espaço, vento, som e pouca informação |
| entrada | intimidade | exterior se comprime suavemente, luz quente conduz |
| computador | clareza | transição diegética, conteúdo profissional direto |
| saída | reflexão | silêncio curto, horizonte reaparece |
| viagem | expectativa serena | escolha explícita, transição curta, sem urgência |
| contato | esperança | abertura visual e convite humano, não call-to-action agressivo |

Ansiedade, falha, medo de perder conteúdo e pressão de completar são defeitos críticos.

## 3. Ritmo

### Macro-ritmo

O ritmo alterna expansão e foco:

`paisagem ampla → caminhada → abrigo → computador → paisagem ampla`.

Não encadear duas sequências fechadas ou duas telas densas sem uma pausa. Depois de fechar o terminal, nenhum prompt aparece por pelo menos 2 s, salvo necessidade de acessibilidade.

### Micro-ritmo

- Resposta de controle: imediata.
- Ambiente: lento e assíncrono.
- Interface: deliberada, mas nunca lenta.
- Narrativa: sugerida fora; explícita no computador.
- Transições: uma ação principal por vez.

### Duração livre

Não há duração obrigatória. Alvos de observação:

- Primeiro conteúdo útil: 15–45 s no 3D; imediato na rota 2D.
- Visita breve a um planeta: 2–4 min.
- Visita contemplativa: 4–7 min.
- Percurso essencial completo: 10–18 min.
- Leitura profunda de todos os cases: 25–40 min.

Esses números orientam densidade; nunca criam timer ou pressa.

## 4. Entrada e consentimento

### Landing

Uma frase de proposta, estado de carregamento e duas escolhas com igual dignidade: “Explorar o universo” e “Ver o portfólio”. Som é uma escolha separada, nunca pré-marcada.

### Primeira sessão 3D

- Mostrar movimento, olhar, interagir e sair em quatro linhas/ícones no máximo.
- Só pedir pointer lock após gesto inequívoco.
- Tutorial desaparece ao primeiro movimento e pode ser reaberto.
- Detecção de hardware recomenda perfil; não julga o dispositivo.

### Retorno

Lembrar preferência de som, movimento, sensibilidade e qualidade. Oferecer “continuar de onde parei” sem transformar visitas em progresso/percentual.

## 5. Caminhada e passo rápido

### Caminhada

- Velocidade-alvo inicial: sensação equivalente a 1,6–2,2 m/s, calibrada pela escala real.
- Aceleração curta e macia; parar não pode deslizar.
- Passos audíveis, leves e espaçados; terreno altera timbre sem exagero.
- Inclinações suaves não alteram drasticamente velocidade.
- O visitante pode andar para trás/lado sem penalidade artificial.

### Passo rápido

- 1,25–1,45× a caminhada, nunca sprint.
- Sem stamina, respiração pesada, câmera baixa, shake ou mudança de FOV.
- Hold/toggle configurável.
- Nome na UI pode ser “passo rápido”; não “correr” se testes mostrarem expectativa de ação.

### Pulo

Fora do controle primário, conforme ADR 0007 proposto. Nenhum conteúdo depende de salto. Pequenos desníveis usam step offset/rampa invisível coerente. Recuperação de queda é suave e sem mensagem de falha.

## 6. Câmera

- Primeira pessoa com altura de olho estável em torno de 1,65 m.
- FOV inicial moderado (calibrar 65–75° vertical/horizontal conforme API); ajuste acessível.
- Sem head bob padrão, camera roll, recoil, chromatic aberration de movimento ou motion blur.
- Sensibilidade baixa-média inicial, inversão configurável e aceleração de mouse desativada quando possível.
- Colisão da câmera não empurra violentamente; arquitetura evita espaços estreitos.
- Touch pode usar assistência de direção e modo passeio guiado.

### Olhar contemplativo

O design nunca toma a câmera durante exploração normal. Enquadramentos sugerem; não forçam. Sequências controladas só ocorrem ao aceitar viagem ou computador e podem ser reduzidas.

## 7. Interação

### Descoberta

- Computador é reconhecível por forma, luz âmbar e composição.
- Volume de interação generoso; não exige pixel hunting.
- Prompt aparece por proximidade + orientação ampla, não por mira perfeita.
- O prompt usa verbo direto: “Acessar”, “Ler” ou “Abrir terminal”.

### Sequência do computador

1. Input é reconhecido em até 100 ms com som/luz sutis.
2. Movimento é bloqueado; câmera ainda pode estabilizar por fração curta.
3. Em 1,2–1,8 s, câmera aproxima da tela por caminho simples.
4. Pointer lock é liberado; foco DOM vai ao título correto.
5. Interface ocupa a tela em continuidade com bezel/luz/material.
6. Conteúdo fica disponível imediatamente; animação nunca posterga leitura.
7. Sair inicia retorno de 0,9–1,4 s; foco e controle voltam de forma previsível.

Em reduced motion, usar corte/fade curto sem zoom espacial.

### Outros objetos

No MVP, objetos ambientais não abrem textos, lore, coleções ou tooltips. Banco pode permitir pausa/olhar apenas se isso não criar nova mecânica necessária.

## 8. Computador como interface

### Princípio

Não é modal, menu principal nem website dentro de iframe. É a ampliação coerente da tela física, implementada com DOM semântico.

### Conteúdo

- Título claro e resumo antes de detalhe.
- Uma ação primária por tela.
- Navegação persistente e saída sempre localizável.
- Cases usam problema → papel → decisão → processo → resultado → aprendizado.
- Tecnologias aparecem em contexto, não como nuvem de logos.
- Certificados possuem emissor, data e verificação.
- Contato usa texto humano e links diretos.

### Densidade

- Parágrafos curtos; largura de leitura confortável.
- Movimento de UI mínimo e localizado.
- Sem “typing effect” em textos essenciais.
- Sem som a cada tecla/hover.
- Scroll é permitido e esperado; não paginar artificialmente para parecer terminal.

## 9. Som e silêncio

### Função do som

O som confirma espaço, distância e cuidado. Não recompensa, alarma ou ordena.

### Mix emocional

- Ambiente largo e baixo.
- Passos próximos, suaves e informativos.
- Fontes mecânicas localizadas ajudam orientação.
- Música aparece como camada rara, sem melodia dominante constante.
- UI ocupa faixa sonora discreta e curta.

### Silêncio

- Primeiros 1–2 s após chegada podem ter apenas vento.
- Antes de abrir computador, reduzir música/ambiente em 1–2 dB, sem “whoosh” dramático.
- Ao abrir conteúdo emocional/importante, preservar 500–1.500 ms sem novo evento sonoro.
- Depois de fechar, ambiente retorna em crossfade de 1,5–3 s.
- Não preencher todos os momentos com loop musical.

### Acessibilidade

Áudio é opt-in, mute global está sempre acessível e nenhum conteúdo depende dele. Legendas/transcrições existem para qualquer fala futura; falas não são planejadas no MVP.

## 10. Pausas

Pausas são projetadas, não loading disfarçado:

- Vista/banco antes da construção.
- Pequeno vestíbulo luminoso entre exterior e terminal.
- Horizonte ao sair.
- Viagem escolhida apenas quando o visitante aciona destino.

Não interromper pausa com tooltip, achievement, novo objetivo ou autoplay.

## 11. Animações

| Classe | Duração | Sensação |
| --- | ---: | --- |
| feedback imediato | 80–160 ms | reconhecimento |
| foco/hover UI | 160–240 ms | precisão calma |
| painel/seção | 200–350 ms | continuidade |
| mecanismo físico | 450–800 ms | peso leve |
| câmera ao terminal | 1.2–1.8 s | aproximação deliberada |
| saída | 0.9–1.4 s | devolução do espaço |
| viagem | 2.5–4 s | passagem, não cutscene |
| ambiente | 8–30 s | respiração |

Regra: se o usuário espera para acessar conteúdo já pronto, a animação está longa. Reduced motion reduz ou remove transformação espacial.

## 12. Narrativa

### Forma

A narrativa é autobiográfica, mas não confessional; profissional, mas não corporativa. O ambiente sugere valores. O computador oferece fatos.

### Arco

1. **Hub — possibilidade:** existem vários caminhos, todos pertencem à mesma pessoa.
2. **Sobre — origem:** valores e curiosidade precedem ferramentas.
3. **Projetos — transformação:** problemas se tornam coisas úteis.
4. **Tecnologias — linguagem:** ferramentas conectam ideias, não definem identidade.
5. **Experiência — continuidade:** responsabilidade cresce com o tempo.
6. **Certificados — aprendizado:** conhecimento é prática recorrente.
7. **Contato — abertura:** a trajetória ainda está em movimento.

A ordem é sugerida, nunca obrigatória.

### Escrita ambiental

- Um objeto pode simbolizar uma ideia, mas não esconder informação obrigatória.
- Repetições criam coesão: luz âmbar, computador, horizonte, caminho.
- Nada de textos espalhados, gravações secretas ou “lore fragments”.
- Não inventar uma mitologia espacial para justificar seções do currículo.

## 13. Progressão

Não existe progresso gamificado. O sistema pode lembrar planetas visitados apenas para conveniência e alterar o hub de modo quase imperceptível — luz acesa, não contador.

- Todos os destinos estão disponíveis desde o início.
- Nada é desbloqueado por ordem, tempo ou habilidade.
- Links diretos pulam imediatamente ao conteúdo.
- “Conclusão” é o visitante encontrar a informação que buscava.

## 14. Viagem

- Iniciada por mapa/computador, não por pilotar nave.
- Destino mostra nome explícito e uma frase emocional/profissional.
- Transição visual abstrata deriva de luz, poeira e horizonte; sem hyperspace reconhecível.
- Loading real possui progresso/estado honesto e opção para versão 2D.
- O áudio conecta origem/destino por crossfade.

## 15. Sessões especiais

### Dispositivo fraco

Perfil low preserva luz, composição, terminal e som. Remove sombras caras, densidade e pós sem apresentar aviso depreciativo.

### Touch

Se dois sticks e botões prejudicarem contemplação, priorizar passeio guiado: tocar destino para caminhar lentamente com controle de olhar e parada imediata. Rota 2D permanece equivalente.

### Falha de WebGL/asset

Mostrar mensagem humana e continuar na rota 2D correspondente. Nunca tela preta, stack trace ou “seu dispositivo não suporta a experiência”.

### Retorno direto a conteúdo

URL de projeto/certificado abre conteúdo primeiro; “visitar planeta” é convite secundário. O portfólio respeita a intenção do link.

## 16. Critérios de experiência

Antes de aprovar uma cena, validar com usuários:

- Entenderam onde ir sem seta/HUD?
- Encontraram o computador sem tutorial adicional?
- Conseguiram sair dele sem hesitar?
- Relataram paz/curiosidade e não lentidão/frustração?
- Algum movimento causou desconforto?
- Conteúdo profissional ficou mais claro, não mais escondido?
- O silêncio pareceu intencional?
- O passo rápido pareceu conveniência, não corrida?

Falhar nas três perguntas de navegação bloqueia expansão para novos planetas.

