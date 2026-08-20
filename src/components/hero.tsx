"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto w-full max-w-4xl px-4 py-28 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          AI Engineering Internship &middot; Jan &ndash; Jun 2026
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          AI Engineering Showcase
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Six production AI systems built over six months. RAG pipelines,
          multi-agent frameworks, OCR engines, NLP classifiers, and LLM-powered
          applications &mdash; each with detailed case studies, methodology, research
          references, and technical learnings.
        </motion.p>

        <motion.p
          className="mt-3 text-sm text-muted-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="font-semibold text-foreground">Stack:</span> Python,
          TypeScript, FastAPI, LangChain, Ollama, ChromaDB, Docker, Next.js
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link href="/projects">
            <Button size="md" className="shadow-sm hover:shadow-md transition-shadow">
              View Projects
            </Button>
          </Link>
          <Link href="/methodology">
            <Button variant="outline" size="md" className="hover:bg-secondary/80 transition-colors">
              Methodology &amp; Research
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
