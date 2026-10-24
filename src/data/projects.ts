import type { ComponentType } from 'react';
import type { IconType } from 'react-icons';
import { assetIcon } from '@/components/AssetIcon';
import { SiteLogo } from '@/components/SiteLogo';
import {
  SiAngular,
  SiArgo,
  SiCilium,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGithubpages,
  SiGooglecloud,
  SiGrafana,
  SiIonic,
  SiK6,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTerraform,
  SiTrivy,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const GoogleCloudLogo = assetIcon('gcp.svg');
const SoccerLogo = assetIcon('msc-soccer-project.png');
const StratifyLogo = assetIcon('stratify.svg');

export type ProjectStatus = 'live' | 'in-progress' | 'completed';

export type Project = {
  title: string;
  kicker?: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  icon: ComponentType<{ className?: string }>;
  stack: { name: string; icon: IconType }[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  wide?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Resilience & Security in Microservices Orchestration',
    kicker: "Master's thesis",
    description:
      "A Kubernetes experiment on Google's Online Boutique: the same 10 microservices deployed twice, as a standard baseline and as a hardened setup, to measure what security costs and what it buys.",
    highlights: [
      'Load tests and fault injection with k6 against both scenarios, with resource limits and network policies only in the hardened one',
      'Cost of security in consumption and latency compared with recovery time (MTTR) in Grafana dashboards',
      '10 services in 5 languages, each with tests, linting, hardened non-root images and end-to-end checks',
      'Planned delivery on AKS with Terraform, GitHub Actions pipelines and Argo CD',
    ],
    status: 'in-progress',
    icon: GoogleCloudLogo,
    stack: [
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Azure', icon: VscAzure },
      { name: 'Docker', icon: SiDocker },
      { name: 'Cilium', icon: SiCilium },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Argo CD', icon: SiArgo },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'k6', icon: SiK6 },
      { name: 'Trivy', icon: SiTrivy },
    ],
    repo: 'https://github.com/pgr866/microservices-demo',
    featured: true,
  },
  {
    title: 'msc-soccer-project',
    kicker: "Master's first-year project",
    description:
      'An app to manage football players and their stats, built twice on purpose: one front end that can switch at runtime between two completely different backends.',
    highlights: [
      'Ionic and Angular app with Capacitor camera, geolocation and maps',
      'The same API on Node with MongoDB and on Spring Boot microservices with Eureka, Config Server and a Gateway',
      'Firebase sign-in with user and admin roles, an AI-generated ideal team with Groq and player news over CORBA',
      'Unit and Cypress end-to-end tests, Docker Compose locally and CI/CD to Google Cloud Run',
    ],
    status: 'completed',
    icon: SoccerLogo,
    stack: [
      { name: 'Angular', icon: SiAngular },
      { name: 'Ionic', icon: SiIonic },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Google Cloud', icon: SiGooglecloud },
    ],
    repo: 'https://github.com/pgr866/msc-soccer-project',
  },
  {
    title: 'Stratify',
    kicker: "Bachelor's thesis",
    description:
      'A full stack platform to design, simulate and run algorithmic trading strategies on crypto markets, built to make automated investing accessible to non-technical users.',
    highlights: [
      'Strategy builder with technical indicators over candlestick charts',
      'Simulated and live trading on real exchanges through CCXT',
      'JWT in HTTP-only cookies, Google and GitHub sign-in, email verification',
      'Dockerized and deployed on an Azure VM behind Nginx with TLS',
    ],
    status: 'completed',
    icon: StratifyLogo,
    stack: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Azure', icon: VscAzure },
    ],
    repo: 'https://github.com/pgr866/Stratify',
  },
  {
    title: 'Portfolio & Notes',
    kicker: 'Personal site',
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
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'GitHub Pages', icon: SiGithubpages },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
    ],
    repo: 'https://github.com/pgr866/my-app',
    demo: 'https://pgr866.github.io/my-app',
    wide: true,
  },
];
