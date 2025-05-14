# Rick and Morty Explorer

## Sobre o Projeto
Este projeto é uma aplicação web interativa que explora o universo de Rick and Morty, permitindo aos usuários:
- Visualizar informações sobre todos os personagens da série
- Pesquisar personagens por nome


## Frontend

Foi desenvolvido utilizando as seguintes libs:
- [shadcn-vue](https://github.com/radix-vue/shadcn-vue) para os componentes
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) utilitário css

## API
O projeto utiliza a [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql) para obter os dados dos personagens, episódios e localizações.

## Deploy
A aplicação está disponível em produção através do Cloudflare Pages:
- URL: [https://rick-morty-6cc.pages.dev](https://rick-morty-6cc.pages.dev)

## Configuração Via Docker

- Criar a imagem e instalar as dependências
```sh
docker compose up -d
```

### Acessar a aplicação

- Frontend (Desenvolvimento Local)
```
http://localhost:5173/
```

## Features
- ✨ Interface moderna com Shadcn Vue
- 🚀 GraphQL para consultas otimizadas
- 🎯 Tipagem forte com TypeScript
- 📱 Design responsivo
- 🔄 Cache de consultas GraphQL
- ⚡ Deploy automático via Cloudflare
```