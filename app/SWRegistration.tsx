'use client';
import { useEffect } from 'react';

export default function SWRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator /* && process.env.NODE_ENV === 'production'*/) {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('SW registered', reg.scope))
        .catch((err) => console.error('SW failed:', err));
    }
  }, []);

  return null;  // Invisible component
}