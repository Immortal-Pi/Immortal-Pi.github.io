"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Education } from "@/lib/types";

export default function EducationCard({ edu }: { edu: Education }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Card className="bg-card border-border/50 corner-brackets">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={edu.logoSrc}
            alt={edu.school}
            width={48}
            height={48}
            className="rounded-lg border border-border"
          />
          <div className="flex-1">
            <CardTitle className="text-base">{edu.degree}</CardTitle>
            <CardDescription>{edu.school}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>GPA: <span className="text-foreground font-medium">{edu.gpa}</span></span>
          <span className="font-heading text-xs text-primary">
            {edu.startDate} &ndash; {edu.endDate}
          </span>
        </div>
        {edu.coursework && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="w-fit text-primary hover:text-primary/80 px-0"
              onClick={() => setShowCourses(!showCourses)}
            >
              {showCourses ? "Hide" : "Show"} Coursework
              {showCourses
                ? <ChevronUp data-icon="inline-end" />
                : <ChevronDown data-icon="inline-end" />
              }
            </Button>
            {showCourses && (
              <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground pl-1">
                {edu.coursework.map((course) => (
                  <li key={course} className="flex gap-2">
                    <span className="text-primary shrink-0">&#9656;</span>
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
