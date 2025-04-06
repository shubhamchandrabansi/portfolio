export interface Skill {
  name: string;
  icon: string;
  level: string;
  experience: number; // percentage
  years: string;
}

export const skills: Skill[] = [
  {
    name: "ReactJS",
    icon: "ri-reactjs-line",
    level: "Intermediate",
    experience: 80,
    years: "2 years"
  },
  {
    name: "JavaScript",
    icon: "ri-javascript-line",
    level: "Intermediate",
    experience: 85,
    years: "2.5 years"
  },
  {
    name: "C/C++",
    icon: "ri-code-s-slash-line",
    level: "Intermediate",
    experience: 75,
    years: "3 years"
  },
  {
    name: "Python",
    icon: "ri-python-line",
    level: "Intermediate",
    experience: 70,
    years: "2 years"
  },
  {
    name: "HTML/CSS",
    icon: "ri-html5-line",
    level: "Intermediate",
    experience: 85,
    years: "3 years"
  },
  {
    name: "PHP",
    icon: "ri-code-line",
    level: "Beginner",
    experience: 60,
    years: "1 year"
  },
  {
    name: "Cloud Computing",
    icon: "ri-cloud-line",
    level: "Beginner",
    experience: 65,
    years: "1.5 years"
  },
  {
    name: "Machine Learning",
    icon: "ri-ai-generate",
    level: "Beginner",
    experience: 50,
    years: "1 year"
  },
  {
    name: "Web Development",
    icon: "ri-code-box-line",
    level: "Intermediate",
    experience: 80,
    years: "3 years"
  },
  {
    name: "Git/GitHub",
    icon: "ri-github-fill",
    level: "Intermediate",
    experience: 75,
    years: "2 years"
  }
];
