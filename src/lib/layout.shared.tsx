import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export const gitConfig = {
  user: 'pgr866',
  repo: 'my-app',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My App',
    },
    links: [
      {
        type: 'icon',
        label: 'GitHub',
        text: 'GitHub',
        url: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
        icon: <FaGithub className="mx-1" />,
        external: true,
      },
      {
        type: 'icon',
        label: 'LinkedIn',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pablo-gomez-rivas/',
        icon: <FaLinkedin className="mx-1" />,
        external: true,
      },
      {
        type: 'icon',
        label: 'X',
        text: 'X',
        url: 'https://x.com/pgr866',
        icon: <FaXTwitter className="mx-1" />,
        external: true,
      },
      {
        type: 'icon',
        label: 'Email',
        text: 'Email',
        url: 'mailto:pgr866@inlumine.ual.es',
        icon: <Mail className="mx-1" />,
      },
    ],
  };
}
