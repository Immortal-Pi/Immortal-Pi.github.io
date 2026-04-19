"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import GlitchText from "@/components/fx/GlitchText";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 64) setHidden(false);
      else if (delta > 4) setHidden(true);
      else if (delta < -4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden && !reduced ? -80 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/50 supports-[backdrop-filter]:bg-background/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <GlitchText always>
            Immortal Pi<span className="text-primary">_</span>
          </GlitchText>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Separator orientation="vertical" className="mx-2 h-5" />
          <Button variant="outline" size="sm" nativeButton={false} render={<a href="/resume/Amruth_DS_resume.pdf" download />}>
              <Download data-icon="inline-start" />
              Resume
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Separator className="my-2" />
          <Button variant="outline" size="sm" className="w-fit" nativeButton={false} render={<a href="/resume/Amruth_DS_resume.pdf" download />}>
              <Download data-icon="inline-start" />
              Resume
          </Button>
        </div>
      )}
    </motion.nav>
  );
}
