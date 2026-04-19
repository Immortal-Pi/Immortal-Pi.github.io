import type { Metadata } from "next";
import { Space_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/layout/MatrixRain";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Amruth Pai Thukaram | AI & ML Engineer",
    template: "%s | Amruth Pai Thukaram",
  },
  description:
    "Portfolio of Amruth Pai Thukaram — AI Engineer, ML Engineer, and graduate student at UT Dallas specializing in machine learning, deep learning, and data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", sora.variable, spaceMono.variable)}>
      <body className="min-h-full flex flex-col relative">
        <MatrixRain />
        <div className="scanlines" aria-hidden />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
