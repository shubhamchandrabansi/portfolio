export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    title: "Analysis of Large Cap Companies",
    description: "An ML-based project for predicting stock prices of large cap companies with market capitalization over $10 billion.",
    detailedDescription: "Created a machine learning model that analyzes historical data and market trends to predict stock price movements of major corporations, helping investors make informed decisions.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Learning Management System",
    description: "A comprehensive website offering various courses with payment gateway integration and lecture viewing capabilities.",
    detailedDescription: "Developed a feature-rich learning platform where users can browse courses, make secure payments, and access educational content through an intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript", "Payment Gateway"],
    githubLink: "https://github.com/shubhamchandrabansi/LMS-Let-s_Study",
    liveLink: "#"
  },
  {
    title: "Stock Management System",
    description: "A software solution designed to handle inventory management with secure admin login and comprehensive stock tracking.",
    detailedDescription: "Built a C/C++ application featuring encrypted admin authentication, inventory intake tracking, item search functionality, stock availability monitoring, and receipt generation.",
    techStack: ["C/C++", "Data Structures", "Encryption", "File Handling"],
    githubLink: "#",
    liveLink: "#"
  }
];
