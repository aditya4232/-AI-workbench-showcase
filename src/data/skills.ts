import { Skill } from "@/lib/types";

export const skillCategories: Skill[] = [
  {
    category: "AI / ML Engineering",
    skills: [
      { name: "LangChain / LangGraph", level: 90 },
      { name: "RAG Pipelines", level: 85 },
      { name: "LLM Fine-tuning (PEFT/LoRA)", level: 80 },
      { name: "Multi-Agent Systems (CrewAI)", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Ollama / Local LLMs", level: 90 },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 75 },
      { name: "C++", level: 60 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Streamlit", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Express.js", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "WebSocket", level: 70 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2/S3/Lambda)", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
      { name: "GitHub Actions", level: 80 },
      { name: "Vercel / Firebase", level: 85 },
      { name: "GCP", level: 60 },
    ],
  },
  {
    category: "Databases & Vectors",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQL Server", level: 70 },
      { name: "ChromaDB", level: 85 },
      { name: "FAISS", level: 80 },
    ],
  },
];
