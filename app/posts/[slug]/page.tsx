import { getPostBySlug, getAllPosts } from "@/lib/PostApi";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: Props) {
  // Desembrulha a Promise para obter o slug
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || "");

  console.log(content);
  

  return (
    <main className="md:px-40"> {/* Adiciona padding horizontal apenas em telas médias ou maiores */}
      <article className="prose prose-lg prose-invert mx-auto prose-ol:list-decimal prose-ol:text-inherit">
        <h1 className="text-3xl text-center mb-6">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  // Garante que o retorno está no formato correto { slug: "..." }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
