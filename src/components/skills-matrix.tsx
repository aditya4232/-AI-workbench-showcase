"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { AICard } from "@/components/ui/ai-card";

const proficiencyLabels = [
  { min: 90, label: "Expert", color: "bg-emerald-500" },
  { min: 75, label: "Advanced", color: "bg-blue-500" },
  { min: 60, label: "Proficient", color: "bg-amber-500" },
  { min: 0, label: "Competent", color: "bg-muted-foreground" },
];

function getProficiency(level: number) {
  return proficiencyLabels.find((p) => level >= p.min) || proficiencyLabels[proficiencyLabels.length - 1];
}

export function SkillsMatrix() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies, tools, and frameworks I work with"
        />

        {/* Quick skill summary row */}
        <div className="mb-12 flex flex-wrap gap-3">
          {skillCategories.map((cat) => {
            const avgLevel = Math.round(
              cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length
            );
            const prof = getProficiency(avgLevel);
            return (
              <div
                key={cat.category}
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-3 py-1.5 text-xs font-mono"
              >
                <span className={`h-2 w-2 rounded-full ${prof.color}`} />
                <span className="text-muted-foreground">{cat.category}</span>
                <span className="text-foreground/80 font-semibold">{prof.label}</span>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <AICard key={category.category} delay={idx * 0.05}>
              <div className="p-6">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const prof = getProficiency(skill.level);
                    return (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-mono">
                            <span className={`h-1.5 w-1.5 rounded-full ${prof.color}`} />
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "text-[10px] font-semibold uppercase tracking-wider",
                                prof.color === "bg-emerald-500" && "text-emerald-500",
                                prof.color === "bg-blue-500" && "text-blue-500",
                                prof.color === "bg-amber-500" && "text-amber-500",
                              )}
                            >
                              {prof.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-secondary">
                          <motion.div
                            className={cn("h-full rounded-full", prof.color)}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AICard>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}
