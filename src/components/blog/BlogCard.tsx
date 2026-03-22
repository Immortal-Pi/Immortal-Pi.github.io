import Link from "next/link";
import { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 hover:bg-white/10 transition-all group"
    >
      <p className="text-green-400 text-sm mb-2">{post.date}</p>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
