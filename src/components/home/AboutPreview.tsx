import Image from "next/image";
import { personal } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/fx/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />

        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {personal.about}
            </p>

            <Card className="bg-card corner-brackets">
              <CardContent className="pt-6">
                <h3 className="font-heading text-sm font-bold tracking-wide uppercase text-primary mb-4">
                  Current Focus
                </h3>
                <ul className="flex flex-col gap-3">
                  {personal.currentFocus.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={personal.profileImage}
              alt="Amruth Pai"
              width={300}
              height={380}
              className="relative rounded-xl border border-border object-cover w-full"
              priority
            />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
