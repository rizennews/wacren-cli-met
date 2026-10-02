import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = 'https://climet.wacren.net';
const locales = ['en', 'fr', 'pt'];
const routes = [
  '',
  '/activities',
  '/community',
  '/climb-champions',
  '/contact',
  '/impact',
  '/precursor',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            fr: `${baseUrl}/fr${route}`,
            pt: `${baseUrl}/pt${route}`,
          },
        },
      });
    });
  });

  return entries;
}

