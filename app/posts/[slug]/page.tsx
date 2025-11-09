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

  return (
    <main>
      <article className="prose prose-lg prose-invert mx-auto">
        <h1>{post.title}</h1>
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
