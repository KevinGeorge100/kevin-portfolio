"use client";

import React, { useState, useCallback, useMemo } from "react";
import { MessageSquare, Send, X, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { devopsAssistant } from "@/ai/flows/devops-assistant";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
}

export const AiAssistant = React.memo(function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "welcome-msg",
      role: "ai", 
      text: "Hi! I'm Kevin's AI assistant. Ask me anything about his projects or skills!" 
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const userMsgId = `user-${Date.now()}`;
    setInput("");
    setMessages((prev) => [...prev, { id: userMsgId, role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await devopsAssistant({ question: userMsg });
      setMessages((prev) => [...prev, { 
        id: `ai-${Date.now()}`,
        role: "ai", 
        text: result.answer 
      }]);
    } catch (error) {
      setMessages((prev) => [...prev, { 
        id: `error-${Date.now()}`,
        role: "ai", 
        text: "Sorry, I'm having trouble connecting right now. Please try again later!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  }, [handleSend]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="clay w-[350px] h-[500px] rounded-[2rem] flex flex-col overflow-hidden border border-white/10 animate-in slide-in-from-bottom-10 fade-in duration-500 shadow-2xl">
          <div className="p-4 bg-primary text-black flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Bot className="h-5 w-5" />
              <span>DevOps Assistant</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-black/10 text-black">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4 bg-black/40">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn(
                  "flex flex-col max-w-[80%]",
                  msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                  <div className={cn(
                    "px-4 py-2 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                    msg.role === "user" ? "bg-accent text-white rounded-tr-none" : "bg-white/10 text-white/90 rounded-tl-none border border-white/5"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-primary text-xs font-bold animate-pulse">
                  <Loader2 className="h-3 w-3 animate-spin" /> Assistant is thinking...
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-white/10 bg-black/20 flex gap-2">
            <Input 
              placeholder="Ask a question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="clay border-none bg-white/5 focus-visible:ring-primary h-10 px-4 text-sm"
            />
            <Button size="icon" onClick={handleSend} disabled={isLoading} className="rounded-full bg-primary hover:bg-primary/80 text-black shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-primary text-black shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          <MessageSquare className="h-7 w-7 group-hover:rotate-12 transition-transform" />
        </Button>
      )}
    </div>
  );
});
