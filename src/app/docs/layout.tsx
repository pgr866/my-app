import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      containerProps={{
        className:
          '[--fd-layout-width:100vw] [&_div:has(>[data-theme-toggle])]:justify-between [&_[data-theme-toggle]]:ms-0',
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
