import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HighTech Solar System',
    short_name: 'HighTech Solar System',
    description: 'Save up to 90% on electricity bills with HighTech Solar System.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
