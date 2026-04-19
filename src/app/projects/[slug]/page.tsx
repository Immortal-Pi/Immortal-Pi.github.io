import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Satellite, FileText, Bitcoin, Monitor, Bot,
  DollarSign, LaptopMinimal, Plane, GraduationCap, MapPin,
  Github, ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const Icon = iconMap[project.icon];

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground" nativeButton={false} render={<Link href="/projects" />}>
            <ArrowLeft data-icon="inline-start" />
            Back to Projects
        </Button>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {Icon && <Icon className="size-6" />}
              </div>
              <div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="font-heading text-xs">{project.dates}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>

            <Separator />

            <div>
              <h3 className="font-heading text-sm font-bold tracking-wide uppercase text-primary mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            <Button className="w-fit" nativeButton={false} render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
                <Github data-icon="inline-start" />
                View on GitHub
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
