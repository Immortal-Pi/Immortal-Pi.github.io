"use client";

import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import GlitchText from "@/components/fx/GlitchText";
import TypedText from "@/components/fx/TypedText";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin: Linkedin,
  FaGithub: Github,
  FaKaggle: FaKaggle,
  FaEnvelope: Mail,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="font-heading text-xs tracking-[0.3em] uppercase text-matrix mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="text-matrix">&gt;</span> AI &amp; Machine Learning Engineer
        </p>

        <h1
          className="matrix-veil font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <GlitchText as="span" className="text-foreground" always>Amruth</GlitchText>
          <br />
          <GlitchText as="span" className="text-gradient" always>Pai Thukaram</GlitchText>
        </h1>

        <p
          className="matrix-veil text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-in min-h-[3.5rem]"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <TypedText
            text="Building intelligent systems at the intersection of deep learning, data engineering, and production ML."
            delay={800}
            speed={22}
          />
        </p>

        <div
          className="matrix-veil flex items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 size-11 flex items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5"
                aria-label={link.name}
              >
                {Icon && <Icon className="size-4" />}
              </a>
            );
          })}
        </div>

        <div
          className="matrix-veil flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <Button size="lg" className="animate-pulse-neon" nativeButton={false} render={<a href="/resume/Amruth_DS_resume.pdf" download />}>
              Download Resume
          </Button>
          <Button variant="outline" size="lg" nativeButton={false} render={<a href="#about" />}>
              Explore
              <ArrowDown data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
        <div className="size-8 rounded-full border border-border flex items-center justify-center animate-bounce">
          <ArrowDown className="size-3 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
