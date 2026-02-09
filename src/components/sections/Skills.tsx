
import { CheckCircle2, Cloud, Terminal, Shield, Users, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS Essentials", "Docker Containers", "Kubernetes Basics", "Terraform (IaC)", "Nginx Configuration"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Linux SysAdmin", "Git & GitHub Actions", "CI/CD Pipelines", "Shell Scripting", "Prometheus/Grafana"]
  },
  {
    title: "Development & Community",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "JavaScript/React", "Technical Writing", "Event Organizing", "Public Speaking"]
  }
];

const softSkills = ["Community Leadership", "Team Collaboration", "Problem Solving", "Adaptability", "Mentorship"];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Technical Prowess</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            A growing toolkit focused on modern infrastructure, automation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-card p-8 rounded-3xl shadow-sm reveal-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll">
          <div className="bg-primary p-8 md:p-12 rounded-3xl text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Community Engagement</h3>
              <p className="text-primary-foreground/80">
                Beyond technical skills, I am deeply involved in fostering inclusive and knowledge-sharing environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {softSkills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
