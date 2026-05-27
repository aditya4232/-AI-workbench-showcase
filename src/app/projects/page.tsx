import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
    description:
      "AI Engineering internship projects built at ScriptBees — RAG pipelines, multi-agent systems, LLM applications, OCR, and ML systems.",
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
