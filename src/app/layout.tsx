import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { appName, baseOptions, notesName } from '@/lib/layout.shared';
import './global.css';
import { Geist } from 'next/font/google';
import CustomSearchDialog from '@/components/SearchDialog';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: appName, template: `%s | ${appName}` },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const { links = [], ...options } = baseOptions();

  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col">
        <RootProvider search={{ SearchDialog: CustomSearchDialog }}>
          <HomeLayout
            {...options}
            className="[--fd-banner-height:3.5rem] [--fd-layout-width:100vw] [&_#nd-nav>div>div>nav]:px-6 [&_#nd-nav_a[aria-label]_svg]:mx-1 [&_#nd-nav_a[aria-label]_svg]:size-[15.5px] [&_#nd-nav_div.flex-1]:flex-row-reverse [&_#nd-nav_div.flex-1]:justify-start"
            links={[
              { text: 'About me', url: '/about', active: 'nested-url' },
              { text: 'Projects', url: '/projects', active: 'nested-url' },
              { text: notesName, url: '/notes', active: 'nested-url' },
              ...links,
            ]}
          >
            {children}
          </HomeLayout>
        </RootProvider>
      </body>
    </html>
  );
}
