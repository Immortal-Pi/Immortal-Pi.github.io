import type { Metadata } from "next";
import { Source_Sans_3, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/layout/MatrixRain";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
    <html lang="en" className={cn("h-full", "antialiased", sourceSans.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <MatrixRain />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
