import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical blog posts by Amruth Pai Thukaram on AI, ML, and data engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative z-10 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Blog
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Thoughts on machine learning, AI engineering, and building intelligent systems.
        </p>
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
