import { Experience } from "@/lib/types";

export default function TimelineItem({ exp }: { exp: Experience }) {
  return (
    <div className="relative pl-8 pb-10 border-l border-green-500/30 last:border-l-0 last:pb-0">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-black" />
      <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
          <span className="text-green-400 text-sm">
            {exp.startDate} &ndash; {exp.endDate}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          {exp.company}
          {exp.location && `, ${exp.location}`}
        </p>
        <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
          {exp.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
