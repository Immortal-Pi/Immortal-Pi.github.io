"use client";

import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/contact/ContactForm";
import GlitchText from "@/components/fx/GlitchText";
import TypedText from "@/components/fx/TypedText";
import { Reveal } from "@/components/fx/Reveal";

export default function ContactPageClient() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1
            className="matrix-veil font-heading text-4xl font-bold tracking-tight text-foreground mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <GlitchText as="span" always>Contact</GlitchText>
          </h1>
          <p
            className="matrix-veil text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in min-h-[3.5rem]"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <TypedText
              text="Want to take the blue pill?"
              delay={500}
              speed={40}
            />
          </p>
        </div>
        <Separator className="mb-12" />
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
