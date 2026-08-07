# Pipeline de aquisição e publicação

**Estado:** contrato obrigatório

**Owner:** Asset Pipeline Engineer

## Regra central

Nada entra diretamente em `public/assets`. Download não é aprovação e licença compatível não é direção de arte.

```text
brief → pesquisa → shortlist → licença → autorização
      → quarentena → inspeção → normalização → otimização
      → validação → teste visual/performance → registro
      → aprovação de produção → public/assets → manifesto
```

## Zonas

| Zona            | Local lógico                                | Versionada?                | Conteúdo                                    |
| --------------- | ------------------------------------------- | -------------------------- | ------------------------------------------- |
| catálogo        | `docs/08-asset-library/`                    | sim                        | pesquisa, fila, decisão e licenças          |
| evidência legal | `licenses/assets/<asset-id>/`               | sim, quando redistribuível | licença, URL, snapshot, recibo e atribuição |
| quarentena      | armazenamento de artefatos fora de `public` | não por padrão             | ZIP e fonte original                        |
| trabalho        | diretório temporário reproduzível           | não                        | conversões e relatórios                     |
| runtime         | `public/assets/<domain>/`                   | sim                        | somente derivados aprovados e otimizados    |

Arquivos-fonte pagos ou com redistribuição restrita nunca entram no Git. O repositório guarda apenas metadados permitidos e o derivado quando a licença autoriza seu uso distribuído no produto.

## Etapas e gates

### 1. Brief

Registrar finalidade, cena, silhueta, escala, orçamento visual, formatos aceitos, budget de triângulos/materiais/texturas e alternativas sem asset.

### 2. Pesquisa

- consultar no máximo três fontes por rodada;
- listar no máximo três finalistas por necessidade;
- não baixar para “ver depois” quando preview e metadados bastam;
- aplicar o teste de veto visual e de IP.

### 3. Licença

Confirmar no item e na fonte oficial:

- autor/publisher;
- licença e versão;
- uso comercial e modificação;
- atribuição;
- redistribuição do source e do derivado;
- limite de seats/projetos;
- restrições de IA, marca ou conteúdo editorial;
- preço, moeda, impostos e data.

Salvar evidência no momento da aquisição. Página removida no futuro não pode apagar a proveniência.

### 4. Download e quarentena

- aquisição exige autorização registrada em `DOWNLOAD_QUEUE.md`;
- preservar nome original, archive e checksum SHA-256;
- nunca extrair diretamente em `public`;
- escanear o archive e listar extensões antes de abrir ferramentas de autoria;
- recusar executáveis, scripts não necessários ou dependências de engine.

### 5. Inspeção

Medir, sem inferir pela página:

- vertices, triângulos, meshes, nodes e primitives;
- materiais, texturas, dimensões, canais e memória estimada;
- animações, skins, morph targets e extensões;
- escala, eixos, pivots, bounds e normals;
- nomes, objetos ocultos, câmeras e luzes embutidas;
- separabilidade funcional e possibilidade de instancing.

### 6. Normalização e conversão

- runtime canônico: GLB 2.0;
- escala: metros; Y-up; orientação definida pelo domínio;
- nome: `{domain}-{object}-{variant}-{lod}.{ext}`;
- remover câmeras, luzes, metadata e objetos não usados;
- consolidar materiais apenas quando não altera a leitura;
- gerar collider simples separado quando necessário;
- conversão deve ser automatizável; nada de remodelagem manual recorrente.

FBX/OBJ são fontes de trânsito, não formato final. GLB recebido também precisa ser validado e normalizado.

### 7. Compressão

- Meshopt é o primeiro candidato para geometria; Draco somente após medir decode e compatibilidade.
- KTX2/Basis é avaliado para texturas de runtime; não converter mapas pequenos sem ganho.
- Reduzir resolução antes de adicionar compressão complexa.
- Preservar alpha somente quando indispensável.
- Áudio master permanece fora de `public`; runtime oferece WebM/Opus e fallback compatível quando o suporte exigir.

### 8. Validação

O relatório precisa conter:

- glTF Validator sem erro;
- dimensões, triângulos, materiais, texturas e bytes antes/depois;
- teste de carregamento, cache e disposal;
- perfil low/high e impacto no budget da cena;
- screenshot neutro, na paleta e na cena;
- teste de mobile e cintilação/alpha quando aplicável;
- licença e atribuição resolvidas.

### 9. Registro e aprovação

Criar registro a partir de `docs/templates/ASSET_RECORD_TEMPLATE.md`. A aprovação exige Art Director, Technical Artist e responsável de licença/proveniência. Asset hero exige também Game Director.

### 10. Publicação

Somente o derivado aprovado é copiado para a categoria de runtime e adicionado ao manifesto da cena. Toda referência usa caminho explícito; pastas não são varridas em runtime.

## Critérios de falha automática

- licença ausente, NC, ND, SA ou Editorial;
- marca/IP ou origem duvidosa;
- source fechado que exige engine ou plugin não aprovado;
- necessidade de remodelagem extensa;
- excesso de materiais/texturas sem redução segura;
- diferença visual que exige mudar a Art Bible para acomodar o asset;
- frame pacing, memória ou download fora do budget;
- asset “bonito” sem função na composição.

## Métrica de decisão

Nota final de 0 a 5:

| Critério                    | Peso |
| --------------------------- | ---: |
| aderência à direção de arte |  25% |
| licença e proveniência      |  20% |
| topologia/performance       |  15% |
| harmonização                |  15% |
| formato web                 |  10% |
| singularidade sem IP        |  10% |
| custo total                 |   5% |

Licença ou veto artístico reprova independentemente da média. Nota mínima para runtime: 4,0 e nenhum critério abaixo de 3.

## Definition of Done de um asset

- [ ] necessidade e alternativa documentadas;
- [ ] origem, autor, licença, preço e data preservados;
- [ ] checksum do source registrado;
- [ ] inspeção objetiva concluída;
- [ ] GLB normalizado e validado;
- [ ] textura/áudio otimizado quando necessário;
- [ ] budgets medidos em cena;
- [ ] comparação visual low/high aprovada;
- [ ] atribuição adicionada quando exigida;
- [ ] derivado no domínio correto e manifesto atualizado;
- [ ] source restrito permanece fora do Git.
