
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "EcoTrack Analytics",
    description: "A comprehensive dashboard for monitoring environmental metrics across global data points.",
    tags: ["Next.js", "D3.js", "TypeScript", "Tailwind"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-2",
    title: "FitPulse Mobile",
    description: "End-to-end mobile application for personal fitness tracking with real-time biometric sync.",
    tags: ["React Native", "Firebase", "HealthKit"],
    link: "#",
    repo: "#"
  },
  {
    id: "project-3",
    title: "Nexus E-Commerce",
    description: "High-performance headless commerce platform with custom checkout and inventory management.",
    tags: ["React", "Node.js", "GraphQL", "Postgres"],
    link: "#",
    repo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              A selection of my recent works where design meets functionality.
            </p>
          </div>
          <div className="h-px bg-border flex-grow mx-8 hidden md:block mb-4"></div>
          <Link href="#" className="text-primary font-medium hover:underline flex items-center mt-4 md:mt-0">
            View All Work <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="group overflow-hidden border-none shadow-lg reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={img?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex gap-2 flex-wrap mb-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-normal text-[10px] uppercase tracking-wider">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-headline font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-4 pt-0">
                  <Link href={project.link} className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href={project.repo} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Code <Github className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
