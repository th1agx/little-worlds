# Ordem exata de implementação — Sprint 1

**Estado:** plano prescritivo após G0  
**Princípio:** provar acesso e conforto antes de investir em cenário

1. **Aprovar as decisões e o conteúdo real.** Sem caso, link, dispositivos e ADRs aprovados, não existe critério de aceite confiável.
2. **Fechar moodboard, frames e asset briefs.** Direção vem antes de escolher modelo ou shader; evita assets que determinem a estética.
3. **Pesquisar/pontuar candidatos e autorizar aquisição.** Licença, formato e budget devem ser conhecidos antes de entrar no repositório.
4. **Criar a fundação Next/TypeScript e checks mínimos.** Todo trabalho posterior precisa de build, lint/typecheck e uma estrutura estável; ainda não adota biblioteca condicional.
5. **Entregar primeiro o shell 2D e o case real.** Isso prova o produto, SEO/conteúdo e fallback antes de Canvas/pointer lock.
6. **Adicionar preferências e capability detection.** Configurações não podem ser um apêndice depois que o controle 3D já assumiu a sessão.
7. **Implementar quality/reduced motion como contratos.** A cena nasce com perfis em vez de tentar degradar um high-end pronto.
8. **Executar o spike isolado de câmera/controlador.** Provar input, pointer lock, touch, recovery e lifecycle sem a variável de arte complexa.
9. **Rodar experimento A/B de pulo baixo e calibrar passo rápido.** Resolver a mecânica antes de desenhar níveis, colisores e percursos dependentes dela.
10. **Implementar terminal DOM e foco em placeholder.** Esta é a ponte crítica entre mundo e portfólio; sua correção não pode depender de uma cena pronta.
11. **Construir Hub mínimo com um único destino.** Valida orientação e viagem com baixo custo e garante uma forma real de retorno.
12. **Processar somente os assets autorizados.** Cada asset entra com ledger, validação e budget antes de ser integrado visualmente.
13. **Montar Projetos em passes: terreno/caminho → pavilhão/ponte → computador → detalhes aprovados.** A cada passe, verificar marco, espaço negativo e perfil low; não preencher para parecer acabado.
14. **Integrar case real, deep link e link externo.** Só após o terminal estrutural estar pronto; confirma que o conteúdo não é uma textura ou mock.
15. **Adicionar áudio opt-in depois de a cena funcionar em silêncio.** Som reforça orientação e presença; não encobre defeitos de ritmo.
16. **Instrumentar testes de unidade/componente/E2E.** Cobrir contratos recém-estáveis, não detalhes visuais ainda em mudança.
17. **Fazer profiling e comparar baselines nos devices.** Medir a jornada completa, não só um frame parado; reduzir custo mantendo composição.
18. **Executar validação qualitativa.** Observar descobribilidade, conforto, clareza e leitura de “jogo” antes de polir.
19. **Corrigir apenas falhas que bloqueiam gate.** Evita uma rodada de “features úteis” enquanto as hipóteses do Slice permanecem incertas.
20. **Fazer revisão quádrupla e registrar handoff.** Técnica, criativa/UX, inclusão e proveniência devem concordar antes de declarar a fundação pronta.

## Sequências que não devem ser invertidas

| Não inverter | Razão |
| --- | --- |
| rota 2D antes de Canvas final | garante que conteúdo nunca seja refém do 3D |
| spike de controle antes de colisão/arte final | separa desconforto técnico de percepção estética |
| asset brief antes de compra/download | reduz acúmulo e risco de licença/otimização |
| terminal/foco antes de cena detalhada | é o principal risco de acessibilidade e produto |
| low/reduced desde o início antes de polish high | impede que “qualidade” signifique uma segunda cena |
| medição e usuário antes de expandir planetas | Slice só vale se mudar decisões futuras |

