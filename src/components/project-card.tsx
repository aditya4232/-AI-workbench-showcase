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
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <AICard hover delay={index * 0.05} className="h-full !p-0">
        <div className="flex h-full flex-col gap-4">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200 leading-tight">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground/80 line-clamp-1">
                {project.subtitle}
              </p>
            </div>
            <div className="flex-shrink-0">
              <StatusBadge status={project.status} />
            </div>
          </div>

          {/* Description */}
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
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
          <div className="flex items-center gap-4 pt-2 border-t border-border/50">
            {project.githubUrl && (
              <span className="text-xs font-medium text-muted-foreground/70 group-hover:text-primary transition-colors duration-200 flex items-center gap-1">
                <span>GitHub</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
            {project.liveUrl && (
              <span className="text-xs font-medium text-muted-foreground/70 group-hover:text-primary transition-colors duration-200 flex items-center gap-1">
                <span>Live Demo</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </AICard>
    </Link>
  );
}
