import type { Metadata } from "next";
import { SkillsMatrix } from "@/components/skills-matrix";

export const metadata: Metadata = {
  title: "Skills",
    description:
      "Technologies and tools used during the AI Engineering internship — AI/ML, languages, frontend, backend, cloud, and databases.",
};

export default function SkillsPage() {
  return <SkillsMatrix />;
}
