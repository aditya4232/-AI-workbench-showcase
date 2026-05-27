import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ResearchContent } from "@/components/research-content";

export const metadata: Metadata = {
  title: "Research & Architecture",
  description:
    "An engineering perspective on the systems, AI algorithms, and deployment architectures I built, along with references to fundamental research papers.",
};

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
      <SectionHeading
        title="Research & Architecture"
        subtitle="End-to-end system design, algorithm methodology, and literature proofs"
      />
      <ResearchContent />
    </main>
  );
}