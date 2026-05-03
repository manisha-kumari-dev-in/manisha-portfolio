import sourceCodeIcon from "../../assets/icons/source-code.svg";
import cloudIcon from "../../assets/icons/cloud-computing.svg";
import devopsIcon from "../../assets/icons/devops.svg";
import testingIcon from "../../assets/icons/testing.svg";

import pythonIcon from "../../assets/icons/python.svg";
import goIcon from "../../assets/icons/go.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";

import awsIcon from "../../assets/icons/aws.svg";
import dockerIcon from "../../assets/icons/docker.svg";
import kubernetesIcon from "../../assets/icons/kubernetes.svg";
import terraformIcon from "../../assets/icons/terraform.svg";

import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github.svg";
import gitlabIcon from "../../assets/icons/gitlab.svg";

import unitTestIcon from "../../assets/icons/unit-test.svg";
import integrationTestIcon from "../../assets/icons/integration-test.svg";
import e2eTestIcon from "../../assets/icons/e2e-test.svg";

export const skillGroups = [
  {
    title: "Languages",
    icon: sourceCodeIcon,
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "Go", icon: goIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: cloudIcon,
    skills: [
      { name: "AWS", icon: awsIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Terraform", icon: terraformIcon },
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: devopsIcon,
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub Actions", icon: githubIcon },
      { name: "GitLab CI", icon: gitlabIcon },
    ],
  },
  {
    title: "Testing",
    icon: testingIcon,
    skills: [
      { name: "Unit Testing", icon: unitTestIcon },
      { name: "Integration Testing", icon: integrationTestIcon },
      { name: "E2E Testing", icon: e2eTestIcon },
    ],
  },
];
