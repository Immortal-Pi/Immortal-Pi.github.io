import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaSatellite, FaFileAlt, FaBitcoin, FaDesktop, FaRobot,
  FaDollarSign, FaLaptopCode, FaPlane, FaGithub, FaArrowLeft,
} from "react-icons/fa";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSatellite, FaFileAlt, FaBitcoin, FaDesktop, FaRobot,
  FaDollarSign, FaLaptopCode, FaPlane,
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
  return {
    title: project.title,
    description: project.shortDescription,
  };
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
    <div className="relative z-10 pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm mb-8 transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>

        <div className="bg-white/5 border border-green-500/20 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-green-400 text-4xl">
              {Icon && <Icon />}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h1>
              <p className="text-gray-400 text-sm italic">{project.dates}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2.5 rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30 font-medium"
          >
            <FaGithub />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
