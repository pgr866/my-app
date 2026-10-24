'use client';

import { useEffect } from 'react';

// fades in the direct children of `selector` as they scroll into view;
// anything already on screen is left alone so there is no flash on load
export function ScrollReveal({ selector }: { selector: string }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.querySelector(selector);
    if (!root) return;

    const items = Array.from(root.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.setProperty('--reveal-delay', `${i * 45}ms`);
            el.classList.add('reveal-in');
            observer.unobserve(el);
          });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    for (const el of items) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add('reveal');
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of items) {
        el.classList.remove('reveal', 'reveal-in');
        el.style.removeProperty('--reveal-delay');
      }
    };
  }, [selector]);

  return null;
}
