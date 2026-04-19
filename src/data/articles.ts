import { LinkedInArticle } from "@/lib/types";

export const linkedinArticles: LinkedInArticle[] = [
  {
    title: "Can Knowledge graphs solve memory problem in Agentic AI systems",
    date: "2026-04-12",
    excerpt:
      "I was building an agentic personal assistant and hit the wall everyone hits - my agents kept forgetting everything. Context lost mid-conversation. Zero recall across sessions. No ability to connect the dots between people, projects, and deadlines. So I built a 3-layer memory architecture inspired by how human cognition actually works - conversation context with smart compaction, short-term memory that persists across sessions, and a long-term knowledge graph where edges decay and strengthen like real synapses.",

    tags: ["OpenClaw", "Neo4j", "Gephi", "Personal Assistant"],
    linkedinUrl:
      "https://www.linkedin.com/pulse/can-knowledge-graphs-solve-memory-problem-agentic-ai-systems-pai-vk2mc/",
  },
  
  {
    title:
      "Powering the Future: My Internship at the Heart of Texas Energy Landscape",
    date: "2025-08-07",
    excerpt:
      "A deep dive into my internship at Van Brunt & Associates, where I built ETL pipelines with Airflow, developed load forecasting models for the ERCOT grid, and identified critical 4CP events to drive cost savings in the Texas energy market.",
    tags: ["Energy", "Data Analytics", "Machine Learning", "ETL", "Airflow"],
    linkedinUrl:
      "https://www.linkedin.com/pulse/powering-future-my-internship-heart-texas-energy-landscape-amruth-pai-eenoc/",
  },
  {
    title:
      "Scaling Enterprise GenAI: My Internship Experience Deploying SLMs, RAG, and vLLM",
    date: "2025-12-05",
    excerpt:
      "How I deployed Small Language Models, built agentic workflows with LangGraph, and operationalized vLLM inference engines at PKSI to deliver scalable, cost-efficient enterprise AI solutions.",
    tags: ["GenAI", "LLM", "RAG", "vLLM", "LangGraph"],
    linkedinUrl:
      "https://www.linkedin.com/pulse/scaling-enterprise-genai-my-internship-experience-deploying-pai-oimyc/",
  },
  {
    title: "Network Visualization using Large Language Models",
    date: "2024-12-13",
    excerpt:
      "Exploring network visualization with Neo4j, Gephi and microsoft GraphRAG, enriched by LLM-driven semantic analysis. A comparison of tools and techniques for graph-based knowledge representation and storytelling.",
    tags: ["LLM", "Neo4j", "Gephi", "Network Analysis"],
    linkedinUrl:
      "https://www.linkedin.com/pulse/network-visualization-using-large-language-models-amruth-pai-fqh3c/",
  },
];
