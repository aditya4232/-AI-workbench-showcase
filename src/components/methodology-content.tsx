"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Bot,
  BarChart3,
  ScanLine,
  Cog,
  Database,
  ExternalLink,
} from "lucide-react";

const phases = [
  {
    phase: "01",
    title: "Problem Decomposition",
    description:
      "Before writing any code, I decompose the problem into independent subproblems with clear interfaces. This prevents scope creep and enables parallel development.",
    steps: [
      "Define success metrics that are measurable and time-bound",
      "Identify constraints: data availability, latency requirements, cost budgets, scale targets",
      "Break monolith into decoupled subproblems with documented contracts",
      "Document assumptions, failure modes, and rollback strategies",
    ],
    example: {
      project: "Talentradar System",
      detail: "Decomposed into: Resume Parser to JD Analyzer to Scoring Engine (skills 50%, experience 30%, education 20%) to REST API layer. Each component independently testable and replaceable.",
    },
  },
  {
    phase: "02",
    title: "Architecture Design",
    description:
      "I design systems around data flow, not features. Every component has input, transformation, and output — making systems testable, debuggable, and replaceable.",
    steps: [
      "Choose tools based on constraints — not hype or familiarity",
      "Diagram data flow: source, transform, enrich, store, serve",
      "Define interface contracts: schemas, types, error codes, pagination",
      "Plan for failure: fallback models, degraded modes, circuit breakers",
    ],
    example: {
      project: "Intelligent Document System (RAG)",
      detail: "Document Loader to Chunker (500 tokens, 50 overlap) to Embedder (all-MiniLM-L6-v2) to ChromaDB VectorStore to Hybrid Retriever to LLM Generator with source citations.",
    },
  },
  {
    phase: "03",
    title: "Implementation & Iteration",
    description:
      "Build end-to-end prototypes first, then iterate on performance. Premature optimization is the root of all evil — optimize based on profiling data, not intuition.",
    steps: [
      "Build a minimal end-to-end prototype before adding polish",
      "Profile before optimizing: latency, memory, token usage, cost per query",
      "Implement deterministic logging for full reproducibility of every run",
      "Write regression tests that encode edge cases discovered during iteration",
    ],
    example: {
      project: "Invoice Data Extractor",
      detail: "MVP: raw OCR to field extraction. Iterations: adaptive thresholding (+8% acc), deskewing (+4% acc), regex validation (+3% acc), confidence scoring to 90%+ field-level accuracy.",
    },
  },
  {
    phase: "04",
    title: "Production Deployment",
    description:
      "Deployment is not the end — it is the beginning of operations. Build for observability, graceful degradation, and zero-downtime updates from day one.",
    steps: [
      "Containerize for environment parity across dev/staging/production",
      "Add structured logging, metrics, and health check endpoints",
      "Implement graceful degradation: fallback models when primary is unavailable",
      "Document runbooks: how to deploy, rollback, debug, and scale",
    ],
    example: {
      project: "ALD-01 Framework",
      detail: "Dual-platform (npm + PyPI) publication. Pluggable provider architecture supporting 10+ LLM backends. Privacy-first: all execution local, zero data leaves the host.",
    },
  },
];

interface ResourceCategory {
  title: string;
  icon: React.ReactNode;
  resources: { title: string; url: string; author: string; note: string }[];
  projects: string[];
}

const resourceCategories: ResourceCategory[] = [
  {
    title: "Retrieval-Augmented Generation (RAG)",
    icon: <FileText className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        url: "https://arxiv.org/abs/2005.11401",
        author: "Lewis et al., Meta AI (2020)",
        note: "The foundational paper proving that parametric memory (LLM) + non-parametric memory (vector DB) reduces hallucination in knowledge tasks.",
      },
      {
        title: "LangChain RAG Tutorial",
        url: "https://python.langchain.com/docs/tutorials/rag/",
        author: "LangChain Docs",
        note: "Used to orchestrate the ingestion, retrieval, and generation pipeline for Intelligent Document System.",
      },
      {
        title: "Sentence Transformers Documentation",
        url: "https://www.sbert.net/",
        author: "SBERT.net",
        note: "all-MiniLM-L6-v2 embeddings for semantic chunk representation in vector search.",
      },
    ],
    projects: ["Intelligent Document System", "Resume BUDDY"],
  },
  {
    title: "Large Language Models & Agent Frameworks",
    icon: <Bot className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        author: "Vaswani et al., Google Brain (2017)",
        note: "The Transformer architecture underlying every LLM used (Mistral, Llama, GPT). Fundamental to understanding how modern AI works.",
      },
      {
        title: "Ollama Documentation",
        url: "https://github.com/ollama/ollama",
        author: "Ollama",
        note: "Local LLM runtime used across RAG, proposal generation, and ALD-01 agent framework deployments.",
      },
      {
        title: "LangChain Agent Documentation",
        url: "https://python.langchain.com/docs/how_to/agent_executor/",
        author: "LangChain Docs",
        note: "Reference for agent orchestration patterns — tool use, memory management, multi-step reasoning.",
      },
    ],
    projects: ["ALD-01", "AI Proposal Automation"],
  },
  {
    title: "Classical NLP & Machine Learning",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "Scikit-learn Documentation: Feature Extraction",
        url: "https://scikit-learn.org/stable/modules/feature_extraction.html",
        author: "scikit-learn",
        note: "TF-IDF vectorization, text preprocessing, and baseline ML models for ticket classification and resume matching.",
      },
      {
        title: "Efficient Estimation of Word Representations in Vector Space",
        url: "https://arxiv.org/abs/1301.3781",
        author: "Mikolov et al., Google (2013)",
        note: "Word2Vec — foundational to understanding word embeddings used in resume parsing and ticket classification.",
      },
      {
        title: "Long Short-Term Memory",
        url: "https://www.bioinf.jku.at/publications/older/2604.pdf",
        author: "Hochreiter & Schmidhuber (1997)",
        note: "Core LSTM architecture used for sequence modeling in telecom ticket classification.",
      },
    ],
    projects: ["Talentradar System", "AI Support Ticket Classifier"],
  },
  {
    title: "Computer Vision & Document Processing",
    icon: <ScanLine className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "Tesseract OCR Documentation",
        url: "https://tesseract-ocr.github.io/tessdoc/",
        author: "Tesseract",
        note: "OCR engine with custom configurations optimized for Indian invoice layouts including Hindi/English mixed text.",
      },
      {
        title: "OpenCV Documentation: Image Processing",
        url: "https://docs.opencv.org/",
        author: "OpenCV",
        note: "Adaptive thresholding, geometric deskew, bilateral filtering for invoice image preprocessing.",
      },
      {
        title: "Python Tesseract (pytesseract) Guide",
        url: "https://github.com/madmaze/pytesseract",
        author: "madmaze",
        note: "Python wrapper for Tesseract OCR — batch processing and confidence scoring implementation.",
      },
    ],
    projects: ["Invoice Data Extractor"],
  },
  {
    title: "Backend APIs & Deployment",
    icon: <Cog className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "FastAPI Documentation",
        url: "https://fastapi.tiangolo.com/",
        author: "FastAPI",
        note: "High-performance async Python framework used across multiple production backends.",
      },
      {
        title: "Streamlit Documentation",
        url: "https://docs.streamlit.io/",
        author: "Streamlit",
        note: "Rapid prototyping frontend for ML dashboards — AI Data Analyst and Invoice Extractor UIs.",
      },
      {
        title: "Docker Documentation",
        url: "https://docs.docker.com/",
        author: "Docker",
        note: "Containerization for production deployment across DigitalOcean, HuggingFace Spaces, and Vercel.",
      },
    ],
    projects: ["AI Data Analyst", "Invoice Data Extractor", "AI Proposal Automation", "ALD-01"],
  },
  {
    title: "Databases & Vector Stores",
    icon: <Database className="h-5 w-5 text-primary" />,
    resources: [
      {
        title: "ChromaDB Documentation",
        url: "https://docs.trychroma.com/",
        author: "Chroma",
        note: "Primary vector store for similarity search in RAG pipeline. Handles document embedding storage and retrieval.",
      },
      {
        title: "FAISS Documentation",
        url: "https://github.com/facebookresearch/faiss",
        author: "Meta Research",
        note: "Alternative vector store for larger corpora. Used as fallback when ChromaDB hit scale limits.",
      },
      {
        title: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
        author: "PostgreSQL",
        note: "Self-taught SQL and database design during the internship for relational data alongside vector storage.",
      },
    ],
    projects: ["Intelligent Document System", "ALD-01"],
  },
];

const lessons = [
  {
    title: "Production AI is 20% model, 80% infrastructure",
    description:
      "Getting a working model in a notebook takes a day. Making it reliable under load, handling edge cases, monitoring for drift, and debugging in production takes weeks. The faster you accept this, the faster you ship.",
  },
  {
    title: "Deterministic beats probabilistic when it matters",
    description:
      "LLMs hallucinate. The systems that worked best (Talentradar scoring, Invoice OCR) used AI for the fuzzy parts and deterministic rules for the parts where accuracy is non-negotiable — pricing, validation, scoring.",
  },
  {
    title: "Privacy is a competitive advantage",
    description:
      "Every enterprise conversation started with: 'Where does our data go?' The ability to say 'nowhere — everything runs locally' closed deals that cloud-only solutions could not.",
  },
  {
    title: "Depth over breadth in tooling",
    description:
      "I experimented with many frameworks. The projects that shipped fastest used tools I understood well enough to debug without Stack Overflow. Depth beats breadth in execution.",
  },
];

export function MethodologyContent() {
  return (
    <div className="space-y-24">
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-4"
      >
        <p className="text-lg leading-relaxed text-muted-foreground">
          Every system in this showcase was built using the same four-phase
          framework. This methodology emerged from shipping six production AI
          systems during the internship — not from a textbook.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Each phase links to the research papers, documentation, and tutorials
          that informed the work. The resource directory at the bottom provides
          a complete reference organized by domain.
        </p>
      </motion.div>

      {/* 4-Phase Framework */}
      <div className="grid gap-6 md:grid-cols-2">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground font-mono">
              {phase.phase}
            </div>

            <h3 className="mb-4 mt-2 text-lg font-bold sm:text-xl">
              {phase.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>

            <ul className="mb-5 space-y-2.5">
              {phase.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg border-l-2 border-primary bg-secondary/30 p-3 sm:p-4">
              <p className="mb-1 font-mono text-xs text-primary">APPLICATION</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">{phase.example.project}:</span>{" "}
                {phase.example.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tool Selection Framework */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Tool Selection Framework
        </h2>
        <p className="mb-8 max-w-2xl leading-relaxed text-muted-foreground">
          Engineering is about making the right trade-offs. Here is how I chose
          each tool — not by popularity, but by constraint analysis.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold sm:px-6">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold sm:px-6">Choice</th>
                <th className="hidden px-4 py-3 text-left font-semibold sm:table-cell sm:px-6">Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {([
                ["Production REST API with concurrent I/O", "FastAPI", "Native async, OpenAPI auto-docs, Pydantic validation, WebSocket support"],
                ["Internal ML dashboard / prototype", "Streamlit", "Zero-config Python frontend, native Pandas/Plotly, fastest notebook-to-UI path"],
                ["LLM app with tool use", "LangChain", "Provider abstraction, chain composition, agent orchestration, memory management"],
                ["Privacy-sensitive document Q&A", "Ollama + ChromaDB", "Local inference (zero data exfiltration), vector search, air-gapped capable"],
                ["Cross-platform local AI agent", "ALD-01 (custom)", "Local-first, privacy-preserving, pluggable providers across JS and Python"],
                ["High-volume document processing", "Docker + DigitalOcean", "Containerized, cost-effective at medium scale, simple CI/CD via GitHub webhooks"],
              ] as const).map(([scenario, choice, rationale], idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 text-sm text-muted-foreground sm:px-6">{scenario}</td>
                  <td className="px-4 py-3.5 sm:px-6">
                    <code className="rounded bg-blue-500/10 px-2 py-0.5 font-mono text-xs text-blue-600 dark:text-blue-400">
                      {choice}
                    </code>
                  </td>
                  <td className="hidden px-4 py-3.5 text-sm text-muted-foreground sm:table-cell sm:px-6">{rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Research & Resource Directory */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Research &amp; Resource Directory
        </h2>
        <p className="mb-8 max-w-2xl leading-relaxed text-muted-foreground">
          Every paper, documentation page, and tutorial I studied during the
          internship, organized by domain. Each resource is linked to the
          projects that used it.
        </p>

        <div className="space-y-8">
          {resourceCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.resources.map((resource, resIdx) => (
                  <a
                    key={resIdx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-secondary/50 sm:p-4"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {resource.author}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {resource.note}
                      </p>
                    </div>
                    <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="text-xs text-muted-foreground">Used in:</span>
                {category.projects.map((projectName) => {
                  const slug = projectName
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/-+$/, "");
                  return (
                    <Link
                      key={projectName}
                      href={`/projects/${slug}`}
                      className="text-xs text-primary hover:underline"
                    >
                      {projectName}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Learning Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What Six Months Taught Me
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Beyond the technical skills, the internship fundamentally changed how
          I think about building AI systems. Here are the key takeaways:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-muted/30 p-4"
            >
              <h3 className="mb-2 text-sm font-semibold">{lesson.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
