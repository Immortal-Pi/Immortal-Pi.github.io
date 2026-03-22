import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="relative z-10 py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Featured Projects
        </h2>
        <ProjectGrid projects={featured} />
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-block bg-green-500/20 text-green-400 px-6 py-3 rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30 font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
