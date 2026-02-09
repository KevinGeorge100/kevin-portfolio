
import { User, Server, Globe, ShieldCheck } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <User className="h-7 w-7" />,
      title: "CS Undergraduate",
      desc: "Pursuing my degree with a focus on core computing principles and emerging cloud tech.",
      delay: "delay-0"
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Cloud Infra",
      desc: "Passionate about AWS, Docker, Kubernetes, and managing complex scalable infrastructure.",
      delay: "delay-100"
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "DevOps Expert",
      desc: "Automating software delivery lifecycles through robust CI/CD and monitoring solutions.",
      delay: "delay-200"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Kerala, India",
      desc: "Proudly based in Kerala, collaborating globally on open-source and cloud initiatives.",
      delay: "delay-300"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-primary uppercase tracking-widest">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a computer science undergraduate based in <span className="text-primary font-bold">Kerala, India</span>. My journey in tech is driven by a fascination with how large-scale systems operate and a commitment to engineering excellence through automation and cloud-native practices.
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
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0"></div>
    </section>
  );
}
