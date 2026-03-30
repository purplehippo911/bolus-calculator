import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bolus Calculator',
    short_name: 'BolusCalc',
    description: 'Calculate your insulin bolus dosage',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      { src: '/favicon.ico', sizes: '192x192', type: 'favicon/ico' },
      { src: '/favicon.ico', sizes: '512x512', type: 'favicon/ico' },
    ],
  };
}