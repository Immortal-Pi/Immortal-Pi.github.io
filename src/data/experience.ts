import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    role: "Data Science & AI Intern",
    company: "Carlisle Construction Materials",
    location: "Pennsylvania",
    startDate: "Jan 2026",
    endDate: "Aug 2026",
    bullets: [
      "Developed an agentic AI system using LangGraph and Azure OpenAI to automate extraction and classification of construction product specifications from unstructured documents, reducing manual review time by 40%.",
      "Built a multi-agent orchestration pipeline for intelligent document parsing, leveraging RAG with vector search to answer technical queries across 10,000+ product datasheets.",
      "Designed and deployed a Streamlit-based internal tool for quality engineers to query product compliance data in natural language, increasing team productivity by 25%.",
      "Implemented CI/CD pipelines with Docker and GitHub Actions for model versioning and deployment to Azure, ensuring reproducibility and scalability across environments.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Pegasus Knowledge Solution Inc.",
    location: "",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    bullets: [
      "Architected and deployed a production-grade RAG pipeline using LangChain, ChromaDB, and Azure OpenAI, enabling semantic search over 50,000+ enterprise knowledge articles with 92% retrieval accuracy.",
      "Fine-tuned open-source LLMs (LLaMA 3, Mistral) on domain-specific corpora using LoRA and QLoRA, achieving a 15% improvement in task-specific response quality.",
      "Built a multi-agent system using LangGraph for automated report generation, integrating tool-use agents with SQL databases and REST APIs for real-time data retrieval.",
      "Developed evaluation frameworks using RAGAS and custom metrics to benchmark RAG pipeline performance, driving iterative improvements in chunking strategy and prompt design.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Van Brunt & Associates",
    location: "Texas",
    startDate: "May 2025",
    endDate: "Aug 2025",
    bullets: [
      "Designed and deployed a modular machine learning pipeline to forecast daily and weekly peak loads in the ERCOT grid, achieving an 18% improvement in predictive accuracy.",
      "Engineered robust feature sets by integrating ERCOT system forecasts, multi-source weather data, and tariff-based signals such as 4CP demand indicators.",
      "Built a dual-objective model to simultaneously forecast load and identify 4CP events, attaining 87% precision and reducing commercial billing risk.",
      "Implemented a scalable and reproducible pipeline using Python, SQL, and MLflow, enabling seamless experimentation and production deployment.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Infosys",
    location: "Bangalore",
    startDate: "Aug 2019",
    endDate: "Mar 2024",
    bullets: [
      "Led development of ETL pipelines processing 2M+ daily records using Python and DB2 SQL, reducing data latency by 30% and enabling real-time dashboards for stakeholders.",
      "Built predictive models for client churn analysis using Scikit-Learn and XGBoost, achieving 89% AUC and directly informing retention strategies that reduced churn by 12%.",
      "Automated reporting workflows with Python and SQL, eliminating 20+ hours/week of manual effort and improving reporting accuracy by 35%.",
      "Collaborated with cross-functional teams to design and maintain application programs for IBM i systems using RPGLE and CLLE, ensuring 99.9% system uptime.",
    ],
  },
];
