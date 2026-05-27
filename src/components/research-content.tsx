"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "@/components/icons/external-link";

export function ResearchContent() {
  return (
    <div className="space-y-16">
      {/* 1. System Architecture & Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 border-b border-border pb-2">1. End-to-End System Architecture</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Transitioning from Jupyter notebooks to production systems requires strict separation of concerns. During my internship, I adopted a modular architecture for AI applications to ensure scalability, fault tolerance, and clear team boundaries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h4 className="text-lg font-semibold mb-3">Frontend Layer</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Focuses purely on state management, asynchronous data fetching, and user interaction.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><strong>Next.js (App Router):</strong> Leveraged server components for static rendering and secure environment variable isolation.</li>
              <li><strong>Streamlit:</strong> Used for rapid internal tooling and prototyping ML dashboards directly from Python environments.</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h4 className="text-lg font-semibold mb-3">Backend & API Layer</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Decouples compute-heavy AI inference from the client interface using RESTful standards.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><strong>FastAPI & Flask:</strong> High-performance Python routing. Used FastAPI specifically for concurrent I/O operations routing to LLM endpoints.</li>
              <li><strong>State Management:</strong> In-memory session stores and ChromaDB/FAISS vector databases.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 2. Algorithms and Methodology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-4 border-b border-border pb-2">2. AI Algorithms & Methodology</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I engineered solutions spanning classical Natural Language Processing to modern Generative AI. The focus was consistently on deterministic outputs, accuracy over latency, and cost-effective context windows.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">RAG (Retrieval-Augmented Generation)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Implemented semantic search pipelines for compliance documents. By chunking text into 500-token vectors with a 50-token semantic overlap using SentenceTransformers (`all-MiniLM-L6-v2`), I prevented context-loss at boundaries. ChromaDB served as the primary nearest-neighbor search layer.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Sequence Modeling (LSTM & Word Embeddings)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For telecom ticket classification, simple Bag-of-Words lacked contextual sequence memory. We implemented <strong>Long Short-Term Memory (LSTM)</strong> networks which preserve the directionality of text sequences—critical for parsing customer sentiment and predicting resolution priority.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Computer Vision & OCR</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deployed a pipeline using OpenCV for geometric deskewing, bilateral filtering, and adaptive thresholding prior to passing image blobs into Tesseract OCR. This preprocessing reduced false-positives by 14% on noisy, scanned Indian GST invoices.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. Deployment & DevOps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4 border-b border-border pb-2">3. Deployment Architecture</h3>
        <p className="text-muted-foreground leading-relaxed">
          Production readyness dictated containerized applications to ensure environment parity. Models and vector indices were packaged dynamically or mounted via block storage to keep image sizes low.
        </p>
        <ul className="list-disc pl-5 mt-4 text-sm text-muted-foreground space-y-2">
          <li><strong>DigitalOcean App Platform:</strong> Deployed the Invoice OCR and Python backend logic using Dockerfiles and auto-deployed via GitHub webhooks.</li>
          <li><strong>Hugging Face Spaces:</strong> Hosted Gradio/Streamlit based LLM applications to take advantage of managed GPU compute infrastructure dynamically.</li>
          <li><strong>Vercel & Next.js:</strong> This portfolio and related frontends leverage Vercel's Edge Network for global caching and high-speed asset delivery using SSG (Static Site Generation).</li>
        </ul>
      </motion.section>

      {/* 4. Literature References & Proof of Concepts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-4 border-b border-border pb-2">4. Fundamental Research & Proofs of Concept</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The models and techniques deployed relied heavily on established peer-reviewed literature. These core papers served as the foundation for the pipelines I designed:
        </p>

        <div className="grid grid-cols-1 gap-4">
          
          <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer" className="block p-5 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors group">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</h4>
                <p className="text-xs text-muted-foreground mt-1">Lewis et al. (2020) · Meta AI</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              The foundational proof-of-concept for the Intelligent Document System. Proved that fine-tuning generation models with a non-parametric memory (vector database) drastically eliminates hallucination.
            </p>
          </a>

          <a href="https://dl.acm.org/doi/10.1162/neco.1997.9.8.1735" target="_blank" rel="noopener noreferrer" className="block p-5 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors group">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">Long Short-Term Memory</h4>
                <p className="text-xs text-muted-foreground mt-1">Hochreiter & Schmidhuber (1997)</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Core mathematical proof defining the recurrent network gates utilized in the AI Telecom Customer Support Priority pipeline to retain long-sequence ticket text contexts.
            </p>
          </a>

          <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer" className="block p-5 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors group">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">Attention Is All You Need</h4>
                <p className="text-xs text-muted-foreground mt-1">Vaswani et al. (2017) · Google Brain</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              The underlying architecture validating the multi-head attention blocks utilized via Ollama, Langchain, and Hugging Face inference deployments (such as Mistral/Llama local models).
            </p>
          </a>

        </div>
      </motion.section>
    </div>
  );
}