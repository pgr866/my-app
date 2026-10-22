import { readFile } from 'node:fs/promises';
import { marked } from 'marked';
import { gitConfig } from '@/lib/layout.shared';

export default async function HomePage() {
  const markdown = await readFile('README.md', 'utf8');
  const assetsUrl = `https://raw.githubusercontent.com/${gitConfig.user}/${gitConfig.repo}/${gitConfig.branch}/assets/`;
  const html = (await marked.parse(markdown))
    .replaceAll('src="assets/', `src="${assetsUrl}`)
    .replace(/<img([^>]*?)\sheight="(\d+)"/g, '<img$1 style="height:$2px;width:auto"');

  return (
    <article
      className="prose mx-auto w-full max-w-3xl px-4 py-10 [&_img]:my-0 [&_img]:inline [&_pre]:my-6 [&_pre]:whitespace-pre-wrap [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-fd-card [&_pre]:p-4 [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
