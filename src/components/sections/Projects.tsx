import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Terminal, Activity, Zap, Cpu, Server, Shield } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: "project-1",
    title: "K8s Microservices Lab",
    description: "A complete platform-as-a-service prototype featuring automated horizontal scaling, Redis caching, and integrated Istio service mesh for traffic management.",
    tags: ["Kubernetes", "Docker", "Prometheus", "Helm"],
    link: "https://github.com/KevinGeorge100",
    repo: "https://github.com/KevinGeorge100",
    status: "Healthy",
    metrics: "99.9% Uptime",
    icon: <Server className="h-5 w-5" />
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
    icon: <Zap className="h-5 w-5" />
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
    icon: <Activity className="h-5 w-5" />
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
              Production <span className="text-primary">Ready.</span>
            </h2>
            <p className="text-xl text-white/50 font-medium leading-relaxed">
              Deep dives into automation, platform resilience, and cloud-native architecture. Every project is engineered for stability and high availability.
            </p>
          </div>
          
          <Link 
            href="https://github.com/KevinGeorge100" 
            target="_blank" 
            className="group mt-12 lg:mt-0 flex items-center gap-4 px-8 py-4 clay rounded-full text-white font-bold hover:bg-white/5 hover:scale-105 transition-all border border-white/10"
          >
            <Github className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
            <span>View All Infrastructure</span>
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
                spotlightColor="rgba(var(--primary), 0.1)"
              >
                <div className="clay p-3 group h-full transition-all duration-500 border border-white/5 bg-white/[0.02] flex flex-col rounded-[2.5rem] overflow-hidden">
                  
                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden m-1 border border-white/10 shadow-2xl">
                    <Image
                      src={img?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      priority={index === 0}
                    />
                    
                    {/* Status Badge Overlay */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-2 px-3 py-1.5 clay-primary rounded-full backdrop-blur-md border border-black/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-black">{project.status}</span>
                      </div>
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content Area */}
                  <div className="px-6 py-8 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-black text-primary uppercase tracking-[0.15em] bg-primary/10 px-2 py-1 rounded border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/30 text-[9px] font-black uppercase tracking-widest">
                        <Activity className="h-3 w-3 text-accent" />
                        {project.metrics}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                      <span className="p-2 rounded-xl bg-white/5 text-primary">
                        {project.icon}
                      </span>
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-white/40 mb-10 line-clamp-3 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                      {project.description}
                    </p>

                    <div className="mt-auto flex gap-3">
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="flex-1 text-center py-4 clay-primary rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-black flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-primary/10"
                      >
                        <Zap className="h-3 w-3" />
                        Live Demo
                      </Link>
                      <Link 
                        href={project.repo} 
                        target="_blank" 
                        className="flex-1 text-center py-4 clay rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
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
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10"></div>
    </section>
  );
}
