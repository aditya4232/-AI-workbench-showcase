"use client";

import Link from "next/link";
import { AICard } from "@/components/ui/ai-card";
import { TechTag } from "@/components/tech-tag";
import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasMetrics = project.metrics && Object.keys(project.metrics).length > 0;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <AICard hover delay={index * 0.05} className="h-full">
        <div className="flex h-full flex-col gap-4">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <StatusBadge status={project.status} />
          </div>

          {/* Description */}
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Key Metrics */}
          {hasMetrics && (
            <div className="flex flex-wrap gap-3">
              {Object.entries(project.metrics!).map(([key, value]) => (
                <div
                  key={key}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary/5 px-2.5 py-1 text-xs font-mono"
                >
                  <span className="text-primary font-semibold uppercase">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
            {project.techStack.length > 5 && (
              <TechTag name={`+${project.techStack.length - 5}`} />
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-1">
            {project.githubUrl && (
              <span className="text-xs text-muted-foreground/60 group-hover:text-foreground transition-colors">
                GitHub →
              </span>
            )}
            {project.liveUrl && (
              <span className="text-xs text-muted-foreground/60 group-hover:text-foreground transition-colors">
                Live Demo →
              </span>
            )}
          </div>
        </div>
      </AICard>
    </Link>
  );
}
