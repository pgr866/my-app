import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { NotesHeader } from '@/components/SidebarTriggerSlot';

export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      containerProps={{
        className:
          '[--fd-layout-width:100vw] min-h-[calc(var(--fd-docs-height)-var(--fd-banner-height))]',
        style: {
          '--fd-docs-row-3':
            'calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height) + 0.75rem)',
        } as React.CSSProperties,
      }}
      {...baseOptions()}
      themeSwitch={{ enabled: false }}
      nav={{ title: null }}
      slots={{ header: NotesHeader }}
    >
      {children}
    </DocsLayout>
  );
}
