export interface Achievement {
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  {
    value: "4+",
    label: "Rating"
  },
  {
    value: "3+",
    label: "Major Projects"
  },
  {
    value: "2+",
    label: "Years Experience"
  },
  {
    value: "4+",
    label: "Certifications"
  }
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    title: "Data Mining",
    issuer: "IIT Kharagpur (NPTEL)",
    year: "2023"
  },
  {
    title: "Software Testing",
    issuer: "IIIT Bangalore (NPTEL)",
    year: "2022"
  },
  {
    title: "Machine Learning",
    issuer: "Stanford University",
    year: "2022"
  },
  {
    title: "Programming Foundations",
    issuer: "Duke University",
    year: "2022"
  }
];

export interface NotableAchievement {
  title: string;
  description: string;
}

export const notableAchievements: NotableAchievement[] = [
  {
    title: "Top Performer",
    description: "Recognized with a letter of recommendation among all colleges and universities"
  },
  {
    title: "Google Cloud Security Challenge",
    description: "Secured Rank 5 in the Google Cloud Security Challenge (April 2021)"
  },
  {
    title: "Class Representative",
    description: "Served as Class Representative for consecutive 4 semesters (2020-2022)"
  },
  {
    title: "DevFest Chandigarh Organizer",
    description: "Organized DevFest Chandigarh in collaboration with Google Developer Groups (Dec 2022)"
  }
];
