import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { MethodologyContent } from "@/components/methodology-content";

export const metadata: Metadata = {
  title: "Engineering Methodology",
  description:
    "A structured approach to AI system design and delivery — from problem decomposition to production deployment.",
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Engineering Methodology"
          subtitle="How I approach AI system design and delivery"
        />
        <MethodologyContent />
      </div>
    </main>
  );
}
