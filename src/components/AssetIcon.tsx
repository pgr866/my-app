import { readFileSync } from 'node:fs';

// turns an image from /assets into an icon component, inlined as a data URI so
// it needs no public folder and works under any base path
const mimeTypes: Record<string, string> = {
  svg: 'image/svg+xml',
  png: 'image/png',
};

export function assetIcon(file: string) {
  const mime = mimeTypes[file.split('.').pop() ?? ''];
  const src = `data:${mime};base64,${readFileSync(`assets/${file}`).toString('base64')}`;

  return function AssetIcon({ className }: { className?: string }) {
    // a data URI is already inlined, there is nothing for next/image to optimize
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" aria-hidden className={className} />;
  };
}
