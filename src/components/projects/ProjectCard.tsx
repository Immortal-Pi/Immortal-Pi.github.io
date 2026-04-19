import Link from "next/link";
import {
  Satellite, FileText, Bitcoin, Monitor, Bot,
  DollarSign, LaptopMinimal, Plane, GraduationCap, MapPin,
  Github, ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";
import MagneticCard from "@/components/fx/MagneticCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSatellite: Satellite,
  FaFileAlt: FileText,
  FaBitcoin: Bitcoin,
  FaDesktop: Monitor,
  FaRobot: Bot,
  FaDollarSign: DollarSign,
  FaLaptopCode: LaptopMinimal,
  FaPlane: Plane,
  FaGraduationCap: GraduationCap,
  FaMapPin: MapPin,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];

  return (
    <MagneticCard className="h-full">
    <Card className="group h-full bg-card border-border/50 hover:border-primary/40 transition-colors duration-300 hover:glow-primary flex flex-col corner-brackets">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {Icon && <Icon className="size-5" />}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github className="size-4" />
          </a>
        </div>
        <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-muted-foreground self-center">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-1"
        >
          Details
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardFooter>
    </Card>
    </MagneticCard>
  );
}
