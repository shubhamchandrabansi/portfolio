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
    title: "Interactive E-commerce Shop",
    description: "A responsive online store with product filtering, cart functionality, and a user-friendly checkout process.",
    detailedDescription: "Developed a full-featured e-commerce site with Stripe integration for payments, responsive design for all devices, and seamless user experience.",
    techStack: ["React", "JavaScript", "CSS/SASS", "Stripe API"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Personal Task Manager",
    description: "A clean and intuitive task management application with drag-and-drop functionality, reminders, and categorization.",
    detailedDescription: "Built a productivity tool that helps users organize tasks with features like sorting, filtering, dark/light mode, and browser notifications.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts with a visually appealing and easy-to-use interface.",
    detailedDescription: "Created a weather app that fetches data from the OpenWeather API, displays 5-day forecasts, and uses dynamic backgrounds based on current weather conditions.",
    techStack: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Recipe Finder",
    description: "An app that helps users discover new recipes based on ingredients they have available in their kitchen.",
    detailedDescription: "Developed a recipe search application that connects to a food database API, allows saving favorite recipes, and includes meal planning features.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    liveLink: "#"
  }
];
