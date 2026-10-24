import type { ComponentType } from 'react';
import type { IconType } from 'react-icons';
import { SiteLogo } from '@/components/SiteLogo';
import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiNextdotjs,
  SiPrometheus,
  SiPython,
  SiTerraform,
} from 'react-icons/si';
import { Activity, CloudUpload, Terminal } from 'lucide-react';

export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  icon: ComponentType<{ className?: string }>;
  stack: { name: string; icon: IconType }[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Portfolio & Notes',
    description:
      'This site: my profile and cheatsheets, built with Next.js and published automatically to GitHub Pages with CI/CD.',
    highlights: [
      'Static export served from GitHub Pages',
      'CI runs lint, type check and format check before every deploy',
      'Notes written in MDX with built-in search',
    ],
    status: 'live',
    icon: SiteLogo,
    stack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
    ],
    repo: 'https://github.com/pgr866/my-app',
    demo: 'https://pgr866.github.io/my-app',
    featured: true,
  },
  {
    title: 'Automated Cloud Deployment',
    description:
      'CI/CD pipelines that provision infrastructure and ship applications without manual steps.',
    highlights: [
      'Infrastructure defined as code and reviewed in pull requests',
      'Applications rolled out to a Kubernetes cluster on every merge',
    ],
    status: 'in-progress',
    icon: CloudUpload,
    stack: [
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
    repo: 'https://github.com/pgr866/automated-cloud-deployment',
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Metrics, dashboards and centralized logs for full visibility of every service.',
    highlights: [
      'Service metrics scraped and stored with Prometheus',
      'Dashboards and alerts for the key health indicators',
    ],
    status: 'in-progress',
    icon: Activity,
    stack: [
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
    ],
    repo: 'https://github.com/pgr866/monitoring-logging',
  },
  {
    title: 'Automation Scripts',
    description:
      'Scripts that handle routine cloud tasks, so nothing gets done by hand twice.',
    highlights: [
      'Small, single-purpose tools for repetitive operations',
      'Kept as a reference after moving the work to pipelines',
    ],
    status: 'archived',
    icon: Terminal,
    stack: [{ name: 'Python', icon: SiPython }],
    repo: 'https://github.com/pgr866/automation-scripts',
  },
];
