import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { linkedinArticles } from "@/data/articles";
import BlogPageClient, { BlogItem } from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical blog posts and LinkedIn articles by Amruth Pai Thukaram on AI, ML, and data engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const items: BlogItem[] = [
    ...posts.map((p) => ({ kind: "post" as const, data: p })),
    ...linkedinArticles.map((a) => ({ kind: "article" as const, data: a })),
  ].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return <BlogPageClient items={items} />;
}
