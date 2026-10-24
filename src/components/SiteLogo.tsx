import { cn } from '@/lib/cn';

export function SiteLogo({ className }: { className?: string }) {
  const mask = `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon.svg) center / contain no-repeat`;
  return (
    <span
      aria-hidden
      className={cn('inline-block aspect-[7/10] bg-current', className)}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
