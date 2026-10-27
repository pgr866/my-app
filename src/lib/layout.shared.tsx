import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export const appName = 'Pablo Gómez Rivas';
export const notesName = 'Notes';

export const gitConfig = {
  user: 'pgr866',
  repo: 'my-app',
  branch: 'main',
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  `https://${gitConfig.user}.github.io/${gitConfig.repo}`
).replace(/\/+$/, '');
export const siteTitle = `${appName} | DevOps & Cloud Engineer`;
export const siteDescription =
  'Portfolio of Pablo Gómez Rivas, DevOps & Cloud Engineer specializing in CI/CD automation, infrastructure as code and container orchestration, with projects and technical notes on Docker, Git and Kubernetes.';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span
            aria-hidden
            className="h-[22px] aspect-[7/10] bg-current me-2"
            style={{
              mask: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon.svg) center / contain no-repeat`,
              WebkitMask: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon.svg) center / contain no-repeat`,
            }}
          />
          {appName}
        </>
      ),
    },
    links: [
      {
        type: 'icon',
        label: 'GitHub',
        text: 'GitHub',
        url: `https://github.com/${gitConfig.user}`,
        icon: <FaGithub />,
        external: true,
      },
      {
        type: 'icon',
        label: 'LinkedIn',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pablo-gomez-rivas/',
        icon: <FaLinkedin />,
        external: true,
      },
      {
        type: 'icon',
        label: 'X',
        text: 'X',
        url: 'https://x.com/pgr866',
        icon: <FaXTwitter />,
        external: true,
      },
      {
        type: 'icon',
        label: 'Discord',
        text: 'Discord',
        url: 'https://discordapp.com/users/689848538859044923/',
        icon: <FaDiscord className="scale-[1.08]" />,
        external: true,
      },
      {
        type: 'icon',
        label: 'Email',
        text: 'Email',
        url: 'mailto:pgr866@gmail.com',
        icon: <Mail className="scale-[1.08]" />,
      },
    ],
  };
}
