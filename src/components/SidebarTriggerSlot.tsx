'use client';

import { useSyncExternalStore, type ComponentProps } from 'react';
import { createPortal } from 'react-dom';
import { SidebarIcon } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';
import { SearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { cn } from '@/lib/cn';

const SLOT_ID = 'sidebar-trigger-slot';

// Search button of the site header, with a mount point for the sidebar button
export function HeaderSearchTrigger(
  props: ComponentProps<typeof SearchTrigger>,
) {
  return (
    <>
      <span id={SLOT_ID} className="contents" />
      <SearchTrigger {...props} />
    </>
  );
}

// Replaces the docs mobile header: its sidebar button moves to the site header
export function NotesHeader() {
  const { slots } = useDocsLayout();
  const target = useSyncExternalStore(
    () => () => {},
    () => document.getElementById(SLOT_ID),
    () => null,
  );

  if (!target || !slots.sidebar) return null;
  return createPortal(
    <slots.sidebar.trigger
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon-sm', className: 'p-2' }),
        'md:hidden',
      )}
    >
      <SidebarIcon />
    </slots.sidebar.trigger>,
    target,
  );
}
