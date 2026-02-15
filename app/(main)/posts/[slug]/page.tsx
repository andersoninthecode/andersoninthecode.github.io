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
    <main className="max-w-4xl mx-auto">
      <article className="space-y-8">
        <header className="space-y-4 text-center">
          <time className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Tutorial
          </time>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
            {post.title}
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </header>

        <div
          className="prose prose-zinc dark:prose-invert max-w-none 
                     prose-headings:scroll-mt-20
                     prose-pre:bg-card prose-pre:border prose-pre:border-border
                     prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
