export interface Achievement {
  icon: string;
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  {
    icon: "ri-award-line",
    value: "8.23",
    label: "CGPA in B.E. CSE"
  },
  {
    icon: "ri-code-box-line",
    value: "3+",
    label: "Major Projects"
  },
  {
    icon: "ri-user-star-line",
    value: "2+",
    label: "Years Experience"
  },
  {
    icon: "ri-graduation-cap-line",
    value: "4+",
    label: "Certifications"
  }
];

export interface Certification {
  icon: string;
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    icon: "ri-award-fill",
    title: "Data Mining",
    issuer: "IIT Kharagpur (NPTEL)",
    year: "2023"
  },
  {
    icon: "ri-award-fill",
    title: "Software Testing",
    issuer: "IIIT Bangalore (NPTEL)",
    year: "2022"
  },
  {
    icon: "ri-award-fill",
    title: "Machine Learning",
    issuer: "Stanford University",
    year: "2022"
  },
  {
    icon: "ri-award-fill",
    title: "Programming Foundations",
    issuer: "Duke University",
    year: "2022"
  }
];

export interface NotableAchievement {
  icon: string;
  title: string;
  description: string;
}

export const notableAchievements: NotableAchievement[] = [
  {
    icon: "ri-trophy-fill",
    title: "Top Performer",
    description: "Recognized with a letter of recommendation among all colleges and universities"
  },
  {
    icon: "ri-google-fill",
    title: "Google Cloud Security Challenge",
    description: "Secured Rank 5 in the Google Cloud Security Challenge (April 2021)"
  },
  {
    icon: "ri-user-star-fill",
    title: "Class Representative",
    description: "Served as Class Representative for consecutive 4 semesters (2020-2022)"
  },
  {
    icon: "ri-team-fill",
    title: "DevFest Chandigarh Organizer",
    description: "Organized DevFest Chandigarh in collaboration with Google Developer Groups (Dec 2022)"
  }
];
