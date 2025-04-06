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
    githubLink: "https://github.com/Shubham-Kumar-Chandrabansi/Stock-Analysis",
    liveLink: "#"
  },
  {
    title: "Learning Management System",
    description: "A comprehensive website offering various courses with payment gateway integration and lecture viewing capabilities.",
    detailedDescription: "Developed a feature-rich learning platform where users can browse courses, make secure payments, and access educational content through an intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript", "Payment Gateway"],
    githubLink: "https://github.com/Shubham-Kumar-Chandrabansi/LMS",
    liveLink: "#"
  },
  {
    title: "Stock Management System",
    description: "A software solution designed to handle inventory management with secure admin login and comprehensive stock tracking.",
    detailedDescription: "Built a C/C++ application featuring encrypted admin authentication, inventory intake tracking, item search functionality, stock availability monitoring, and receipt generation.",
    techStack: ["C/C++", "Data Structures", "Encryption", "File Handling"],
    githubLink: "https://github.com/Shubham-Kumar-Chandrabansi/Inventory-Management",
    liveLink: "#"
  },
  {
    title: "3D Portfolio Website",
    description: "A modern, interactive personal portfolio website showcasing skills, projects, and professional experience.",
    detailedDescription: "Created a responsive portfolio with 3D elements, smooth animations, and a clean user interface using modern web technologies to highlight professional achievements and technical abilities.",
    techStack: ["React", "Three.js", "TailwindCSS", "JavaScript"],
    githubLink: "https://github.com/Shubham-Kumar-Chandrabansi/3D-Portfolio",
    liveLink: "#"
  }
];
