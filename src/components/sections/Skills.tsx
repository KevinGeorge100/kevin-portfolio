import { CheckCircle2, Cloud, Terminal, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const skillCategories = [
  {
    title: "Cloud & Infra",
    icon: <Cloud className="h-7 w-7" />,
    skills: ["AWS (EKS, EC2, S3)", "Terraform (IaC)", "Kubernetes & Helm", "Docker Orchestration", "Nginx & Load Balancing"],
    variant: "clay-primary"
  },
  {
    title: "DevOps & Tooling",
    icon: <Terminal className="h-7 w-7" />,
    skills: ["CI/CD (GitHub Actions)", "Prometheus & Grafana", "ArgoCD (GitOps)", "Linux SysAdmin", "Ansible Configuration"],
    variant: "clay"
  },
  {
    title: "Development",
    icon: <ShieldCheck className="h-7 w-7" />,
    skills: ["Bash/Shell Scripting", "Python for Automation", "Golang Basics", "Security Best Practices", "REST API Context"],
    variant: "clay-accent"
  }
];

const softSkills = ["System Architecture", "Incident Management", "Team Leadership", "Cost Optimization", "Mentorship"];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-black text-primary uppercase tracking-[0.2em] border-white/10 rounded-full">
            Technical Stack
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter uppercase italic">
            Expertise <span className="text-primary">Pack.</span>
          </h2>
          <p className="text-lg text-white/50 font-medium max-w-xl mx-auto">
            A comprehensive toolkit focused on high-availability infrastructure and automated developer workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <SpotlightCard 
              key={category.title} 
              className="reveal-on-scroll" 
              style={{ transitionDelay: `${index * 150}ms` }}
              spotlightColor={category.variant === 'clay-primary' ? 'rgba(121, 255, 0, 0.1)' : 'rgba(168, 85, 247, 0.1)'}
            >
              <div className={`clay p-10 h-full border border-white/5 hover:border-white/20 transition-all duration-500 group rounded-[3rem]`}>
                <div className={`mb-8 inline-flex p-5 rounded-[2rem] clay bg-white/5 text-primary group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight uppercase italic">{category.title}</h3>
                <ul className="space-y-4">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center text-white/40 group-hover:text-white/70 transition-colors font-bold text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="reveal-on-scroll">
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)">
            <div className="clay p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 rounded-[4rem] bg-white/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
              <div className="max-w-md text-center md:text-left relative z-10">
                <h3 className="text-3xl font-black text-white mb-4 uppercase italic">Engineering Excellence</h3>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  I prioritize system observability, automated disaster recovery, and reducing mean time to recovery (MTTR).
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end relative z-10">
                {softSkills.map(skill => (
                  <span key={skill} className="px-5 py-2.5 clay bg-white/5 border border-white/10 text-white/80 font-black text-xs uppercase tracking-widest backdrop-blur-md hover:bg-primary hover:text-black transition-all cursor-default rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-accent/5 rounded-full blur-[150px] -z-0"></div>
    </section>
  );
}
