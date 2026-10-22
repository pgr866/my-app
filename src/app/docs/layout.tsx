import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

const sidebarStyles = `
  /* header: search bar followed by the collapse button, without the title */
  #nd-sidebar > :first-child { display: grid; grid-template-columns: 1fr auto; align-items: center; }
  #nd-sidebar > :first-child > :first-child { display: contents; }
  #nd-sidebar > :first-child > :first-child > a { display: none; }
  #nd-sidebar > :first-child > :first-child > button { order: 1; margin-bottom: 0; }
  /* footer: spread the social icons evenly */
  #nd-sidebar > :last-child > div { justify-content: space-between; padding-inline-end: 2px; }
`;

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <>
      <style>{sidebarStyles}</style>
      <DocsLayout
        tree={source.getPageTree()}
        containerProps={{
          className: '[--fd-layout-width:100vw] min-h-[calc(var(--fd-docs-height)-var(--fd-banner-height))]',
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
