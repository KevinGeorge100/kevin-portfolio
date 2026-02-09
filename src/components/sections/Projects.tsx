
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: "project-1",
    title: "Cloud-Native Manager",
    description: "A containerized microservices application demonstrating orchestration with Kubernetes.",
    tags: ["Docker", "Kubernetes", "Redis"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-2",
    title: "Automated CI/CD",
    description: "Multi-stage pipeline setup for automated testing, building, and deploying static sites.",
    tags: ["GitHub Actions", "AWS"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-3",
    title: "Community Portal",
    description: "Volunteer-led platform for organizing local tech meetups and resource sharing.",
    tags: ["Next.js", "Firebase"],
    link: "#",
    repo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-accent uppercase tracking-widest">
              My Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing my journey through cloud infrastructure, automation, and community projects.
            </p>
          </div>
          <Link href="https://github.com" className="clay px-6 py-3 text-primary font-bold hover:clay-primary hover:scale-105 transition-all flex items-center mt-8 md:mt-0">
            View All GitHub <ExternalLink className="ml-2 h-4 w-4" />
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
                <div className="clay p-4 group h-full transition-all duration-500">
                  <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-6">
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
                        <Badge key={tag} className="clay text-[10px] bg-white/50 text-primary uppercase font-bold px-3 py-1">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <Link href={project.link} className="flex-1 text-center py-2 clay-primary text-xs font-bold hover:scale-105 transition-all">
                        Demo
                      </Link>
                      <Link href={project.repo} className="flex-1 text-center py-2 clay text-xs font-bold hover:scale-105 transition-all">
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
