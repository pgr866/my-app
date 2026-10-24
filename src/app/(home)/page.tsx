import {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactElement,
} from 'react';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { Markdown } from 'fumadocs-core/content/md';
import { remarkHeading } from 'fumadocs-core/mdx-plugins';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/components/mdx';
import { ScrollReveal } from '@/components/ScrollReveal';
import { gitConfig } from '@/lib/layout.shared';

const assetsUrl = `https://raw.githubusercontent.com/${gitConfig.user}/${gitConfig.repo}/${gitConfig.branch}/assets/`;

const resolveAsset = (src?: string) => src?.replace(/^assets\//, assetsUrl);

// in dev, inline local assets so unpushed images show up without GitHub
const inlineLocalAssets = (markdown: string) =>
  markdown.replace(/(src|srcset)="assets\/([^"]+)"/g, (match, attr, file) => {
    try {
      const mime = file.endsWith('.png') ? 'image/png' : 'image/svg+xml';
      const data = readFileSync(`assets/${file}`).toString('base64');
      return `${attr}="data:${mime};base64,${data}"`;
    } catch {
      return match;
    }
  });

export default async function HomePage() {
  const readme = await readFile('README.md', 'utf8');
  const markdown =
    process.env.NODE_ENV === 'development' ? inlineLocalAssets(readme) : readme;

  return (
    <DocsBody
      data-reveal-root
      className="mx-auto w-full max-w-[836px] px-4 pt-14 pb-10 [&_img]:my-0 [&_img]:inline [&_:is(h2,h3)_img]:align-middle [&_:is(h2,h3)_img]:me-2 [&_.projects_td]:px-6!"
    >
      <Markdown
        remarkPlugins={[remarkGfm, remarkHeading]}
        rehypePlugins={[rehypeRaw]}
        remarkRehypeOptions={{ allowDangerousHtml: true }}
        components={getMDXComponents({
          h1: (props) => <h1 {...props} />,
          h2: (props) => <h2 {...props} />,
          h3: (props) => <h3 {...props} />,
          td: ({
            vAlign,
            ...props
          }: ComponentProps<'td'> & { vAlign?: string }) => {
            const legacy: Record<string, string | undefined> = {
              valign: vAlign,
            };
            return <td {...props} {...legacy} />;
          },
          picture: ({ children }) => {
            const nodes = Children.toArray(children).filter(
              isValidElement,
            ) as ReactElement<{
              src?: string;
              srcSet?: string;
              alt?: string;
              height?: string | number;
            }>[];
            const dark = resolveAsset(
              nodes.find((n) => n.props.srcSet)?.props.srcSet,
            );
            const light = nodes.find((n) => n.props.src)?.props;
            const style = light?.height
              ? { height: Number(light.height), width: 'auto' }
              : undefined;
            return (
              <>
                <img
                  src={resolveAsset(light?.src)}
                  alt={light?.alt}
                  style={style}
                  className="dark:hidden!"
                />
                <img
                  src={dark}
                  alt={light?.alt}
                  style={style}
                  className="hidden! dark:inline!"
                />
              </>
            );
          },
          img: ({ src, height, alt, ...props }) => (
            <img
              {...props}
              alt={alt ?? ''}
              src={typeof src === 'string' ? resolveAsset(src) : src}
              style={
                height ? { height: Number(height), width: 'auto' } : undefined
              }
            />
          ),
        })}
      >
        {markdown}
      </Markdown>
      <ScrollReveal selector="[data-reveal-root]" />
    </DocsBody>
  );
}
