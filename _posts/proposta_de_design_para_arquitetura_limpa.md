---
title: "Como publicar seu projeto Next.js no GitHub Pages - 2025"
excerpt: "A arquitetura limpa nos traz uma proposta de design de código que a princípio parece complicada, principalmente..."
coverImage: "/posts/images/perfilPost.png"
date: "2025-10-08T05:35:07.322Z"
author:
  name: Anderson Santana
  picture: "/posts/images/perfilPost.png"
ogImage:
  url: "/posts/images/perfilPost.png"
---

## Introdução

Eu li recentemente um livro do Hogo Santos. Esse livro me impactou muito, não por falar algo incrível, mas por mostrar algo óbvio que de alguma forma eu não conseguia enxergar e que, às vezes é dito ou mostrado por outros. O livro aborda diversos tópicos que você terá que ler para saber, mas o princípio que quero destacar — e que me motivou a criar e iniciar este blog — foi o tópico do "Programador Celebridade". Mas o que seria isso?

Esse princípio é basicamente o conceito do marketing digital que trata da construção de autoridade na internet, que no nosso caso é feita através da criação de artigos e vídeos. Como primeiro artigo aqui do site, irei mostrar como podemos criar um site com Next.js e publicá-lo no GitHub Pages.

Não irei entrar em detalhes sobre o Next.js, nem criar um tutorial sobre linguagens de programação ou outros detalhes complexos do framework. Iremos criar apenas o projeto, e a página inicial gerada automaticamente será usada para a publicação no GitHub Pages.

## Criação do projeto NextJs

Certifique-se de que você tenha o node instalado no sua máquina, logo depois você pode abrir seu terminal e digitar
ou copiar e coloar o código abaixo, em um diretório de sua preferência

        
```bash
npx create-next-app@latest blog-app --yes
cd blog-app
npm run dev
```
        

Com isso provavelmente seu projeto foi criado e está em execução.

## Publicação no GitHub Pages

Você precisará navegar até seu GitHub e criar um repositório, logo depois você poderá seguir as instruções de como 
conectar ao seu projeto local, se certifique de que sua branch main em seu ambiente local é o mesmo do repositório 
remoto, geralmente é a main e não a master. Faça um push na main retorne para página do GitHub e depois para seu repositório.
Logo depois **clique em Settings e em seguida Pages**.

![Settings -> Pages](/posts/images/git_hub_pages_01.png "1.0")

Em seguida clique em "Deploy from a branch", você verá um botão chamada Github Actions, clique nela.

![Deploy from a branch](/posts/images/git_hub_pages_02.png "2.0")

Depois de clicar em Github Actions, você verá um funcionalidade chamada Next.js, isso gerará um arquivo chamado nextjs.yml que é
um conjunto de actions do git workflows que já faz tudo para você ter o seu site ou página criado com Next.js no GitHub Pages.

![Next.js](/posts/images/git_hub_pages_03.png "3.0")

Clique em Configure e depois commit na próxima tela que aparecerá.

![Configure](/posts/images/git_hub_pages_04.png "4.0")

Navegue até a página inicial do seu repositório e você verá que u Github actions foi disparado

![Github actions](/posts/images/git_hub_pages_05.png "5.0")

Se clicar em Actions verá o deploy sendo concluído com sucesso.

![Deploy concluído](/posts/images/git_hub_pages_06.png "6.0")







