
import { Card, CardContent } from "@/components/ui/card";
import { User, Server, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            I'm a Computer Science undergraduate based in Kerala, India. My journey in tech is driven by a fascination with how large-scale systems operate and a deep commitment to giving back to the community through technical volunteering.
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
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-muted-foreground">
                Passionate about AWS, Docker, Kubernetes, and automating the software delivery lifecycle.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-200">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Volunteer</h3>
              <p className="text-sm text-muted-foreground">
                Active member of local tech communities, helping organize workshops and mentoring peers.
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
                Proudly based in Kerala, India, collaborating globally with open-source enthusiasts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
