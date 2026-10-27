import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about', '/projects', '/notes'].map((path) => ({
    url: `${siteUrl}${path}`,
    priority: path === '/' ? 1 : 0.8,
  }));
  const notes = source
    .getPages()
    .filter((page) => page.url !== '/notes')
    .map((page) => ({ url: `${siteUrl}${page.url}`, priority: 0.5 }));

  return [...pages, ...notes];
}
