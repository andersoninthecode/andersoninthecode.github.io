import PostCard from "@/components/post/PostCard";
import { getAllPosts } from "@/lib/PostApi";
import type { Post } from "@/lib/interfaces/Models";

export default async function Posts() {
  const posts: Post[] = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold items-center py-3">Artigos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
