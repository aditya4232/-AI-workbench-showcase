"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          AI Engineering Internship &middot; Jan &ndash; Jun 2026
        </motion.div>

        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI Engineering Showcase
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Six production AI systems built over six months. RAG pipelines,
          multi-agent frameworks, OCR engines, NLP classifiers, and LLM-powered
          applications &mdash; each with detailed case studies, methodology, research
          references, and technical learnings.
        </motion.p>

        <motion.p
          className="mt-2 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <span className="font-medium text-foreground">Stack:</span> Python,
          TypeScript, FastAPI, LangChain, Ollama, ChromaDB, Docker, Next.js
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/projects">
            <Button size="md">View Projects</Button>
          </Link>
          <Link href="/methodology">
            <Button variant="outline" size="md">
              Methodology &amp; Research
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
