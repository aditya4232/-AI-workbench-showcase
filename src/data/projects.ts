import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "talentradar-system",
    title: "Talentradar System",
    subtitle: "AI-Powered Recruitment Matching Engine (Production)",
    description:
      "Designed and deployed an NLP-driven candidate-job matching system for production use at ScriptBees, reducing manual screening time by approximately 60% through intelligent resume parsing and compatibility scoring.",
    longDescription:
      "Led the development of a production-grade recruitment matching system that automatically analyzes job descriptions and candidate profiles using NLP techniques. The system computes compatibility scores across skills, experience, and education dimensions, enabling recruiters to shortlist candidates from hundreds of applications in minutes rather than hours. Built as a core product offering for ScriptBees, the system processes batch uploads and integrates with existing ATS platforms via a REST API.",
    techStack: ["Python", "NLP", "Pandas", "Flask", "scikit-learn", "REST API"],
    status: "deployed",
    githubUrl: "https://github.com/aditya4232/Talentradar-System",
    features: [
      "Production deployment at ScriptBees — processes live candidate-job matching workloads",
      "NLP-based job description and resume parsing with TF-IDF vectorization and semantic similarity",
      "Multi-dimensional compatibility scoring (skills match, experience relevance, education alignment)",
      "Skill extraction and gap analysis for targeted recruitment outreach",
      "Batch processing pipeline supporting bulk candidate evaluation (100+ profiles per run)",
      "REST API designed for ATS platform integration",
    ],
    problemStatement:
      "Staffing firms manually review hundreds of resumes per position — a process that is slow, inconsistent, and systematically overlooks qualified candidates whose resumes use different terminology than the job description.",
    implementationDetails:
      "Built the NLP pipeline using TF-IDF vectorization and cosine similarity to compare job descriptions with candidate profiles across multiple dimensions. Developed a weighted scoring algorithm that combines skills match (50%), experience relevance (30%), and education alignment (20%) into a single compatibility score. The Flask-based REST API handles batch processing, with Pandas powering data transformation and scikit-learn providing the ML infrastructure. Optimized the pipeline to process 100+ candidate profiles against a single job description in under 30 seconds.",
    impact:
      "Reduced average candidate screening time by approximately 60%, enabling recruiters to process 3x more positions simultaneously. The standardized scoring eliminated subjective bias in initial screening, and the gap analysis feature gave recruiters actionable insights for targeted outreach to near-match candidates.",
    learnings: [
      "Production ML systems require more than just model accuracy — handling edge cases in resume formats, encoding schema mismatches, and graceful failure under load were the real challenges",
      "TF-IDF with cosine similarity is surprisingly effective for text matching when combined with domain-specific feature engineering (skill synonyms, experience normalization)",
      "Building a weighted scoring system requires constant calibration with domain experts — the 50/30/20 split came from interviewing 5 recruiters",
    ],
    researchPapers: [
      {
        title: "Scikit-learn Documentation: Feature Extraction",
        url: "https://scikit-learn.org/stable/modules/feature_extraction.html",
        note: "Used for TF-IDF vectorization and text preprocessing pipeline design",
      },
      {
        title: "Pandas Documentation: Data Transformation",
        url: "https://pandas.pydata.org/docs/",
        note: "Batch processing and data pipeline optimization for 100+ profiles",
      },
    ],
    metrics: {
      throughput: "100+ profiles/run",
      reduction: "60%",
    },
    order: 1,
  },
  {
    slug: "intelligent-document-system",
    title: "Intelligent Document System",
    subtitle: "RAG-Based Compliance Document Processing",
    description:
      "Built a Retrieval-Augmented Generation pipeline that reduced compliance document research time from hours to seconds, enabling natural language queries over thousands of pages with source-cited answers.",
    longDescription:
      "Designed and implemented a full RAG (Retrieval-Augmented Generation) system for compliance document processing. The system ingests documents through a chunking pipeline, generates vector embeddings using transformer-based models, and enables natural language querying over the entire corpus. Each answer includes citations to source documents, ensuring traceability for compliance audits. Built with LangChain for orchestration, ChromaDB/FAISS for vector storage, and Ollama for local LLM inference — keeping sensitive compliance data entirely on-premises.",
    techStack: ["Python", "LangChain", "ChromaDB", "FAISS", "Ollama", "FastAPI", "Sentence Transformers"],
    status: "deployed",
    liveUrl: "https://aditya4232.github.io/Intelligent-document-system/",
    githubUrl: "https://github.com/aditya4232/Intelligent-document-system",
    features: [
      "End-to-end RAG pipeline: document ingestion → chunking → embedding → retrieval → generation",
      "Natural language querying over multi-document compliance repositories",
      "Source-cited answers with document-level traceability for audit compliance",
      "Support for multiple document formats (PDF, DOCX, TXT) with format-aware chunking",
      "Privacy-preserving architecture — all processing runs locally via Ollama, no data sent to external APIs",
      "Configurable chunk size and overlap for optimization across document types",
    ],
    problemStatement:
      "Compliance teams at regulated organizations regularly search thousands of pages of documentation to answer specific questions. Traditional keyword search fails on contextual queries and cannot synthesize answers across multiple documents, forcing hours of manual reading per research task.",
    implementationDetails:
      "Built the ingestion pipeline with LangChain's document loaders and text splitters, using Sentence Transformers (all-MiniLM-L6-v2) for embedding generation. ChromaDB serves as the primary vector store with FAISS as a fallback for larger corpora. The retrieval layer implements hybrid search (semantic + keyword) with configurable top-k and similarity thresholds. LangChain orchestrates the QA chain, and Ollama provides local LLM inference (Mistral/Llama) for answer generation. FastAPI wraps the system as a service with endpoints for document ingestion and querying. Optimized chunk size (500 tokens with 50-token overlap) after benchmarking against 50+ compliance documents.",
    impact:
      "Reduced compliance document research time from 2-3 hours per query to under 30 seconds. The source-citation feature passed internal audit review by providing fully traceable answers. The privacy-first architecture using local LLMs enabled deployment in organizations with strict data residency requirements where cloud-based alternatives were prohibited.",
    learnings: [
      "Chunk size and overlap are the most impactful hyperparameters in a RAG system — 500/50 was optimal after benchmarking against 50+ documents",
      "Hybrid search (semantic + keyword) significantly outperforms pure vector search for compliance queries where exact terms matter (regulation numbers, dates)",
      "Local LLMs (Ollama/Mistral) are production-viable for domain-specific Q&A when combined with good retrieval — latency was ~3s per query vs <1s for cloud, but zero data exfiltration",
    ],
    researchPapers: [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)",
        url: "https://arxiv.org/abs/2005.11401",
        note: "The foundational RAG paper that proved combining parametric memory (LLM) with non-parametric memory (vector DB) reduces hallucination",
      },
      {
        title: "LangChain Documentation: RAG",
        url: "https://python.langchain.com/docs/tutorials/rag/",
        note: "Used for orchestrating the ingestion → retrieval → generation pipeline",
      },
      {
        title: "ChromaDB Documentation",
        url: "https://docs.trychroma.com/",
        note: "Primary vector store for similarity search and document embeddings",
      },
    ],
    order: 2,
  },
  {
    slug: "ai-data-analyst",
    title: "AI Data Analyst",
    subtitle: "Natural Language CSV Analysis Platform",
    description:
      "Developed a Streamlit application that lets non-technical users analyze CSV files through natural language conversations, generating publication-ready EDA dashboards with zero code.",
    longDescription:
      "Built a research-grade data analysis platform that eliminates the Python/SQL barrier for business users. Users upload a CSV file and ask questions in plain English — the system generates LLM-powered analysis plans, executes them in a guarded Python sandbox, and renders interactive visualizations. Supports 7+ chart types (histograms, box plots, correlation heatmaps, grouped bar charts, pie charts, scatter plots, skills analysis) and includes a fallback deterministic analysis mode when no API key is configured, ensuring functionality in air-gapped environments.",
    techStack: ["Python", "Streamlit", "Pandas", "Plotly", "Matplotlib", "NVIDIA API", "LangChain"],
    status: "deployed",
    liveUrl: "https://ai-data-analyst-proj.streamlit.app/",
    githubUrl: "https://github.com/aditya4232/AI-DATA-ANALYST-PROJ",
    features: [
      "Natural language CSV querying — users ask questions in plain English, get visual answers",
      "Auto-generated EDA dashboards with 7+ visualization types rendered in real time",
      "Interactive visual explorer with filtering, zoom, fullscreen, and HTML export",
      "Guarded Python code execution sandbox for generated analysis scripts",
      "Dual-mode architecture: LLM-powered analysis (NVIDIA API) with automatic fallback to deterministic analysis",
      "Bundled sample dataset with onboarding walkthrough for first-time users",
    ],
    problemStatement:
      "Business analysts and non-technical stakeholders who need to extract insights from CSV data are blocked by the learning curve of Python, SQL, and visualization libraries. Existing tools are either too limited (Excel) or require programming skills (Jupyter).",
    implementationDetails:
      "Architected the application with Streamlit as the frontend layer and Pandas for all data manipulation. The LLM integration uses NVIDIA's API (with OpenAI-compatible fallback) to generate structured JSON analysis plans describing what to compute and how to visualize it. These plans are executed in a restricted Python sandbox with comprehensive error recovery. Built the deterministic fallback mode as a rule-based analysis engine that computes statistical summaries, distributions, and correlations without any external API calls — ensuring the app remains functional even without API keys. The sandbox execution environment includes resource limits (memory, execution time) and output validation to prevent malformed visualizations.",
    impact:
      "Enabled business users without any programming background to perform sophisticated data analysis and generate publication-ready visualizations. The dual-mode architecture ensured zero downtime — users experienced uninterrupted service even during API rate-limiting events. The bundled onboarding dataset reduced time-to-first-insight from 30+ minutes (learning Python) to under 2 minutes.",
    learnings: [
      "A deterministic fallback mode is essential for LLM-powered applications — when the API is down, users still get value rather than an error message",
      "Structured JSON output from LLMs (NVIDIA API's JSON mode) enables reliable programmatic consumption of generated analysis plans",
      "Python sandboxing for untrusted code execution requires careful resource limits — memory caps and execution timeouts prevented runaway processes during testing",
    ],
    researchPapers: [
      {
        title: "Streamlit Documentation: App Development",
        url: "https://docs.streamlit.io/",
        note: "Used as the frontend framework for rapid prototyping of ML dashboards",
      },
      {
        title: "Plotly Documentation: Interactive Visualization",
        url: "https://plotly.com/python/",
        note: "Implemented 7+ chart types for publication-ready EDA dashboards",
      },
    ],
    order: 3,
  },
  {
    slug: "invoice-data-extractor",
    title: "Invoice Data Extractor",
    subtitle: "AI-Powered OCR for Multi-Format Indian Invoices",
    description:
      "Engineered an intelligent OCR pipeline extracting 13+ fields from Indian invoices with 90%+ field-level accuracy, reducing manual data entry time by an estimated 80%.",
    longDescription:
      "Designed and deployed an invoice processing system purpose-built for the diversity of Indian invoice formats. The pipeline combines OpenCV-based image preprocessing (adaptive thresholding, deskewing, noise reduction) with Tesseract OCR and regex-based post-processing to extract 13+ structured fields including GSTIN, invoice number, date, line items, and tax amounts. Every extracted field carries a confidence score, enabling accounting teams to focus manual review only on low-confidence extractions. Deployed on DigitalOcean for production availability.",
    techStack: ["Python", "OpenCV", "Tesseract OCR", "Streamlit", "Pandas", "DigitalOcean"],
    status: "deployed",
    liveUrl: "https://invoice-extract-8ysxq.ondigitalocean.app/",
    githubUrl: "https://github.com/aditya4232/-Invoice-Data-Extractor-Application",
    features: [
      "Extracts 13+ fields: GSTIN, invoice number, date, seller/buyer details, line items, subtotal, tax, total",
      "Confidence scoring per field — accounting teams review only sub-80% confidence extractions",
      "OpenCV preprocessing pipeline: adaptive thresholding, geometric deskew, noise reduction, contrast adjustment",
      "Tested against 5+ Indian invoice formats (GST, non-GST, tax invoices, bill of supply, credit notes)",
      "Batch processing with CSV/Excel export for accounting workflow integration",
      "Deployed on DigitalOcean with production uptime monitoring",
    ],
    problemStatement:
      "Indian businesses process thousands of invoices monthly across diverse formats (GST, non-GST, tax invoices). Manual data entry is error-prone (estimated 10-15% error rate) and time-consuming. Off-the-shelf OCR solutions trained on Western invoice formats achieve poor accuracy on Indian invoice layouts.",
    implementationDetails:
      "Built the image preprocessing pipeline in OpenCV with adaptive thresholding (handles varying lighting/document quality), geometric deskew (corrects scanned angles up to 15°), and bilateral filtering (reduces noise while preserving edges). Tesseract OCR runs with custom configurations optimized for Indian invoice layouts including Hindi/English mixed text support. The post-processing layer uses regex patterns tuned for Indian GST invoice formats and validates extracted values against expected formats (e.g., 15-character GSTIN validation checksum). Confidence scoring combines OCR confidence, regex match quality, and field-level validation into a single score. Deployed as a Streamlit application on DigitalOcean with Nginx reverse proxy and automated SSL.",
    impact:
      "Reduced per-invoice data entry time from approximately 8 minutes (manual) to under 90 seconds (AI-assisted review), representing an estimated 80% reduction in processing time. The confidence scoring system meant accounting teams only needed to manually verify the ~15% of fields scoring below 80% confidence, optimizing the human-in-the-loop workflow. Successfully tested against 50+ sample invoices across 5 format types.",
    learnings: [
      "Image preprocessing is more impactful than OCR engine tuning — adaptive thresholding alone improved accuracy by ~8% compared to raw Tesseract",
      "Indian invoice formats vary significantly enough that regex patterns need format-specific variants (GST vs non-GST vs bill of supply)",
      "Confidence scoring per field (combining OCR confidence + regex match + format validation) is more useful than document-level accuracy for human-in-the-loop workflows",
    ],
    researchPapers: [
      {
        title: "Tesseract OCR Documentation",
        url: "https://tesseract-ocr.github.io/tessdoc/",
        note: "Core OCR engine with custom configurations optimized for Indian invoice layouts",
      },
      {
        title: "OpenCV Documentation: Image Processing",
        url: "https://docs.opencv.org/",
        note: "Preprocessing pipeline: adaptive thresholding, deskewing, bilateral filtering",
      },
    ],
    order: 4,
  },
  {
    slug: "ai-proposal-automation",
    title: "AI Consulting Proposal Automation",
    subtitle: "Multi-Provider LLM Proposal Generator with Deterministic Pricing",
    description:
      "Built an end-to-end proposal generation system that creates professional PDF consulting proposals via AI with zero-error deterministic cost calculations, reducing drafting time from hours to minutes.",
    longDescription:
      "Developed a full-stack proposal automation system that addresses the痛点 of consulting firms spending hours on proposal drafting. The system accepts client requirements, generates tailored proposal content using LLMs (supporting both local Ollama and cloud Groq providers), computes costs using a deterministic rules engine, and produces a formatted PDF — all in a single workflow. Built with FastAPI backend, LangChain for LLM provider abstraction, fpdf2 for PDF generation, and deployed on Hugging Face Spaces for client access.",
    techStack: ["Python", "FastAPI", "Ollama", "Groq", "fpdf2", "LangChain", "Hugging Face"],
    status: "deployed",
    liveUrl: "https://huggingface.co/spaces/Aditya4232/ai-proposal-generator",
    githubUrl: "https://github.com/aditya4232/AI-Based-Consulting-Proposal-Automation-System",
    features: [
      "AI-generated proposal content tailored to each client's requirements and industry",
      "Deterministic cost calculation engine with configurable hourly rates, material costs, and markup rules",
      "Professional PDF output with company branding, headers, and formatted sections",
      "Multi-provider LLM support: Ollama for local/private inference, Groq for cloud-based generation",
      "Template-based structure with AI-populated sections (executive summary, methodology, timeline, pricing)",
      "Deployed on Hugging Face Spaces with persistent storage for proposal history",
    ],
    problemStatement:
      "Consulting firms, particularly SMEs, spend 4-8 hours drafting each proposal. The process requires tailoring content per client, accurate cost estimation across multiple line items, and professional formatting — all of which are error-prone and time-consuming when done manually.",
    implementationDetails:
      "Architected the system with FastAPI handling request routing, proposal generation orchestration, and PDF output. LangChain abstracts LLM provider differences, allowing seamless switching between Ollama (local, private, zero-cost) and Groq (cloud, faster inference). The deterministic cost engine uses a rule-based system with configurable parameters: base hourly rates, role-specific multipliers, material cost markups, and discount rules — ensuring mathematically consistent pricing across all proposals. fpdf2 generates PDFs with custom templates including company logos, headers/footers, and formatted section layouts. The frontend is served via Hugging Face Spaces with Gradio for rapid prototyping and client feedback collection.",
    impact:
      "Reduced proposal creation time from 4-8 hours to under 15 minutes while eliminating cost calculation errors. The deterministic pricing engine ensured 100% mathematical accuracy across all generated proposals. The multi-provider LLM support gave firms flexibility: local inference for confidential proposals, cloud inference for speed when data sensitivity wasn't a concern.",
    learnings: [
      "PDF generation from LLM output requires structured templates — free-form generation produces inconsistent layouts; fpdf2 with pre-defined section templates was the solution",
      "Multi-provider LLM abstraction via LangChain is powerful but adds latency — provider fallback logic needed careful timeout handling",
      "A deterministic rules engine for pricing (separate from the LLM) is critical for business applications where mathematical accuracy is non-negotiable",
    ],
    researchPapers: [
      {
        title: "FastAPI Documentation",
        url: "https://fastapi.tiangolo.com/",
        note: "Backend framework for request routing, validation, and PDF generation orchestration",
      },
      {
        title: "LangChain Documentation: Multi-Provider",
        url: "https://python.langchain.com/docs/integrations/llms/",
        note: "Provider abstraction layer enabling seamless Ollama/Groq switching",
      },
    ],
    order: 5,
  },
  {
    slug: "ald-01",
    title: "ALD-01",
    subtitle: "Privacy-First Local AI Agent Framework (npm & PyPI)",
    description:
      "Designed and published a cross-platform autonomous AI agent framework supporting 10+ LLM providers with a privacy-first local architecture — available on both npm and PyPI.",
    longDescription:
      "ALD-01 (Autonomous Local Agent) is a modular AI agent framework engineered for privacy-sensitive deployments. Unlike cloud-dependent agent frameworks, ALD-01 runs entirely on local hardware, supporting 10+ LLM backends including Ollama, llama.cpp, GPT4All, and OpenAI-compatible endpoints. The framework provides a unified API for building autonomous agents with tool use capability, memory management, and multi-step reasoning — all without sending data to third-party servers. Published as dual-platform packages (npm for Node.js ecosystems, PyPI for Python ecosystems) to maximize adoption across the developer community.",
    techStack: ["Python", "FastAPI", "Ollama", "LangChain", "TypeScript", "npm", "PyPI"],
    status: "open-source",
    githubUrl: "https://github.com/aditya4232/ALD-01",
    features: [
      "Privacy-first architecture — all agent execution runs locally, zero data leaves the host machine",
      "10+ LLM provider support: Ollama, llama.cpp, GPT4All, OpenAI-compatible, Anthropic, and more",
      "Dual-platform publication: npm package for JavaScript/TypeScript, PyPI package for Python",
      "Autonomous agent orchestration with tool use, multi-step reasoning, and memory management",
      "Pluggable provider architecture — add new LLM backends via a simple interface",
      "REST API layer for integration with existing applications and workflows",
    ],
    problemStatement:
      "Every major AI agent framework in 2025 requires cloud API keys and transmits data to third-party LLM providers. For enterprises in regulated industries (finance, healthcare, defence), this creates an insurmountable compliance barrier. No production-ready framework offered a truly local, privacy-first alternative with multi-provider flexibility.",
    implementationDetails:
      "Designed a modular architecture with abstract provider interfaces — each LLM backend implements a common protocol, enabling seamless runtime switching. The core agent loop handles task decomposition, tool selection, execution, and result aggregation. FastAPI provides the REST API layer for external integration. The TypeScript and Python SDKs are built from the same architectural specification, with language-specific idiomatic wrappers. Memory management supports both short-term (conversation context) and long-term (vector store-backed) memory. Tool registration follows a plugin pattern where any Python/JS function can be exposed as an agent tool with auto-generated schemas. Both packages include comprehensive documentation, example agents, and test suites.",
    impact:
      "Published and maintained on two major package registries (npm + PyPI), making local AI agent development accessible to both JavaScript and Python developer communities. The privacy-first architecture enabled deployment scenarios that cloud-dependent frameworks couldn't serve — including air-gapped environments, classified data processing, and compliance-required on-premises deployments. The pluggable provider architecture future-proofs the framework against the rapidly evolving LLM landscape.",
    learnings: [
      "Publishing on npm and PyPI simultaneously requires maintaining two separate build pipelines — the TypeScript/Python SDKs share architectural specs but diverge in implementation",
      "A plugin-based tool registration system (any function becomes an agent tool with auto-generated schemas) was the key design decision that made the framework extensible",
      "Privacy-first architecture is a product moat — enterprise clients in regulated industries (finance, healthcare) would pay a premium for zero data exfiltration guarantees",
    ],
    researchPapers: [
      {
        title: "Ollama Documentation",
        url: "https://github.com/ollama/ollama",
        note: "Primary local LLM backend — used for all local inference in the agent framework",
      },
      {
        title: "LangChain Agent Documentation",
        url: "https://python.langchain.com/docs/how_to/agent_executor/",
        note: "Reference for agent orchestration patterns: tool use, memory, multi-step reasoning",
      },
    ],
    order: 6,
  },
  {
    slug: "ai-customer-ticket-classifier",
    title: "AI Customer Support Ticket Classifier",
    subtitle: "Automated Telecom Ticket Categorization & Priority Assignment",
    description:
      "Developed a machine learning pipeline to automatically classify telecom customer support tickets and predict resolution priority using NLP and deep learning.",
    longDescription:
      "Engineered an automated customer support ticket classification system tailored for telecom data. The application utilizes a dual-model approach, first classifying the issue category using natural language processing techniques, and then predicting resolution priority to optimize support agent workflows. Built with Python and scikit-learn, the system includes advanced iterations experimenting with Neural Networks and LSTM architectures for deeper text sequence understanding. The models are served via an API endpoint for seamless integration into existing customer support platforms.",
    techStack: ["Python", "scikit-learn", "Deep Learning", "LSTM", "NLP", "Pandas"],
    status: "open-source",
    githubUrl: "https://github.com/aditya4232/AI-Customer-Support-Ticket-Classifier",
    features: [
      "Dual-model architecture: classifies ticket category and predicts resolution priority",
      "Advanced NLP preprocessing pipeline with custom tokenization",
      "Multiple model support including baseline ML, Neural Networks, and LSTM architectures",
      "Automated training scripts for continuous model evaluation and improvement",
      "API endpoints for external integration into customer support systems",
    ],
    problemStatement:
      "Telecom customer support teams receive thousands of unstructured text tickets daily. Manually reading, categorizing, and assigning priority to these tickets creates massive bottlenecks and delays critical issue resolution.",
    implementationDetails:
      "The system ingests telecom ticket data and applies comprehensive text preprocessing before vectorization. The core classification utilizes pre-trained models (saved as joblib/pkl objects), while more advanced scripts (train_advanced.py) explore LSTM neural networks for sequence modeling. Two separate models work in tandem: one for determining the core issue category and one dedicated to priority scoring. The entire inference pipeline is exposed via a structured API (app.py/test_api.py) for easy consumption by frontend dashboards.",
    impact:
      "Dramatically reduced the time required to route tickets to the correct department. By automating priority assignment, critical telecom issues are flagged immediately rather than waiting in the general queue, improving SLA compliance and overall customer satisfaction.",
    learnings: [
      "LSTM networks preserve sequence directionality in a way that Bag-of-Words cannot — critical for understanding customer sentiment flow in support tickets",
      "Multi-label classification (category + priority) shares representations effectively — two separate models sharing a common embedding layer performed better than independent models",
      "Text preprocessing for telecom data is non-trivial: domain-specific tokenization (handling plan codes, error IDs, account numbers) was essential for model performance",
    ],
    researchPapers: [
      {
        title: "Long Short-Term Memory (Hochreiter & Schmidhuber, 1997)",
        url: "https://www.bioinf.jku.at/publications/older/2604.pdf",
        note: "Core architecture for sequence modeling in text classification — preserves long-range dependencies in ticket text",
      },
      {
        title: "Scikit-learn Documentation: Text Feature Extraction",
        url: "https://scikit-learn.org/stable/modules/feature_extraction.html",
        note: "Baseline vectorization and preprocessing before transitioning to LSTM-based deep learning",
      },
    ],
    order: 7,
  },
  {
    slug: "resume-buddy",
    title: "Resume BUDDY",
    subtitle: "AI-Powered Resume Analyzer & Enhancer",
    description:
      "Built an intelligent resume analysis tool that scores applicant resumes against job descriptions and provides actionable enhancement suggestions for ATS optimization.",
    longDescription:
      "Resume BUDDY is an AI-powered assistant designed to help candidates optimize their resumes for specific job descriptions. Leveraging NLP and Large Language Models, the application parses resume content, analyzes semantic similarity with target roles, and generates personalized feedback on missing skills, formatting issues, and keyword optimization to maximize ATS (Applicant Tracking System) compatibility.",
    techStack: ["Python", "NLP", "LangChain", "Streamlit", "Vector Embeddings"],
    status: "open-source",
    githubUrl: "https://github.com/aditya4232/Resume-BUDDY",
    features: [
      "Automated extraction and parsing of resume content (PDF/DOCX)",
      "Semantic matching between resume experience and target job descriptions",
      "Actionable feedback engine recommending specific keyword additions",
      "ATS compatibility scoring and formatting analysis",
      "Interactive conversational interface for tailored career coaching",
    ],
    problemStatement:
      "Candidates struggle to understand why their resumes are rejected by automated ATS pipelines. Without immediate, actionable feedback on how their resume aligns with a specific job description, job seekers often apply blindly with suboptimal profiles.",
    implementationDetails:
      "Implemented a comprehensive ingestion pipeline to parse unstructured resume documents into structured text. Used transformer-based embedding models to calculate semantic similarity against provided job descriptions. Integrated an LLM layer using LangChain to synthesize the gap analysis into readable, actionable coaching advice. The application is presented through an interactive Streamlit dashboard, providing instant visual feedback and scoring.",
    impact:
      "Empowered job seekers to quantitatively measure and improve their resume's match for specific roles. Reduced the guesswork in application optimization, leading to higher modeled ATS pass-through rates and better structured professional profiles.",
    learnings: [
      "PDF/DOCX parsing for resumes is surprisingly complex — each format has different internal structure, and text extraction quality directly impacts downstream matching accuracy",
      "Semantic similarity via transformer embeddings (all-MiniLM-L6-v2) provides much more useful feedback than keyword matching — it catches conceptually related skills even when terminology differs",
      "ATS compatibility analysis requires understanding how applicant tracking systems parse resumes — this is more about layout heuristics and keyword density than semantic content",
    ],
    researchPapers: [
      {
        title: "Sentence Transformers Documentation",
        url: "https://www.sbert.net/",
        note: "Used for generating semantic embeddings of resume content and job descriptions",
      },
      {
        title: "LangChain Documentation: Document Loaders",
        url: "https://python.langchain.com/docs/how_to/document-loaders/",
        note: "PDF and DOCX parsing for unstructured resume document ingestion",
      },
    ],
    order: 8,
  }
];
