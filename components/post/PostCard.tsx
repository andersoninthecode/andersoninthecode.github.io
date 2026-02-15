import Link from 'next/link';
import { FC } from 'react';
import { formatDate } from '@/lib/UtilFunctions';

interface PostCardProps {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

const PostCard: FC<PostCardProps> = ({ title, date, excerpt, slug }) => {
  return (
    <article className="group relative flex flex-col space-y-3 p-6 bg-card border border-border rounded-2xl transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
      <Link href={`./posts/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Ver post</span>
      </Link>

      <div className="flex flex-col space-y-2">
        <time
          dateTime={date}
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          {formatDate(date)}
        </time>

        <h2 className="text-xl font-bold leading-tight group-hover:text-indigo-500 transition-colors">
          {title}
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
        {excerpt}
      </p>

      <div className="pt-4 flex items-center text-sm font-semibold text-indigo-500 group-hover:translate-x-1 transition-transform">
        Ler post completo
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
};

export default PostCard;