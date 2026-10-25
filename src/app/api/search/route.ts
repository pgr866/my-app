import { readFileSync } from 'node:fs';
import { source } from '@/lib/source';
import { slugify } from '@/lib/slug';
import { aboutText, education, experience, skills } from '@/data/about';
import { projects, projectsText } from '@/data/projects';
import { createSearchAPI } from 'fumadocs-core/search/server';
import { structure, type StructuredData } from 'fumadocs-core/mdx-plugins';

export const dynamic = 'force-static';
export const revalidate = false;

const clean = (text: string) =>
  text
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
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

const text = (html: string) => clean(html).replace(/\s+/g, ' ');

const tags = (html: string, tag: string) =>
  [
    ...html.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'g')),
  ].map((m) => m[1]);

const alts = (html: string) =>
  [...html.matchAll(/<img\b[^>]*\balt="([^"]+)"/g)].map((m) => m[1]);

function readmeTables(markdown: string): StructuredData {
  const headings: StructuredData['headings'] = [];
  const contents: StructuredData['contents'] = [];
  const add = (title: string, body: string[]) => {
    const id = slugify(title);
    if (!id || !body.length) return;
    headings.push({ id, content: title });
    contents.push(...body.map((content) => ({ heading: id, content })));
  };

  const html = markdown.replace(/<!--[\s\S]*?-->/g, '');
  for (const [, table] of html.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)) {
    let columns: string[] = [];
    for (const row of tags(table, 'tr')) {
      const ths = tags(row, 'th').map(text);
      if (ths.length) {
        columns = ths;
        continue;
      }
      tags(row, 'td').forEach((cell, i) => {
        const title = text(tags(cell, 'h3')[0] ?? '') || columns[i];
        if (!title) return;
        const paragraphs = tags(cell, 'p').map(text).filter(Boolean);
        const names = alts(cell).filter((alt) => alt !== title);
        add(
          title,
          paragraphs.length
            ? [...paragraphs, names.join(', ')]
            : [names.join(', ')],
        );
      });
    }
  }
  return { headings, contents };
}

function homeWithTables(): StructuredData {
  const base = homeStructuredData();
  const tables = readmeTables(readFileSync('README.md', 'utf8'));
  return {
    headings: [...base.headings, ...tables.headings],
    contents: [...base.contents, ...tables.contents],
  };
}

const home = homeWithTables();

function pageData(
  sections: { title: string; body: (string | undefined)[] }[],
): StructuredData {
  return {
    headings: sections.map(({ title }) => ({
      id: slugify(title),
      content: title,
    })),
    contents: sections.flatMap(({ title, body }) =>
      body
        .filter((content): content is string => !!content)
        .map((content) => ({ heading: slugify(title), content })),
    ),
  };
}

const aboutData = pageData([
  {
    title: 'About me',
    body: [
      `${aboutText.greeting} ${aboutText.name}`,
      aboutText.role,
      aboutText.location,
      aboutText.summary,
    ],
  },
  { title: 'How I got here', body: aboutText.story },
  ...[
    {
      title: 'Experience',
      items: experience.map((e) => ({ ...e, sub: e.org, meta: e.type })),
    },
    {
      title: 'Education',
      items: education.map((e) => ({
        ...e,
        role: e.title,
        sub: e.org,
        meta: e.detail,
        points: [] as string[],
      })),
    },
  ].map(({ title, items }) => ({
    title,
    body: items.flatMap((e) => [
      `${e.role} · ${e.sub}`,
      e.meta,
      e.period,
      ...e.points,
    ]),
  })),
  ...skills.map(({ title, groups }) => ({
    title,
    body: groups.map(
      ({ label, items }) => `${label}: ${items.map((i) => i.name).join(', ')}`,
    ),
  })),
  {
    title: 'Languages',
    body: aboutText.languages.map((l) => `${l.name}: ${l.detail}`),
  },
  {
    title: aboutText.cta.title,
    body: [aboutText.cta.text],
  },
]);

const projectsData = pageData([
  { title: 'Projects', body: [projectsText.intro] },
  ...projects.map((p) => ({
    title: p.title,
    body: [
      p.kicker,
      p.description,
      ...p.highlights,
      p.stack.map((t) => t.name).join(', '),
    ],
  })),
]);

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
    {
      title: 'About me',
      content: aboutText.summary,
      url: '/about',
      id: '/about',
      structuredData: aboutData,
    },
    {
      title: 'Projects',
      content: projects.map((p) => p.title).join(', '),
      url: '/projects',
      id: '/projects',
      structuredData: projectsData,
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
