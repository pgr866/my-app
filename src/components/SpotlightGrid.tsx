'use client';

import { useEffect, useRef, type ComponentProps } from 'react';

// tracks the pointer and exposes it to each direct child as --mx / --my, so the
// children can paint a light that follows the mouse. A child marked with
// data-spotlight-home keeps its light on: it follows the pointer only while it is
// hovered and eases back to its default corner (set in CSS) otherwise.
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
