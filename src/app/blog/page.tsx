import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/blog";
import { linkedinArticles } from "@/data/articles";
import { BlogPost, LinkedInArticle } from "@/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import ArticleCard from "@/components/blog/ArticleCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical blog posts and LinkedIn articles by Amruth Pai Thukaram on AI, ML, and data engineering.",
};

type BlogItem =
  | { kind: "post"; data: BlogPost }
  | { kind: "article"; data: LinkedInArticle };

export default function BlogPage() {
  const posts = getAllPosts();

  const items: BlogItem[] = [
    ...posts.map((p) => ({ kind: "post" as const, data: p })),
    ...linkedinArticles.map((a) => ({ kind: "article" as const, data: a })),
  ].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-3">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Thoughts on machine learning, AI engineering, and building intelligent systems — including articles published on LinkedIn.
          </p>
        </div>
        <Separator className="mb-12" />

        {items.length === 0 ? (
          <p className="text-muted-foreground text-center py-20">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) =>
              item.kind === "post" ? (
                <BlogCard key={item.data.slug} post={item.data} />
              ) : (
                <ArticleCard key={item.data.linkedinUrl} article={item.data} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
