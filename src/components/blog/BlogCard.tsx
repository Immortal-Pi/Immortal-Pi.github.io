import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="bg-card border-border/50 hover:border-primary/40 transition-colors duration-300">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardDescription className="font-heading text-xs">{post.date}</CardDescription>
              <CardTitle className="text-lg group-hover:text-primary transition-colors mt-1">
                {post.title}
              </CardTitle>
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
