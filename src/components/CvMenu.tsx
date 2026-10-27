'use client';

import { ChevronDown, FileText } from 'lucide-react';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from 'fumadocs-ui/components/ui/popover';

type Cv = { label: string; lang: string; href: string };

export function CvMenu({ cvs }: { cvs: Cv[] }) {
  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center gap-1.5 rounded-lg border border-fd-primary bg-fd-card px-3 py-1.5 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/80">
        <FileText className="size-4" /> CV
        <ChevronDown className="size-4 text-fd-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-(--radix-popover-trigger-width) min-w-0 flex-col gap-1 p-1"
      >
        {cvs.map(({ label, lang, href }) => (
          <PopoverClose key={href} asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang={lang}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-fd-accent"
            >
              {label}
            </a>
          </PopoverClose>
        ))}
      </PopoverContent>
    </Popover>
  );
}
