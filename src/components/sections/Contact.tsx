
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Kevin will get back to you soon!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 clay mb-4 text-xs font-bold text-primary uppercase tracking-widest">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you want to discuss Cloud infrastructure, collaborate on a community event, or just talk tech, feel free to drop a message!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 clay text-primary group-hover:clay-primary transition-all duration-300">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">Email Me</h4>
                  <p className="text-muted-foreground text-lg">kevin.george@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 clay text-primary group-hover:clay-primary transition-all duration-300">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">Based In</h4>
                  <p className="text-muted-foreground text-lg">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 clay text-primary group-hover:clay-primary transition-all duration-300">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">Socials</h4>
                  <p className="text-muted-foreground text-lg">LinkedIn, Twitter, GitHub</p>
                </div>
              </div>
            </div>
          </div>

          <div className="clay p-10 md:p-14 reveal-on-scroll delay-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold ml-2">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Kevin George" {...field} className="clay h-14 px-6 border-none bg-white/50 focus:bg-white transition-all text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold ml-2">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="kevin@example.com" {...field} className="clay h-14 px-6 border-none bg-white/50 focus:bg-white transition-all text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold ml-2">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What's on your mind?" 
                          {...field} 
                          className="clay p-6 border-none bg-white/50 focus:bg-white transition-all min-h-[180px] resize-none text-lg" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="clay-accent w-full h-16 text-xl font-bold hover:scale-[1.02] transition-all">
                  Send Message <Send className="ml-2 h-6 w-6" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-0"></div>
    </section>
  );
}
