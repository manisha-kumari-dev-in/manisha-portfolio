export type Experience = {
  role: string;
  company: string;
  type: string;
  duration: string;
  stack: string[];
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Vista - Cimpress India",
    type: "Full Time",
    duration: "Aug 2024 — Present",
    stack: [
      "Python",
      "Go",
      "AWS",
      "Kubernetes",
      "Terraform",
      "Docker",
      "Gitlab",
      "CI/CD",
      "NewRelic",
      "JFrog Artifactory",
      "Cortex",
    ],
    points: [
      "Contributed to internal platform tooling focused on developer productivity, workflow automation, and release reliability.",
      "Built and improved systems across developer experience, internal automation, and platform operations.",
      "Collaborated across teams on tooling used in daily engineering workflows.",
    ],
  },
];
