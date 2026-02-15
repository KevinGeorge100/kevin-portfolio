"use client";

import dynamic from 'next/dynamic';

// Lazy load the heavy WebGL SplashCursor component for better performance
const SplashCursor = dynamic(() => import('@/components/ui/splash-cursor'), {
  ssr: false,
  loading: () => null,
});

export function SplashCursorWrapper() {
  return <SplashCursor />;
}
