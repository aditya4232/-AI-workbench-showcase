"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TechTag } from "@/components/tech-tag";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GitHub, ExternalLink } from "@/components/icons";
import type { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const hasMetrics = project.metrics && Object.keys(project.metrics).length > 0;

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <GitHub className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </motion.div>

        {/* Key Metrics */}
        {hasMetrics && (
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {Object.entries(project.metrics!).map(([key, value]) => (
              <div
                key={key}
                className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2"
              >
                <span className="text-xs font-mono text-primary font-semibold uppercase">
                  {key}:
                </span>
                <span className="text-sm font-mono text-foreground">{value}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Problem Statement */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold">Problem Statement</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.problemStatement}
          </p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Implementation Details */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <h2 className="text-xl font-semibold">Implementation</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.implementationDetails}
          </p>
        </motion.section>

        {/* Impact */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.impact}
          </p>
        </motion.section>

        {/* What I Learned */}
        {project.learnings && project.learnings.length > 0 && (
          <motion.section
            className="mt-12 rounded-xl border border-border bg-secondary/30 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.53 }}
          >
            <h2 className="text-lg font-semibold mb-1">What I Learned</h2>
            <p className="text-xs text-muted-foreground mb-4">
              Reflections from building and shipping this system
            </p>
            <ul className="space-y-3">
              {project.learnings.map((lesson, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Research & Resources */}
        {project.researchPapers && project.researchPapers.length > 0 && (
          <motion.section
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.56 }}
          >
            <h2 className="text-xl font-semibold mb-1">
              Research &amp; Resources Used
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Papers, documentation, and references I studied to build this project
            </p>
            <div className="space-y-3">
              {project.researchPapers.map((paper, i) => (
                <a
                  key={i}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-border bg-card p-4 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        {paper.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {paper.note}
                      </p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Links at bottom */}
        <motion.div
          className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">View on GitHub</Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button>Live Demo</Button>
            </a>
          )}
        </motion.div>
      </div>
    </article>
  );
}
