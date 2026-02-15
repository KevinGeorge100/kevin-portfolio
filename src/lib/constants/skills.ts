import { Cloud, Terminal, ShieldCheck } from "lucide-react";

export const skillCategories = [
  {
    title: "Cloud & Infra",
    icon: Cloud,
    skills: ["AWS (EKS, EC2, S3)", "Terraform (IaC)", "Kubernetes & Helm", "Docker Orchestration", "Nginx & Load Balancing"],
    variant: "clay-primary" as const
  },
  {
    title: "DevOps & Tooling",
    icon: Terminal,
    skills: ["CI/CD (GitHub Actions)", "Prometheus & Grafana", "ArgoCD (GitOps)", "Linux SysAdmin", "Ansible Configuration"],
    variant: "clay" as const
  },
  {
    title: "Development",
    icon: ShieldCheck,
    skills: ["Bash/Shell Scripting", "Python for Automation", "Golang Basics", "Security Best Practices", "REST API Context"],
    variant: "clay-accent" as const
  }
];

export const softSkills = ["System Architecture", "Incident Management", "Team Leadership", "Cost Optimization", "Mentorship"];
