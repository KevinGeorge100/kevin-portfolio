import { Terminal, Server, Cpu, Code2 } from "lucide-react";

export const aboutCards = [
  {
    icon: Cpu,
    title: "Platform Engineering",
    desc: "Building internal developer platforms that simplify complex cloud deployments and improve DX.",
    color: "var(--primary)"
  },
  {
    icon: Server,
    title: "Orchestration",
    desc: "Hands-on experience with Kubernetes, Docker, and managing resilient microservice fleets.",
    color: "var(--accent)"
  },
  {
    icon: Terminal,
    title: "Automation (IaC)",
    desc: "Treating infrastructure as code using Terraform and Ansible for reproducible environments.",
    color: "var(--primary)"
  },
  {
    icon: Code2,
    title: "Full-Stack Context",
    desc: "Understanding the developer workflow to build better pipelines and developer experiences.",
    color: "var(--accent)"
  }
];
