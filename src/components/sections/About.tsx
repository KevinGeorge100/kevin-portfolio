import { Terminal, Server, Cpu, Code2, MapPin, Globe2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Magnetic } from "@/components/ui/magnetic";

export function About() {
  const cards = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Platform Engineering",
      desc: "Building internal developer platforms that simplify complex cloud deployments and improve DX.",
      color: "var(--primary)"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Orchestration",
      desc: "Hands-on experience with Kubernetes, Docker, and managing resilient microservice fleets.",
      color: "var(--accent)"
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Automation (IaC)",
      desc: "Treating infrastructure as code using Terraform and Ansible for reproducible environments.",
      color: "var(--primary)"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full-Stack Context",
      desc: "Understanding the developer workflow to build better pipelines and developer experiences.",
      color: "var(--accent)"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 clay mb-6 text-xs font-black text-primary uppercase tracking-[0.2em] rounded-full border border-white/10">
              Personal Brief
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              BEYOND THE <span className="text-primary">TERMINAL.</span>
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-xl text-white/70 leading-relaxed font-medium">
                I'm a computer science undergraduate based in <span className="text-white font-bold bg-primary/20 px-2 py-0.5 rounded italic">Kerala, India</span>. 
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                I bridge the gap between software development and IT operations, focusing on reliability, scalability, and the developer experience. My goal is to make cloud infrastructure invisible so developers can focus on what they do best: <span className="text-accent italic font-bold">building value.</span>
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 clay rounded-full text-xs font-bold text-white/80 border border-white/5">
                  <MapPin className="h-4 w-4 text-primary" /> Kerala, India
                </div>
                <div className="flex items-center gap-2 px-4 py-2 clay rounded-full text-xs font-bold text-white/80 border border-white/5">
                  <Globe2 className="h-4 w-4 text-accent" /> Open to Remote
                </div>
              </div>
            </div>
          </div>

          <div className="relative reveal-on-scroll delay-200">
            {/* Elegant Philosophy Block */}
            <div className="clay p-8 md:p-12 rounded-[3rem] border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-8 text-black">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight uppercase">Philosophy</h3>
                <p className="text-lg text-white/60 leading-relaxed font-medium">
                  "Efficiency isn't just about speed; it's about building systems that are robust enough to handle the unexpected and simple enough for anyone to understand."
                </p>
                <div className="mt-8 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12">
              <Magnetic strength={0.2}>
                <div className="w-32 h-32 bg-accent rounded-full border-4 border-background flex items-center justify-center rotate-12 shadow-2xl">
                  <span className="text-black font-black text-center text-xs uppercase leading-tight tracking-widest">
                    Reliability <br/> First
                  </span>
                </div>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <SpotlightCard 
              key={i} 
              className="reveal-on-scroll" 
              style={{ transitionDelay: `${i * 100}ms` }}
              spotlightColor={card.color === 'var(--primary)' ? 'rgba(var(--primary), 0.1)' : 'rgba(var(--accent), 0.1)'}
            >
              <div className="clay p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-500 group">
                <div className="mb-6 p-4 w-fit rounded-2xl clay bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                  {card.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
      
      {/* Background Decors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] -z-0"></div>
    </section>
  );
}
