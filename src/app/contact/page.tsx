import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Amruth Pai Thukaram.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-3">
            Contact
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Interested in collaborating or have a question? I&apos;d love to hear from you.
          </p>
        </div>
        <Separator className="mb-12" />
        <ContactForm />
      </div>
    </div>
  );
}
