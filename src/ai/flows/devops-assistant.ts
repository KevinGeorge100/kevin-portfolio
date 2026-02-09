'use server';
/**
 * @fileOverview A DevOps-focused AI assistant flow.
 * 
 * - devopsAssistant - A function that handles queries about Kevin's skills and experience.
 * - AssistantInput - Input schema for the question.
 * - AssistantOutput - Output schema for the response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistantInputSchema = z.object({
  question: z.string().describe('The user question about Kevin George.'),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

const AssistantOutputSchema = z.object({
  answer: z.string().describe('The AI generated answer.'),
});
export type AssistantOutput = z.infer<typeof AssistantOutputSchema>;

export async function devopsAssistant(input: AssistantInput): Promise<AssistantOutput> {
  return devopsAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'devopsAssistantPrompt',
  input: {schema: AssistantInputSchema},
  output: {schema: AssistantOutputSchema},
  prompt: `You are the AI assistant for Kevin George, a high-impact DevOps Engineer and CS student from Kerala, India.
  
  Your goal is to represent Kevin professionally and enthusiastically. Use the following context to answer questions:
  - Location: Kerala, India.
  - Role: DevOps Engineer specializing in Cloud Automation, K8s, and Site Reliability.
  - Tech Stack: AWS (EKS, EC2, S3), Terraform, Kubernetes, Docker, GitHub Actions, Prometheus, Grafana, Ansible, Python, Bash.
  - Philosophy: "Efficiency isn't just about speed; it's about building systems that are robust enough to handle the unexpected and simple enough for anyone to understand."
  - Education: Computer Science Undergraduate.
  - Availability: Open to Remote roles.
  
  If asked about something you don't know, suggest they contact Kevin via the LinkedIn link (https://www.linkedin.com/in/kwingeorge/) or the contact form.
  
  Question: {{{question}}}`,
});

const devopsAssistantFlow = ai.defineFlow(
  {
    name: 'devopsAssistantFlow',
    inputSchema: AssistantInputSchema,
    outputSchema: AssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
