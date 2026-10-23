import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

interface JsxNode {
  attributes?: { name?: string; value?: unknown }[];
  children?: unknown[];
  value?: string;
  data?: object;
}

const textOf = (node: JsxNode): string =>
  node.value ??
  (node.children as JsxNode[] | undefined)?.map(textOf).join(' ') ??
  '';

export default defineConfig({
  mdxOptions: {
    remarkStructureOptions: {
      types: [
        'heading',
        'paragraph',
        'blockquote',
        'table',
        'mdxJsxFlowElement',
        'code',
      ],
      filterElement(node: JsxNode) {
        const texts = (node.attributes ?? [])
          .filter(
            (attr) =>
              (attr.name === 'title' || attr.name === 'description') &&
              typeof attr.value === 'string',
          )
          .map((attr) => attr.value as string);
        if (texts.length > 0) {
          const content = [...texts, textOf(node)].join(' ').trim();
          node.data = {
            ...node.data,
            structuredData: { headings: [], contents: [{ content }] },
          };
        }
        return false;
      },
    },
  },
});
