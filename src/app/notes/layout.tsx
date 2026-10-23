import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

const sidebarStyles = `
  /* sidebar paints above the header fade so it does not get blurred */
  [data-sidebar-placeholder] { z-index: 45; }
  /* sidebar background keeps the neutral card color */
  #nd-sidebar { --color-fd-card: hsl(0, 0%, 94.7%); }
  .dark #nd-sidebar { --color-fd-card: hsl(0, 0%, 9.8%); }
  /* selected item: text color tinted with the primary, in medium weight */
  #nd-sidebar a[data-active="true"] { color: color-mix(in oklab, var(--color-fd-primary) 45%, var(--color-fd-foreground)); font-weight: 500; }
  /* header: search bar followed by the collapse button, without the title */
  #nd-sidebar > :first-child { display: grid; grid-template-columns: 1fr auto; align-items: center; }
  #nd-sidebar > :first-child > :first-child { display: contents; }
  #nd-sidebar > :first-child > :first-child > a { display: none; }
  #nd-sidebar > :first-child > :first-child > button { order: 1; margin-bottom: 0; }
  /* footer: spread the social icons evenly */
  #nd-sidebar > :last-child > div { justify-content: space-between; padding-inline-end: 2px; }
`;

export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <>
      <style>{sidebarStyles}</style>
      <DocsLayout
        tree={source.getPageTree()}
        containerProps={{
          className:
            '[--fd-layout-width:100vw] min-h-[calc(var(--fd-docs-height)-var(--fd-banner-height))]',
        }}
        {...baseOptions()}
        themeSwitch={{ enabled: false }}
        nav={{ title: null }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
