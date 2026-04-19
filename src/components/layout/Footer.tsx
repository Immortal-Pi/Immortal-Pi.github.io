import { Linkedin, Github, Mail } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { socialLinks } from "@/data/social";
import { Separator } from "@/components/ui/separator";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin: Linkedin,
  FaGithub: Github,
  FaKaggle: FaKaggle,
  FaEnvelope: Mail,
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/95 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors size-10 flex items-center justify-center rounded-lg hover:bg-primary/10"
                aria-label={link.name}
              >
                {Icon && <Icon className="size-5" />}
              </a>
            );
          })}
        </div>
        <Separator className="max-w-xs" />
        <p className="text-muted-foreground text-xs tracking-wide font-heading">
          &copy; {new Date().getFullYear()} Amruth Pai Thukaram
        </p>
      </div>
    </footer>
  );
}
