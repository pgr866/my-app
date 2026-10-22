import { readFile } from 'node:fs/promises';
import { Markdown } from 'fumadocs-core/content/md';
import rehypeRaw from 'rehype-raw';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/components/mdx';
import { gitConfig } from '@/lib/layout.shared';

const assetsUrl = `https://raw.githubusercontent.com/${gitConfig.user}/${gitConfig.repo}/${gitConfig.branch}/assets/`;

export default async function HomePage() {
  const markdown = await readFile('README.md', 'utf8');

  return (
    <DocsBody className="mx-auto w-full max-w-3xl px-4 py-10 [&_img]:my-0 [&_img]:inline">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        remarkRehypeOptions={{ allowDangerousHtml: true }}
        components={getMDXComponents({
          img: ({ src, height, ...props }) => (
            <img
              {...props}
              src={typeof src === 'string' ? src.replace(/^assets\//, assetsUrl) : src}
              style={height ? { height: Number(height), width: 'auto' } : undefined}
            />
          ),
        })}
      >
        {markdown}
      </Markdown>
    </DocsBody>
  );
}
