import Link from "next/link";
import {
  FaSatellite, FaFileAlt, FaBitcoin, FaDesktop, FaRobot,
  FaDollarSign, FaLaptopCode, FaPlane, FaGithub,
} from "react-icons/fa";
import { Project } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSatellite, FaFileAlt, FaBitcoin, FaDesktop, FaRobot,
  FaDollarSign, FaLaptopCode, FaPlane,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];

  return (
    <div className="bg-white/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 hover:bg-white/10 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="text-green-400 text-3xl">
          {Icon && <Icon />}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-400 transition-colors"
          aria-label={`GitHub repo for ${project.title}`}
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs text-gray-500">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
