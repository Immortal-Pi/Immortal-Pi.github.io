import { ArrowUpRight, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedInArticle } from "@/lib/types";

export default function ArticleCard({ article }: { article: LinkedInArticle }) {
  return (
    <a
      href={article.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="bg-card border-border/50 hover:border-primary/40 hover:glow-accent transition-all duration-300 corner-brackets">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardDescription className="font-heading text-xs">{article.date}</CardDescription>
              <CardTitle className="text-lg group-hover:text-primary transition-colors mt-1">
                {article.title}
              </CardTitle>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 mt-1">
              <Linkedin className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{article.excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
