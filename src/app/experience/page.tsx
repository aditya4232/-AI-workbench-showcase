import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
    description:
      "AI Engineering internship — six months of building AI systems, plus education background.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
