import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground" nativeButton={false} render={<Link href="/blog" />}>
            <ArrowLeft data-icon="inline-start" />
            Back to Blog
        </Button>

        <header className="mb-10">
          <p className="font-heading text-xs text-primary mb-3">{post.date}</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <Separator />
        </header>

        <article className="prose max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}
