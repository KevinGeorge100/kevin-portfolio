
import { Card, CardContent } from "@/components/ui/card";
import { User, Server, Globe, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            I'm a Computer Science undergraduate based in Kerala, India. My journey in tech is driven by a fascination with how large-scale systems operate and a commitment to engineering excellence through automation and cloud-native practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <User className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">CS Undergraduate</h3>
              <p className="text-sm text-muted-foreground">
                Currently pursuing my degree, focusing on core computing principles and emerging technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-100">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Passionate about AWS, Docker, Kubernetes, and managing scalable infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-200">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">DevOps Engineer</h3>
              <p className="text-sm text-muted-foreground">
                Expertise in automating the software delivery lifecycle through CI/CD and monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-300">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Proudly based in Kerala, India, collaborating globally on open-source and cloud projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
