import PostCard from "@/components/post/PostCard";
import { getAllPosts } from "@/lib/PostApi";
import type { Post } from "@/lib/interfaces/Models";

export default async function Posts() {
  const posts: Post[] = getAllPosts();

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Artigos e <span className="text-indigo-500">Tutoriais</span></h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore guias detalhados e insights sobre o mundo da tecnologia e desenvolvimento de software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
