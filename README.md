# Pokédex — React + Vite

Aplicação da Atividade 03, com dados locais, componentes funcionais, props, useState, useEffect, eventos e listas com map.

## Executar

Na raiz do repositório:

```bash
cd pokedex
npm install
npm run dev
```

Abra o endereço informado no terminal, normalmente http://localhost:5173. Se a porta estiver ocupada, o Vite informa outra porta. Use Node.js compatível com o Vite 8 (22.12+ ou 24+).

```bash
npm run build   # gera a versão de produção em dist
npm run preview # serve o build localmente
npm run lint    # verifica o código
```

## Funcionalidades

Interface em formato de Pokédex física, com carcaça vermelha, lente azul, tela LCD e controles funcionais.

- Todos os 151 Pokémon do JSON, selecionáveis pelo índice ou pelo direcional.
- Pesquisa instantânea por nome ou ID (inclusive #025) combinada ao filtro por tipo.
- Tela de detalhes com ID, nome, tipos, seis atributos e treinadores relacionados.
- Botão TREINADORES para consultar nomes, insígnias e equipes; selecionar um membro abre seu registro Pokémon.
- Direcional para avançar ou voltar entre os resultados filtrados e entre treinadores, com navegação circular.
- Botão SCAN para abrir um Pokémon aleatório e limpar os filtros.
- Contador de resultados, mensagem de pesquisa vazia e layout responsivo.
- Componentes funcionais, props, useState, eventos, map e estados derivados.

## Organização

```text
pokedex/
  src/
    components/Pokemon.jsx # imagem, tipos e atributos
    data/pokedex-data.json # dados originais da atividade
    App.jsx                # aparelho, navegação, pesquisa, filtro e treinadores
    App.css                # estilos e responsividade
    index.css              # estilos globais
    main.jsx               # entrada React
  index.html
  package.json
  vite.config.js
```

## Fontes

Dados: [pokedex-data.json do professor](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/blob/main/ATIVIDADES/ATIVIDADE%2003%20-%20JSON/data/pokedex-data.json), copiados sem alteração para `src/data/pokedex-data.json`. Toda a lógica funciona com esse arquivo, sem banco de dados ou chamadas de API.

Imagens: [PokeAPI sprites](https://github.com/PokeAPI/sprites), carregadas por ID em `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`. As imagens precisam de internet; falhas não impedem a consulta dos dados. Fonte visual: Google Fonts (DM Sans e Outfit), com alternativas locais. Pokémon e personagens pertencem aos respectivos titulares; projeto educacional.

## Entrega em dupla

Preencher os nomes dos dois integrantes aqui e registrar a colaboração real em pair programming antes da entrega. Ambos devem enviar no Canvas o link do mesmo repositório GitHub.

- Integrante 1: a preencher
- Integrante 2: a preencher

