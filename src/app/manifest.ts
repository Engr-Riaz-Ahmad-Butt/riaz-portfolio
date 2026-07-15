import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Riaz Ahmad Butt',
    short_name: 'Riaz',
    description: 'Full Stack Developer portfolio — MERN, Next.js, TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f7f6',
    theme_color: '#f4f7f6',
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
