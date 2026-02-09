
import { CheckCircle2, Cloud, Terminal, Code } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const skillCategories = [
  {
    title: "Infrastructure",
    icon: <Cloud className="h-7 w-7" />,
    skills: ["AWS Essentials", "Docker Containers", "Kubernetes Basics", "Terraform (IaC)", "Nginx Config"],
    variant: "clay-primary"
  },
  {
    title: "DevOps Tools",
    icon: <Terminal className="h-7 w-7" />,
    skills: ["Linux SysAdmin", "Git & CI/CD", "Shell Scripting", "GitHub Actions", "Monitoring"],
    variant: "clay"
  },
  {
    title: "Community",
    icon: <Code className="h-7 w-7" />,
    skills: ["Python", "JS / React", "Technical Writing", "Event Organizing", "Public Speaking"],
    variant: "clay-accent"
  }
];

const softSkills = ["Leadership", "Collaboration", "Problem Solving", "Adaptability", "Mentorship"];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-primary uppercase tracking-widest">
            My Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">Technical Prowess</h2>
          <p className="text-xl text-muted-foreground">
            A growing toolkit focused on modern infrastructure, automation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, index) => (
            <SpotlightCard 
              key={category.title} 
              className="reveal-on-scroll" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`clay p-10 h-full hover:scale-[1.02] transition-all duration-300`}>
                <div className={`mb-8 inline-flex p-4 ${category.variant === 'clay-primary' ? 'clay-primary' : category.variant === 'clay-accent' ? 'clay-accent' : 'clay text-primary'}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-8">{category.title}</h3>
                <ul className="space-y-5">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center text-muted-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-4 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="reveal-on-scroll">
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className="clay-primary p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-3xl font-extrabold mb-4">Community Engagement</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Beyond technical skills, I am deeply involved in fostering inclusive and knowledge-sharing environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                {softSkills.map(skill => (
                  <span key={skill} className="px-6 py-3 clay bg-white/20 border-white/30 text-white font-bold text-sm backdrop-blur-md hover:scale-110 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/2 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
}
