import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    role: "Data Analytics and Software Developer Intern",
    company: "Van Brunt & Associates",
    location: "Texas",
    startDate: "May 2025",
    endDate: "August 2025",
    bullets: [
      "Designed and deployed a modular machine learning pipeline to forecast daily and weekly peak loads in the ERCOT grid, achieving an 18% improvement in predictive accuracy.",
      "Engineered robust feature sets by integrating ERCOT system forecasts, multi-source weather data, and tariff-based signals such as 4CP demand indicators.",
      "Built a dual-objective model to simultaneously forecast load and identify 4CP events, attaining 87% precision and reducing commercial billing risk.",
      "Incorporated price signals, battery dispatch profiles, and weather anomalies to enhance temporal load sensitivity, resulting in a 14% boost in model performance.",
      "Implemented a scalable and reproducible pipeline using Python, SQL, and MLflow, enabling seamless experimentation and production deployment.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Infosys",
    location: "Bangalore",
    startDate: "August 2019",
    endDate: "March 2024",
    bullets: [
      "Increased operational efficiency by 15% through diagnosing & resolving client system issues, while developing customized application programs to meet unique client requirements.",
      "Collaborated with cross-functional teams to ensure consistent system integration and timely project delivery.",
      "Optimized and refactored code, resulting in 10% improvement in system performance.",
      "Automated client reports by utilizing DB2 SQL, significantly enhancing reporting accuracy and reducing manual efforts.",
      "Designed and maintained application programs for IBM I systems using RPGLE and CLLE, ensuring high reliability.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Infosys",
    location: "Mysore",
    startDate: "January 2019",
    endDate: "May 2019",
    bullets: [
      "Led the development of a comprehensive full stack application tailored for Nike retailers, ensuring seamless integration between front-end and back-end components.",
      "Engineered backend using JAVA, Spring Boot and RESTful Web services API.",
      "Designed and implemented the front-end interface with Angular and utilized MySQL for database management.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Biztime IT Solutions",
    location: "",
    startDate: "May 2018",
    endDate: "July 2018",
    bullets: [
      "Contributed to the development of ZonalDesk, a mobile application designed to deliver fast and reliable everyday services to people in rural areas with limited accessibility.",
      "Played a key role in implementing Google Maps API to create an intuitive and functional map interface, enhancing the app's usability and service accessibility.",
      "Utilized Android Studio for app development, ensuring a smooth user experience on low-resource devices.",
    ],
  },
];
