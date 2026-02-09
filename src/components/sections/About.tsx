import { Terminal, Server, Cpu, Code2 } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "Platform Engineering",
      desc: "Building internal developer platforms that simplify complex cloud deployments.",
      delay: "delay-0"
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Orchestration",
      desc: "Hands-on experience with Kubernetes, Docker, and managing microservice fleets.",
      delay: "delay-100"
    },
    {
      icon: <Terminal className="h-7 w-7" />,
      title: "Automation (IaC)",
      desc: "Treating infrastructure as code using Terraform and Ansible for reproducible environments.",
      delay: "delay-200"
    },
    {
      icon: <Code2 className="h-7 w-7" />,
      title: "Full-Stack Context",
      desc: "Understanding the developer workflow to build better pipelines and developer experiences.",
      delay: "delay-300"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-primary uppercase tracking-widest">
            Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a computer science undergraduate based in <span className="text-primary font-bold">Kerala, India</span>. I bridge the gap between software development and IT operations, focusing on <span className="text-accent font-bold">reliability, scalability, and speed</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className={`clay p-8 text-center hover:scale-105 transition-all duration-300 reveal-on-scroll ${card.delay}`}>
              <div className="mb-6 inline-flex p-4 clay-primary">
                {card.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0"></div>
    </section>
  );
}