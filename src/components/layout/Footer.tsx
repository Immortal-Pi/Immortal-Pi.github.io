import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaGithub,
  FaKaggle,
  FaEnvelope,
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-green-500/20 bg-black/80 backdrop-blur-md py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label={link.name}
              >
                {Icon && <Icon className="text-xl" />}
              </a>
            );
          })}
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Amruth Pai Thukaram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
