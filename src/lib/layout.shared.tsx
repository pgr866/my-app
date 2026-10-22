import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export const appName = 'Pablo Gómez Rivas';
export const contentName = 'Content';

export const gitConfig = {
  user: 'pgr866',
  repo: 'my-app',
  branch: 'main',
};

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
