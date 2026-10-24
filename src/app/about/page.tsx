import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About me' };

export default function AboutPage() {
  return <main className="mx-auto w-full max-w-[836px] flex-1 px-4 py-10" />;
}
