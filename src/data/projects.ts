import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Satellite Image Segmentation",
    slug: "satellite-image-segmentation",
    shortDescription:
      "Built a CNN model using U-Net architecture for segmenting satellite images using TensorFlow and Keras. Deployed on Hugging Face for real time prediction.",
    fullDescription:
      "This project focuses on satellite image segmentation for the Dubai region. Key aspects include resizing images and generating masked segmentation images. The data was prepared for deep learning using Patchify, and a U-Net model was built with encoder-decoder architecture. Custom loss functions and metrics were used, and the training process was tracked with Weights and Biases. The activation outputs and gradients for each TensorFlow layer were visualized using Keract. Finally, the model was deployed on Hugging Face for further use and experimentation.",
    techStack: ["Python", "OpenCV", "Hugging Face", "TensorFlow", "Keras", "Weights & Biases"],
    githubUrl: "https://github.com/Immortal-Pi/DeepLearningForSatelliteImagery",
    icon: "FaSatellite",
    dates: "April 2024 - August 2024",
    featured: true,
  },
  {
    title: "LLama-Law (Legal Advisor Chatbot)",
    slug: "llama-law",
    shortDescription:
      "Developed as part of Llama-Impact Hackathon. Solves the problem of using government websites easier for common people, navigating and providing legal advice.",
    fullDescription:
      "LlamaLaw is an AI chatbot developed as part of the Llama-Impact Hackathon to help visitors, students, and citizens navigate government websites and understand legal processes easily. With multilingual support, LlamaLaw simplifies complex topics like visas, permits, and residency applications into clear, step-by-step guidance. By providing accurate, up-to-date information in a user-friendly way, LlamaLaw makes government services more accessible and reduces confusion for users.",
    techStack: ["Python", "Streamlit", "ChromaDB", "TogetherAI API"],
    githubUrl: "https://github.com/Immortal-Pi/RAG_finetuning",
    icon: "FaFileAlt",
    dates: "November 2024",
    featured: true,
  },
  {
    title: "Bitcoin Price Forecasting",
    slug: "bitcoin-price-forecasting",
    shortDescription:
      "A forecasting pipeline that retrieves real-time Bitcoin price data via API, preprocesses it, and trains an LSTM model to predict future price trends. Orchestrated with Apache Airflow.",
    fullDescription:
      "Developed an end-to-end forecasting pipeline that retrieves real-time Bitcoin price data via API, preprocesses it, and trains an LSTM model to predict future price trends. The workflow is automated through a custom ETL pipeline, orchestrated with Apache Airflow, ensuring scheduled data updates, model retraining, and consistent monitoring of performance.",
    techStack: ["Python", "Deep Learning", "CICD", "Airflow", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/Immortal-Pi/ETL_pipeline_Airflow",
    icon: "FaBitcoin",
    dates: "February 2025 - March 2025",
    featured: true,
  },
  {
    title: "TumorFlow",
    slug: "tumorflow",
    shortDescription:
      "End-to-end ML pipeline for identifying kidney tumors from CT scan images. Includes data ingestion, model training, evaluation, and deployment with MLOps principles.",
    fullDescription:
      "This project highlights the integration of MLOps principles in managing the entire machine learning lifecycle. While the focus was on building a kidney tumor detection model using transfer learning, the core objective was to emphasize the importance of project structure, automation of workflows, and the use of MLOps tools like DVC for version control and Docker for deployment. It serves as a foundation for understanding how to design scalable, maintainable, and efficient ML pipelines, ensuring reproducibility and streamlined collaboration in real-world scenarios.",
    techStack: ["Python", "Keras", "CICD", "AWS EC2", "Docker", "DVC"],
    githubUrl: "https://github.com/Immortal-Pi/TumorFlow",
    icon: "FaDesktop",
    dates: "October 2023 - January 2024",
  },
  {
    title: "SQL Agent vs RAG Chatbot",
    slug: "sql-agent-vs-rag",
    shortDescription:
      "An application to compare the performance and accuracy of SQL Agent and RAG for tabular data. SQL Agent was suitable for tabular data because of its precise answers.",
    fullDescription:
      "I used Azure OpenAI API for embedding and chatbot integration, LangChain SQL Agent for SQL handling, and SQLite as the relational database. I also incorporated ChromaDB as the vector database for RAG-related tasks and built the web interface using Streamlit to make everything accessible and user-friendly. While RAG has its strengths with unstructured and hybrid data, SQL Agent clearly outshined when it came to structured, tabular datasets.",
    techStack: ["Python", "Streamlit", "ChromaDB", "LangChain"],
    githubUrl: "https://github.com/Immortal-Pi/LLM-SQL-Agent",
    icon: "FaRobot",
    dates: "September 2024 - October 2024",
  },
  {
    title: "Surge Sense",
    slug: "surge-sense",
    shortDescription:
      "ML pipeline to predict surge pricing for cab rides, comparing Uber and Lyft services. Focus on MLOps principles and scalability.",
    fullDescription:
      "The goal of this project was to build a full end-to-end machine learning pipeline to predict surge pricing for cab rides, specifically comparing Uber and Lyft services in the New York City area. The pipeline aimed to leverage historical ride, weather, and event data to forecast price surges based on factors such as time, location, weather, and demand patterns. As part of the modeling phase, we utilized multiple machine learning algorithms—including Random Forest, XGBoost, and Gradient Descent-based models—and selected the best-performing model for accurate surge price prediction.",
    techStack: ["Python", "Keras", "CICD", "AWS EC2", "Docker", "MLFlow", "DVC"],
    githubUrl: "https://github.com/Immortal-Pi/SurgeSense",
    icon: "FaDollarSign",
    dates: "January 2025 - February 2025",
    featured: true,
  },
  {
    title: "Face Recognition using CNN",
    slug: "face-recognition-cnn",
    shortDescription:
      "Built a CNN for detecting faces using TensorFlow and Keras. Augmentation on images using Albumentations.",
    fullDescription:
      "Developed a face detection system using Convolutional Neural Networks (CNN). The model was designed to accurately detect and localize faces in images. I used OpenCV for image preprocessing and labeled datasets for training. The CNN architecture included multiple convolutional, pooling, and fully connected layers to extract features from the input images. After training, the model achieved high accuracy in detecting faces under various conditions, such as different lighting and facial expressions. The system was optimized for real-time performance, making it suitable for applications in security and surveillance.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "CUDA"],
    githubUrl: "https://github.com/Immortal-Pi/faceRecognition",
    icon: "FaLaptopCode",
    dates: "October 2023 - January 2024",
  },
  {
    title: "Airlines Management System",
    slug: "airlines-management",
    shortDescription:
      "Web-based application to streamline and automate airline core operations: flights, passengers, bookings, employee details, routes, fares, and transactions.",
    fullDescription:
      "The Airlines Management System is a comprehensive web-based application designed to streamline and automate the management of an airline's core operations. The system integrates features for managing flights, passengers, bookings, employee details, routes, fares, and transactions. Built using Streamlit for its user interface and SQLite for its database, this project provides a scalable and intuitive solution for airline administrators and end-users alike. The application incorporates dynamic logging, enabling audit trails for key operations such as flight scheduling, passenger management, and fare updates.",
    techStack: ["SQLite", "Streamlit", "MongoDB", "Python"],
    githubUrl: "https://github.com/Immortal-Pi/airlines_management",
    icon: "FaPlane",
    dates: "August 2024 - November 2024",
  },
];
