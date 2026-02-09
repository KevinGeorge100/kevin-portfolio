import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Terminal, Activity, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: "project-1",
    title: "K8s Microservices Lab",
    description: "A complete platform-as-a-service prototype featuring automated horizontal scaling and Redis caching.",
    tags: ["Kubernetes", "Docker", "Prometheus", "Helm"],
    link: "https://github.com/KevinGeorge100/kevin-portfolio",
    repo: "https://github.com/KevinGeorge100/kevin-portfolio",
    status: "Healthy",
    metrics: "99.9% Uptime"
  },
  {
    id: "project-2",
    title: "GitOps CI/CD Pipeline",
    description: "Multi-environment deployment pipeline using GitHub Actions and ArgoCD for blue/green deployments.",
    tags: ["ArgoCD", "Terraform", "GitHub Actions"],
    link: "https://github.com/KevinGeorge100/kevin-portfolio",
    repo: "https://github.com/KevinGeorge100/kevin-portfolio",
    status: "Deployed",
    metrics: "2m Build"
  },
  {
    id: "project-3",
    title: "Infra-Monitor Dashboard",
    description: "Real-time observability platform for monitoring server health and application latency using Grafana.",
    tags: ["Grafana", "Prometheus", "Node Exporter"],
    link: "https://github.com/KevinGeorge100/kevin-portfolio",
    repo: "https://github.com/KevinGeorge100/kevin-portfolio",
    status: "Live",
    metrics: "15ms Latency"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 reveal-on-scroll">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 clay mb-6 text-xs font-black text-primary uppercase tracking-[0.2em] rounded-full border border-white/10">
              Laboratory & Work
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
              Production <span className="text-primary">Grade.</span>
            </h2>
            <p className="text-xl text-white/50 font-medium leading-relaxed">
              Deep dives into automation, platform resilience, and cloud-native architecture. Every project is a lesson in stability.
            </p>
          </div>
          <Link 
            href="https://github.com/KevinGeorge100" 
            target="_blank" 
            className="group mt-12 lg:mt-0 flex items-center gap-4 px-8 py-4 clay rounded-full text-white font-bold hover:bg-white/5 hover:scale-105 transition-all border border-white/10"
          >
            <Github className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
            <span>Explore All Repos</span>
            <ExternalLink className="h-4 w-4 opacity-50" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <SpotlightCard 
                key={project.id} 
                className="reveal-on-scroll" 
                style={{ transitionDelay: `${index * 150}ms` }}
                spotlightColor="rgba(var(--primary), 0.15)"
              >
                <div className="clay p-2 group h-full transition-all duration-500 border border-white/5 bg-white/[0.02] flex flex-col rounded-[2.5rem] overflow-hidden">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden m-2 border border-white/10">
                    <Image
                      src={img?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 px-3 py-1.5 clay-primary rounded-full backdrop-blur-md border border-black/10">
                        <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">{project.status}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="px-6 py-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-black uppercase">
                        <Activity className="h-3 w-3" />
                        {project.metrics}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                      <Terminal className="h-5 w-5 opacity-50" />
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-white/40 mb-8 line-clamp-3 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="mt-auto flex gap-3">
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="flex-1 text-center py-4 clay-primary rounded-2xl text-[11px] font-black uppercase tracking-widest text-black flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-primary/10"
                      >
                        <Zap className="h-3 w-3" />
                        Live Metrics
                      </Link>
                      <Link 
                        href={project.repo} 
                        target="_blank" 
                        className="flex-1 text-center py-4 clay rounded-2xl text-[11px] font-black uppercase tracking-widest text-white/80 hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
                      >
                        <Github className="h-3 w-3" />
                        Source
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none -z-0"></div>
    </section>
  );
}
