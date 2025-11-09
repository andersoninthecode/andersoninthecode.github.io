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
    <div className="group bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      
      <Link href={`./posts/${slug}`}>
        <div className="block p-5 cursor-pointer h-full">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-sm text-gray-500 mb-3">
            <time dateTime={date}>{formatDate(date)}</time>
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-4 text-indigo-500 font-medium text-sm group-hover:text-indigo-700 transition-colors duration-300">
            Continuar lendo →
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;