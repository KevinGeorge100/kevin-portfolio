
import { Card, CardContent } from "@/components/ui/card";
import { User, Code2, Rocket, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            I'm a full-stack developer with a passion for building clean, performant, and accessible user interfaces. With over 5 years of experience, I bridge the gap between complex backend systems and intuitive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <User className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Who I Am</h3>
              <p className="text-sm text-muted-foreground">
                A problem-solver at heart, I enjoy untangling complex requirements into simple solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-100">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">What I Do</h3>
              <p className="text-sm text-muted-foreground">
                I build robust web applications using React, Next.js, and modern cloud infrastructures.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-200">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">
                Collaborated with Fortune 500 companies and agile startups to launch high-traffic products.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow reveal-on-scroll delay-300">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Values</h3>
              <p className="text-sm text-muted-foreground">
                Commitment to quality, open communication, and constant learning are my cornerstones.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
