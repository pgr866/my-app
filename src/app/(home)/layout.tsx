import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  const { links = [], ...options } = baseOptions();

  return (
    <HomeLayout
      {...options}
      themeSwitch={{ enabled: false }}
      searchToggle={{ enabled: false }}
      links={[
        ...links,
        { type: 'custom', secondary: true, children: <ThemeSwitch className="shrink-0" /> },
        {
          type: 'custom',
          secondary: true,
          children: <FullSearchTrigger className="w-full rounded-full ps-2.5 max-w-[240px]" />,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
