'use client';

import { useEffect, useRef, type ComponentProps } from 'react';

export function SpotlightGrid(props: ComponentProps<'section'>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = () =>
      Array.from(ref.current?.children ?? []) as HTMLElement[];

    const reset = (card: HTMLElement) => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    };

    const onMove = (event: PointerEvent) => {
      for (const card of cards()) {
        const rect = card.getBoundingClientRect();
        const hovered =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if ('spotlightHome' in card.dataset && !hovered) {
          reset(card);
          continue;
        }
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      }
    };

    const onLeave = () => cards().forEach(reset);

    window.addEventListener('pointermove', onMove);
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <section ref={ref} {...props} />;
}
