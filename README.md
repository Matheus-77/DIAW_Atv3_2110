# Pokédex — React + Vite

Aplicação da Atividade 03, com dados locais, componentes funcionais, props, useState, useEffect, eventos e listas com map.

## Executar

Na raiz do repositório:

```bash
cd pokedex
npm install
npm run dev
```

Abra http://localhost:5173, se a porta estiver ocupada, o Vite informa outra porta. Use Node.js.

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

## Fontes

Dados: [pokedex-data.json do professor](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/blob/main/ATIVIDADES/ATIVIDADE%2003%20-%20JSON/data/pokedex-data.json)

Imagens: [PokeAPI sprites](https://github.com/PokeAPI/sprites)

## Entrega em dupla
- Integrante 1: Matheus Oliveira
- Integrante 2: Arthur Costa 

