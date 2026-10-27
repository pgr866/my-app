import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import {
  appName,
  baseOptions,
  gitConfig,
  notesName,
  siteDescription,
  siteTitle,
  siteUrl,
} from '@/lib/layout.shared';
import './global.css';
import { Geist } from 'next/font/google';
import CustomSearchDialog from '@/components/SearchDialog';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HeaderSearchTrigger } from '@/components/SidebarTriggerSlot';
import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: { default: siteTitle, template: `%s | ${appName}` },
  description: siteDescription,
  applicationName: appName,
  authors: [{ name: appName, url: siteUrl }],
  creator: appName,
  keywords: [
    'DevOps',
    'Cloud Engineer',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'Infrastructure as Code',
    'Terraform',
    'GitHub Actions',
    'Next.js',
    'Portfolio',
  ],
  alternates: { canonical: './' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: appName,
    locale: 'en_US',
    images: [
      {
        url: 'og.png',
        width: 1200,
        height: 630,
        alt: `${appName}, DevOps & Cloud Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@pgr866',
    images: ['og.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: appName,
      description: siteDescription,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: appName,
      jobTitle: 'DevOps & Cloud Engineer',
      url: `${siteUrl}/`,
      image: `${siteUrl}/og.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Almería',
        addressCountry: 'ES',
      },
      sameAs: [
        `https://github.com/${gitConfig.user}`,
        'https://www.linkedin.com/in/pablo-gomez-rivas/',
        'https://x.com/pgr866',
      ],
      knowsAbout: [
        'DevOps',
        'Kubernetes',
        'Docker',
        'CI/CD',
        'Infrastructure as Code',
        'Cloud computing',
      ],
    },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const { links = [], ...options } = baseOptions();

  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <RootProvider search={{ SearchDialog: CustomSearchDialog }}>
          <ScrollToTop />
          <HomeLayout
            {...options}
            slots={{
              searchTrigger: {
                sm: HeaderSearchTrigger,
                full: FullSearchTrigger,
              },
            }}
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
