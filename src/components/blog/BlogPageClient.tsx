"use client";

import { Separator } from "@/components/ui/separator";
import { LinkedInArticle } from "@/lib/types";
import ArticleCard from "@/components/blog/ArticleCard";
import GlitchText from "@/components/fx/GlitchText";
import TypedText from "@/components/fx/TypedText";
import { Reveal } from "@/components/fx/Reveal";

export default function BlogPageClient({ items }: { items: LinkedInArticle[] }) {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1
            className="matrix-veil font-heading text-4xl font-bold tracking-tight text-foreground mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <GlitchText as="span" always>Blog</GlitchText>
          </h1>
          <p
            className="matrix-veil text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in min-h-[3.5rem]"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <TypedText
              text="Thoughts on machine learning, AI engineering, and building intelligent systems — including articles published on LinkedIn."
              delay={500}
              speed={22}
            />
          </p>
        </div>
        <Separator className="mb-12" />

        {items.length === 0 ? (
          <p className="text-muted-foreground text-center py-20">
            No posts yet. Check back soon!
          </p>
        ) : (
          <Reveal>
            <div className="flex flex-col gap-4">
              {items.map((article) => (
                <ArticleCard key={article.linkedinUrl} article={article} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
