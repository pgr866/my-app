import { docs } from 'collections/server';
import { loader, type LoaderPlugin } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { SiDocker, SiGit, SiKubernetes } from 'react-icons/si';

// Brand icons that Lucide does not provide, usable as `icon: "Docker"`
const brandIcons = { Docker: SiDocker, Git: SiGit, Kubernetes: SiKubernetes };

// Resolves `icon` names against the brand icons first, then Lucide
const iconsPlugin: LoaderPlugin = {
  name: 'app:icons',
  transformPageTree: (() => {
    const replaceIcon = <T extends { icon?: unknown }>(node: T): T => {
      if (typeof node.icon === 'string') {
        const Icon =
          brandIcons[node.icon as keyof typeof brandIcons] ??
          icons[node.icon as keyof typeof icons];
        if (!Icon) console.warn(`Unknown icon detected: ${node.icon}`);
        node.icon = Icon ? createElement(Icon) : undefined;
      }
      return node;
    };
    return { file: replaceIcon, folder: replaceIcon, separator: replaceIcon };
  })(),
};

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/notes',
  source: docs.toFumadocsSource(),
  plugins: [iconsPlugin],
});
