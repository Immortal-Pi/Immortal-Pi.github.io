import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaGithub,
  FaKaggle,
  FaEnvelope,
};

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        {personal.name}
      </h1>
      <p className="text-xl md:text-2xl text-green-400 font-medium mb-8">
        {personal.title}
      </p>
      <div className="flex gap-5 mb-8">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors text-2xl"
              aria-label={link.name}
            >
              {Icon && <Icon />}
            </a>
          );
        })}
      </div>
      <a
        href="/resume/Amruth_DS_resume.pdf"
        download
        className="bg-green-500/20 text-green-400 px-6 py-3 rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30 font-medium"
      >
        Download Resume
      </a>
    </section>
  );
}
