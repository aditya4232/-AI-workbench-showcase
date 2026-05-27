import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  className?: string;
}

const TECH_COLORS: Record<string, string> = {
  // Core AI/ML
  Python: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  NLP: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "scikit-learn": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  LangChain: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Deep Learning": "bg-purple-600/15 text-purple-300 border-purple-600/30",
  LSTM: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  Ollama: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Sentence Transformers": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  ChromaDB: "bg-green-500/15 text-green-400 border-green-500/30",
  FAISS: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  "Vector Embeddings": "bg-teal-500/15 text-teal-400 border-teal-500/30",
  "RAG Pipelines": "bg-purple-500/15 text-purple-400 border-purple-500/30",

  // Languages
  TypeScript: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Java: "bg-red-500/15 text-red-400 border-red-500/30",
  SQL: "bg-blue-400/15 text-blue-300 border-blue-400/30",

  // Frontend
  React: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Next.js": "bg-gray-500/15 text-gray-400 border-gray-500/30",
  "Tailwind CSS": "bg-sky-500/15 text-sky-400 border-sky-500/30",
  Streamlit: "bg-red-500/15 text-red-400 border-red-500/30",

  // Backend
  FastAPI: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Flask: "bg-gray-600/15 text-gray-400 border-gray-600/30",
  "Express.js": "bg-green-600/15 text-green-400 border-green-600/30",
  "Node.js": "bg-green-500/15 text-green-400 border-green-500/30",
  "REST API": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  WebSocket: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",

  // Cloud & DevOps
  "AWS (EC2/S3/Lambda)": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Docker: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Kubernetes: "bg-blue-600/15 text-blue-400 border-blue-600/30",
  "GitHub Actions": "bg-gray-500/15 text-gray-400 border-gray-500/30",
  "Vercel / Firebase": "bg-gray-400/15 text-gray-300 border-gray-400/30",
  GCP: "bg-blue-400/15 text-blue-300 border-blue-400/30",
  "Hugging Face": "bg-yellow-600/15 text-yellow-400 border-yellow-600/30",
  DigitalOcean: "bg-blue-500/15 text-blue-400 border-blue-500/30",

  // Databases
  MongoDB: "bg-green-500/15 text-green-400 border-green-500/30",
  PostgreSQL: "bg-blue-600/15 text-blue-400 border-blue-600/30",
  "SQL Server": "bg-red-600/15 text-red-400 border-red-600/30",

  // Tools
  Pandas: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  Plotly: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  Matplotlib: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "NVIDIA API": "bg-green-500/15 text-green-400 border-green-500/30",
  OpenCV: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Tesseract: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  fpdf2: "bg-red-500/15 text-red-400 border-red-500/30",
  Groq: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "npm": "bg-red-500/15 text-red-400 border-red-500/30",
  PyPI: "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

export function TechTag({ name, className }: TechTagProps) {
  const colorClass = TECH_COLORS[name] || "bg-secondary/50 text-muted-foreground border-border";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-mono transition-all",
        "hover:scale-105 hover:brightness-110",
        colorClass,
        className
      )}
    >
      {name}
    </span>
  );
}
