"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceTimeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Internship"
          subtitle="Six months at ScriptBees Pvt Ltd"
        />

        {experiences.map((exp) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            className="relative pl-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="absolute left-0 top-1 flex items-center justify-center">
              <div className="h-[15px] w-[15px] rounded-full border-2 border-primary bg-background" />
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <span className="whitespace-nowrap text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Education */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          <div className="rounded-lg border border-border bg-card p-6">
            <h4 className="font-semibold">{education.degree}</h4>
            <p className="text-sm text-muted-foreground">
              {education.institution} · {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
