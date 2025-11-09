---
title: "Proposta de design para arquitetura Limpa"
excerpt: "A arquitetura limpa nos traz uma proposta de design de código que a princípio parece complicada, principalmente..."
coverImage: "/posts/images/perfilPost.png"
date: "2025-10-08T05:35:07.322Z"
author:
  name: Anderson Santana
  picture: "/posts/images/perfilPost.png"
ogImage:
  url: "/posts/images/perfilPost.png"
---

A arquitetura limpa nos traz uma proposta de design de código que a princípio parece complicada, principalmente. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. _Consectetur_ libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing.

1. Código abaixo:
      ```js
      export function getAllPosts(): Post[] {
        const slugs = getPostSlugs();
        const posts = slugs
          .map((slug) => getPostBySlug(slug))
          .filter((slug) => slug.endsWith(".md"))
          .map((slug) => getPostBySlug(slug))
          // sort posts by date in descending order
          .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
        return posts;
      ```

Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

---

## Camada de aplicação

![Texto Alternativo da Imagem](/posts/images/clean_arch.png)

**Tristique senectus et netus et malesuada fames ac turpis**. `Ridiculous mus mauris vitae ultricies `leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. **_Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla_**. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.


1. Item 1
  1. Subitem 1
  2. Subitem 2
2. Item 2
3. Item 3
4. Item 4
5. Item 5
6. Item 6

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6

