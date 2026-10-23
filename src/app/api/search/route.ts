import { readFileSync } from 'node:fs';
import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';
import { structure, type StructuredData } from 'fumadocs-core/mdx-plugins';

export const dynamic = 'force-static';
export const revalidate = false;

const clean = (text: string) =>
  text
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/^```.*\n?|\n?```$/g, '')
    .replace(/\*\*/g, '')
    .trim();

function homeStructuredData(): StructuredData {
  const data = structure(readFileSync('README.md', 'utf8'), [], {
    types: ['heading', 'paragraph', 'blockquote', 'table', 'code'],
  });
  return {
    headings: data.headings.map((h) => ({ ...h, content: clean(h.content) })),
    contents: data.contents
      .map((c) => ({ ...c, content: clean(c.content) }))
      .filter((c) => c.content),
  };
}

const home = homeStructuredData();

export const { staticGET: GET } = createSearchAPI('advanced', {
  language: 'english',
  indexes: [
    {
      title: 'Home',
      content: home.contents[0]?.content ?? '',
      url: '/',
      id: '/',
      structuredData: home,
    },
    ...source.getPages().map((page) => ({
      title: page.data.title,
      content:
        page.data.description ??
        page.data.structuredData.contents[0]?.content ??
        '',
      url: page.url,
      id: page.url,
      structuredData: {
        ...page.data.structuredData,
        contents: [
          ...(page.data.description
            ? [{ heading: '', content: page.data.description }]
            : []),
          ...page.data.structuredData.contents,
        ],
      },
    })),
  ],
});
