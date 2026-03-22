import Image from "next/image";
import { personal } from "@/data/personal";

export default function AboutPreview() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">{personal.about}</p>
            <p className="text-white font-semibold">Current Focus:</p>
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
              {personal.currentFocus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <Image
              src={personal.profileImage}
              alt="Amruth Pai"
              width={300}
              height={300}
              className="rounded-xl border-2 border-green-500/30"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
