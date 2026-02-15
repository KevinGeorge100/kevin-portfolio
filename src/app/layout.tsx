
import type {Metadata} from 'next';
import './globals.css';
import { SplashCursorWrapper } from '@/components/SplashCursorWrapper';

export const metadata: Metadata = {
  title: 'Kevin George | DevOps Engineer',
  description: 'Portfolio of Kevin George, a DevOps Engineer and CS undergraduate based in Kerala, India, specializing in Cloud infrastructure and automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SplashCursorWrapper />
        {children}
      </body>
    </html>
  );
}
