"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

interface ProjectsGridProps {
  showViewAll?: boolean;
}

export function ProjectsGrid({ showViewAll = false }: ProjectsGridProps) {
  const displayProjects = showViewAll ? projects.slice(0, 6) : projects;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="AI Engineering internship projects and open-source work"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {displayProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
        {showViewAll && projects.length > 6 && (
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects ({projects.length})
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
