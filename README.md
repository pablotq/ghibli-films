# 🎬 Ghibli Films

Uma aplicação web moderna para explorar filmes do Studio Ghibli com uma interface elegante e responsiva. Visualize informações detalhadas sobre cada filme, incluindo sinopse, diretor, produtor, ano de lançamento e avaliação.

## 📋 Sobre o Projeto

Este projeto é um catálogo interativo dos filmes do Studio Ghibli, desenvolvido como uma experiência de aprendizado com as tecnologias modernas do ecossistema React. A aplicação consome dados de uma API externa e apresenta os filmes em cards elegantes com detalhes individualizados.

## 🚀 Tecnologias Utilizadas

- **[React 18](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto tipado do JavaScript para maior segurança
- **[Vite](https://vite.dev/)** - Bundler ultra-rápido para desenvolvimento e build
- **[React Router](https://reactrouter.com/)** - Roteamento SPA para navegação entre páginas
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização
- **[ESLint](https://eslint.org/)** - Ferramenta de análise estática para código JavaScript/TypeScript

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ghibli-films.git

# Entre no diretório
cd ghibli-films

# Instale as dependências
npm install
```

## 🏃 Como Executar

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O projeto será aberto em http://localhost:5173
```

## 🔨 Build para Produção

```bash
# Gere a build otimizada para produção
npm run build

# Visualize a build localmente
npm run preview



## 💻 Funcionalidades

✨ **Listagem de Filmes** - Visualize todos os filmes do Studio Ghibli em um grid responsivo com cards elegantes

📄 **Detalhes do Filme** - Clique em um filme para ver informações completas:
- Título e Banner
- Descrição detalhada
- Diretor
- Produtor
- Ano de lançamento
- Avaliação (com destaque visual para notas acima de 90)

📱 **Design Responsivo** - Interface perfeita em dispositivos móveis, tablets e desktop

🎨 **UI Moderna** - Utiliza Tailwind CSS para uma experiência visual refinada com:
- Cards com efeito hover
- Animações suaves
- Paleta de cores consistente
- Transições elegantes

## 🌐 API Utilizada

Os dados dos filmes são obtidos da [Studio Ghibli API](https://ghibliapi.github.io/), uma API pública e gratuita que fornece informações sobre os filmes do estúdio.