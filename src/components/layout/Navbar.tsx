"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-green-400 font-bold text-xl hover:text-green-300 transition-colors">
          Amruth Pai
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume/Amruth_DS_resume.pdf"
            download
            className="flex items-center gap-1.5 text-sm bg-green-500/20 text-green-400 px-3 py-1.5 rounded-md hover:bg-green-500/30 transition-colors border border-green-500/30"
          >
            <FaFileDownload className="text-xs" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-b border-green-500/20 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume/Amruth_DS_resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm bg-green-500/20 text-green-400 px-3 py-1.5 rounded-md border border-green-500/30"
          >
            <FaFileDownload className="text-xs" />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
