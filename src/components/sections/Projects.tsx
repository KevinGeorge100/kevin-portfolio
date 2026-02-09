import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: "project-1",
    title: "K8s Microservices Lab",
    description: "A complete platform-as-a-service prototype featuring automated horizontal scaling and Redis caching.",
    tags: ["Kubernetes", "Docker", "Prometheus", "Helm"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-2",
    title: "GitOps CI/CD Pipeline",
    description: "Multi-environment deployment pipeline using GitHub Actions and ArgoCD for blue/green deployments.",
    tags: ["ArgoCD", "Terraform", "GitHub Actions"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-3",
    title: "Infra-Monitor Dashboard",
    description: "Real-time observability platform for monitoring server health and application latency using Grafana.",
    tags: ["Grafana", "Prometheus", "Node Exporter"],
    link: "#",
    repo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-accent uppercase tracking-widest border-white/10">
              Technical Labs
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">Infrastructure Work</h2>
            <p className="text-lg text-muted-foreground">
              Deep dives into automation, platform resilience, and cloud-native architecture.
            </p>
          </div>
          <Link href="https://github.com" className="clay px-6 py-3 text-primary font-bold hover:clay-primary hover:scale-105 transition-all flex items-center mt-8 md:mt-0 border-white/10">
            View GitHub Lab <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <SpotlightCard 
                key={project.id} 
                className="reveal-on-scroll" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="clay p-4 group h-full transition-all duration-500 border-white/10 bg-white/5">
                  <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-6 border border-white/10">
                    <Image
                      src={img?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"></div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="clay text-[10px] bg-white/10 text-primary uppercase font-bold px-3 py-1 border-white/5">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <Link href={project.link} className="flex-1 text-center py-2 clay-primary text-xs font-bold hover:scale-105 transition-all">
                        Live Metrics
                      </Link>
                      <Link href={project.repo} className="flex-1 text-center py-2 clay text-xs font-bold hover:scale-105 transition-all border-white/10">
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px] -z-0 pointer-events-none"></div>
    </section>
  );
}