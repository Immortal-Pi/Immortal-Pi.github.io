"use client";

import Image from "next/image";
import { useState } from "react";
import { Education } from "@/lib/types";

export default function EducationCard({ edu }: { edu: Education }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={edu.logoSrc}
          alt={edu.school}
          width={60}
          height={60}
          className="rounded-lg"
        />
        <div>
          <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
          <p className="text-gray-400 text-sm italic">{edu.school}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
        <span>GPA: {edu.gpa}</span>
        <span>{edu.startDate} &ndash; {edu.endDate}</span>
      </div>
      {edu.coursework && (
        <>
          <button
            onClick={() => setShowCourses(!showCourses)}
            className="text-sm text-green-400 hover:text-green-300 underline decoration-dashed transition-colors mt-2"
          >
            {showCourses ? "Hide" : "Show"} Coursework
          </button>
          {showCourses && (
            <ul className="mt-3 space-y-1 text-gray-300 text-sm list-disc list-inside">
              {edu.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
