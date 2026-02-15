import { Server, Zap, Activity } from "lucide-react";

export const projects = [
  {
    id: "project-1",
    title: "K8s Microservices Lab",
    description: "A complete platform-as-a-service prototype featuring automated horizontal scaling, Redis caching, and integrated Istio service mesh for traffic management.",
    tags: ["Kubernetes", "Docker", "Prometheus", "Helm"],
    link: "https://github.com/KevinGeorge100",
    repo: "https://github.com/KevinGeorge100",
    status: "Healthy",
    metrics: "99.9% Uptime",
    icon: Server
  },
  {
    id: "project-2",
    title: "GitOps CI/CD Pipeline",
    description: "Multi-environment deployment pipeline using GitHub Actions and ArgoCD. Implements canary releases and blue/green deployment strategies for zero-downtime.",
    tags: ["ArgoCD", "Terraform", "Actions"],
    link: "https://github.com/KevinGeorge100",
    repo: "https://github.com/KevinGeorge100",
    status: "Stable",
    metrics: "2m Build Time",
    icon: Zap
  },
  {
    id: "project-3",
    title: "Infra-Monitor Dashboard",
    description: "Real-time observability platform for monitoring server health and application latency using Grafana. Features custom alert rules and automated incident reporting.",
    tags: ["Grafana", "Prometheus", "ELK Stack"],
    link: "https://github.com/KevinGeorge100",
    repo: "https://github.com/KevinGeorge100",
    status: "Live",
    metrics: "15ms Latency",
    icon: Activity
  }
];
