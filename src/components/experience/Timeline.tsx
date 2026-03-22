import { experiences } from "@/data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((exp, i) => (
        <TimelineItem key={i} exp={exp} />
      ))}
    </div>
  );
}
