import { Experience } from "@/lib/types";

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "ICFAI Foundation, Hyderabad",
  period: "Graduating Aug 2026",
};

export const experiences: Experience[] = [
  {
    role: "AI Engineering Intern",
    company: "Technology Firm",
    period: "Jan 2026 – June 1st Week 2026",
    type: "Internship",
    achievements: [
      "Designed and deployed Talentradar, a production NLP-driven recruitment matching system that reduced candidate screening time by ~60% through intelligent resume parsing and compatibility scoring",
      "Built a Retrieval-Augmented Generation pipeline for compliance document processing that cut research time from hours to under 30 seconds with source-cited, audit-traced answers",
      "Published ALD-01, a privacy-first autonomous AI agent framework supporting 10+ LLM providers, as dual-platform packages on npm and PyPI",
      "Developed an AI Data Analyst — a natural language CSV analysis platform that eliminated the Python/SQL barrier for business users, generating publication-ready EDA dashboards from plain English queries",
      "Engineered an intelligent OCR pipeline extracting 13+ fields from Indian invoices with 90%+ field-level accuracy, reducing manual data entry time by an estimated 80%",
      "Built an end-to-end AI proposal automation system using FastAPI and multi-provider LLM support, reducing proposal drafting from 4-8 hours to under 15 minutes with zero-error cost calculations",
    ],
  },
];
