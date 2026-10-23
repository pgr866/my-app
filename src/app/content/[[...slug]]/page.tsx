import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { contentName, gitConfig } from '@/lib/layout.shared';

export default async function Page(props: PageProps<'/content/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdown = [
    `# ${page.data.title}`,
    page.data.description,
    await page.data.getText('processed'),
  ]
    .filter(Boolean)
    .join('\n\n');

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton
          markdownUrl={`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`}
        />
        <ViewOptionsPopover
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(
  props: PageProps<'/content/[[...slug]]'>,
): Promise<Metadata> {
  const page = source.getPage((await props.params).slug);
  if (!page) notFound();

  const folders = getBreadcrumbItems(page.url, source.getPageTree())
    .map((item) => item.name)
    .filter((name): name is string => typeof name === 'string');

  return {
    title: [page.data.title, folders.at(-1) ?? contentName].join(' | '),
  };
}

export async function generateStaticParams() {
  return source.generateParams();
}
