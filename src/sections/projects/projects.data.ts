export type ProjectLink = {
  type: "github" | "external";
  url: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  impact: string[];
  links?: ProjectLink[];
};

export type ArchivedProject = {
  id: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  stack?: string[];
  links?: ProjectLink[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "idp-platform-2026",
    title: "Internal Developer Platform",
    type: "Platform Engineering",
    year: "2026",
    description:
      "Extended VConfig, an internal developer platform used across engineering to standardize local setup, automate service workflows, and simplify AI tooling adoption.",
    stack: [
      "Go",
      "CI/CD",
      "GitLab",
      "CLI",
      "Opencode CLI",
      "MCP",
      "Agent Skills",
      "Release Automation",
      "Telemetry",
      "NewRelic",
    ],
    impact: [
      "Standardized internal developer workflows across teams",
      "Reduced onboarding friction and manual setup effort",
      "Extended platform tooling to support AI-enabled developer workflows",
      "Improved consistency in local environment configuration",
    ],
  },
  {
    id: "portfolio-website-2026",
    title: "Portfolio Website",
    type: "Web Development",
    year: "2026",
    description:
      "Built a responsive and interactive portfolio website to showcase my work and skills.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    impact: ["Showcases my projects and skills in a visually appealing way"],
    links: [
      {
        type: "github",
        url: "https://github.com/manisha-kumari-dev-in/manisha-portfolio",
      },
    ],
  },
];

export const archivedProjects: ArchivedProject[] = [
  {
    id: "engineering-standards-agent-2025",
    title: "Engineering Standards Agent",
    type: "AI Agent",
    year: "2026",
    summary:
      "Built a policy-driven AI code review framework using an agent.md orchestration layer and skill.md based modular capability system, backed by a structured reference knowledge base to enforce system design, architecture, TDD, object-oriented design, and object calisthenics principles, enabling consistent review, audit, and refactoring guidance across teams.",
    stack: ["Agents.md", "SKILL.md"],
  },
  {
    id: "pxe-bulk-sync-utility-2025",
    title: "Bulk Sync Utility",
    type: "Internal Automation",
    year: "2025",
    summary:
      "Built a bulk sync utility for the PXE team to simplify Cortex updates after reorg changes and reduce repetitive operational work.",
    stack: ["Go", "CLI"],
  },
];
