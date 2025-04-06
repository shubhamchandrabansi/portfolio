export interface Skill {
  name: string;
  level: string;
  experience: number; // percentage
  years: string;
}

export const skills: Skill[] = [
  {
    name: "ReactJS",
    level: "Intermediate",
    experience: 80,
    years: "2 years"
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    experience: 85,
    years: "2.5 years"
  },
  {
    name: "C/C++",
    level: "Intermediate",
    experience: 75,
    years: "3 years"
  },
  {
    name: "Python",
    level: "Intermediate",
    experience: 70,
    years: "2 years"
  },
  {
    name: "HTML/CSS",
    level: "Intermediate",
    experience: 85,
    years: "3 years"
  },
  {
    name: "Cloud Computing",
    level: "Beginner",
    experience: 65,
    years: "1.5 years"
  },
  {
    name: "Machine Learning",
    level: "Beginner",
    experience: 50,
    years: "1 year"
  },
  {
    name: "Web Development",
    level: "Intermediate",
    experience: 80,
    years: "3 years"
  },
  {
    name: "Git/GitHub",
    level: "Intermediate",
    experience: 75,
    years: "2 years"
  }
];
