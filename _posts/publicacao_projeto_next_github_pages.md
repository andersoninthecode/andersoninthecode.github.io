---
title: "Como publicar seu projeto Next.js no GitHub Pages - 2025"
excerpt: "Aprenda de forma prática como criar um projeto Next.js e publicá-lo gratuitamente no GitHub Pages utilizando GitHub Actions."
coverImage: "/posts/images/perfilPost.png"
date: "2025-10-08T05:35:07.322Z"
author:
  name: Anderson Santana
  picture: "/posts/images/perfilPost.png"
ogImage:
  url: "/posts/images/perfilPost.png"
---

## Introdução

Recentemente, li um livro do Hugo Santos que me impactou profundamente. Não por apresentar algo revolucionário, mas por iluminar algo óbvio que, por alguma razão, eu não conseguia enxergar. Embora o livro aborde diversos tópicos interessantes, o princípio que quero destacar, e que me motivou a iniciar este blog, é o conceito do "Programador Celebridade".

Esse princípio baseia-se no marketing digital e trata da construção de autoridade na internet. Para nós desenvolvedores, essa autoridade é construída através da criação de conteúdo, como artigos e vídeos. Como primeiro artigo do site, demonstrarei como criar um projeto com Next.js e publicá-lo no GitHub Pages.

O foco aqui não será aprofundar nos detalhes do Next.js ou ensinar programação do zero. Criaremos apenas a estrutura inicial do projeto e utilizaremos a página gerada automaticamente para realizar o deploy.

## Criação do projeto Next.js

Certifique-se de que você tenha o Node.js instalado em sua máquina. Em seguida, abra seu terminal no diretório de sua preferência e execute o comando abaixo:

        
```bash
npx create-next-app@latest blog-app --yes
cd blog-app
npm run dev
```
Será necessário ajustar o arquivo `next.config.ts` conforme o código abaixo. Essa configuração é essencial para evitar problemas ao gerar os arquivos estáticos para o GitHub Pages.

``` javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
        

Com isso, seu projeto deve ter sido criado e estar em execução corretamente.

## Publicação no GitHub Pages

Acesse sua conta no GitHub e crie um novo repositório. Siga as instruções fornecidas pelo próprio GitHub para conectar seu projeto local ao repositório remoto. Certifique-se de que a branch principal seja a `main` e não `master`.

Após fazer o push do código para a branch `main`, retorne à página do seu repositório no GitHub.

No menu superior do repositório, clique em **Settings** e, na barra lateral esquerda, selecione **Pages**.

![Settings -> Pages](/posts/images/git_hub_pages_01.png "1.0")

Na seção **Build and deployment**, altere a opção **Source** para **GitHub Actions**.

![Deploy from a branch](/posts/images/git_hub_pages_02.png "2.0")

Ao selecionar GitHub Actions, localize o card sugerido para **Next.js**. Ele configurará automaticamente um workflow (arquivo `nextjs.yml`) com todas as ações necessárias para construir e publicar seu site.

![Next.js](/posts/images/git_hub_pages_03.png "3.0")

Clique em **Configure** e, na próxima tela, clique em **Commit changes** para salvar o arquivo.

![Configure](/posts/images/git_hub_pages_04.png "4.0")

Volte para a página inicial do repositório (aba Code) e você notará que um workflow do GitHub Actions foi iniciado.

![Github actions](/posts/images/git_hub_pages_05.png "5.0")

Ao clicar na aba **Actions**, você poderá acompanhar o processo. Quando o ícone ficar verde, o deploy terá sido concluído com sucesso.

![Deploy concluído](/posts/images/git_hub_pages_06.png "6.0")







