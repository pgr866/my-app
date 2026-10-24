import { readFileSync } from 'node:fs';

const mimeTypes: Record<string, string> = {
  svg: 'image/svg+xml',
  png: 'image/png',
};

export function assetIcon(file: string) {
  const mime = mimeTypes[file.split('.').pop() ?? ''];
  const src = `data:${mime};base64,${readFileSync(`assets/${file}`).toString('base64')}`;

  return function AssetIcon({ className }: { className?: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" aria-hidden className={className} />;
  };
}
