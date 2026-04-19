import { Metadata } from "next";
import { linkedinArticles } from "@/data/articles";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical blog posts and LinkedIn articles by Amruth Pai Thukaram on AI, ML, and data engineering.",
};

export default function BlogPage() {
  const items = [...linkedinArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return <BlogPageClient items={items} />;
}
