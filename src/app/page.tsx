import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { SkillsMatrix } from "@/components/skills-matrix";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid showViewAll />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            title="Engineering Methodology"
            subtitle="How I approach AI system design"
          />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            A structured 4-phase framework: Problem Decomposition → Architecture Design →
            Implementation & Iteration → Production Deployment. Each phase includes
            decision frameworks, tool selection rationale, and real project examples.
          </p>
          <div className="mt-8">
            <Link href="/methodology">
              <Button variant="outline" size="lg">
                View Methodology →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <SkillsMatrix />
      <ExperienceTimeline />
    </>
  );
}
