import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'YandexBot', 'DuckDuckBot', 'Baiduspider', 'facebookexternalhit', 'Twitterbot'],
        allow: '/',
      },
    ],
    sitemap: 'https://climet.wacren.net/sitemap.xml',
    host: 'https://climet.wacren.net',
  };
}

