import type { ComponentType } from 'react';
import {
  SiAngular,
  SiArgo,
  SiCilium,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiGooglecloud,
  SiGrafana,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiK6,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenstack,
  SiPayloadcms,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTrivy,
  SiTypescript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';
import {
  ArrowLeftRight,
  Binary,
  Blocks,
  Boxes,
  Container,
  Database,
  FileText,
  FlaskConical,
  Kanban,
  ListTree,
  Network,
  Repeat,
  Shapes,
} from 'lucide-react';

export type Tech = {
  name: string;
  icon?: ComponentType<{ className?: string }>;
};

export const aboutText = {
  greeting: "Hi there, I'm",
  name: 'Pablo Gómez Rivas',
  role: 'DevOps & Cloud Engineer',
  location: 'Almería, Spain',
  cta: {
    title: "See what I've built",
    text: 'Thesis work, side projects and the cheatsheets I keep for myself.',
  },
  summary:
    "DevOps & Cloud Engineer focused on CI/CD pipeline automation, infrastructure as code (IaC) and container orchestration. My background in software engineering and full-stack development gives me a comprehensive view of product requirements, allowing me to design architectures and deployments that streamline the development team's workflow.",
  story: [
    'I started out as a full stack developer, building interfaces and APIs and caring about how all the pieces of a product fit together.',
    'Then containers won me over: the idea that one image runs the same everywhere, and that something like Kubernetes can keep whole systems alive on its own. That fascination pulled me towards DevOps and the cloud: pipelines, infrastructure as code and everything around shipping software reliably.',
    'I never left the development side behind. Knowing what the product needs lets me design architectures and deployments that make the work of the development team easier.',
    'I keep learning by building, breaking and writing down what I find in my notes.',
  ],
  languages: [
    { name: 'Spanish', detail: 'Native' },
    { name: 'English', detail: 'Fluent · Cambridge B2 First (FCE)' },
  ],
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const cvs = [
  {
    label: 'English',
    lang: 'en',
    href: `${basePath}/cv/Pablo-Gomez-Rivas-CV-EN.pdf`,
  },
  {
    label: 'Spanish',
    lang: 'es',
    href: `${basePath}/cv/Pablo-Gomez-Rivas-CV-ES.pdf`,
  },
];

export const experience: {
  role: string;
  org: string;
  type: string;
  period: string;
  points: string[];
  stack: Tech[];
}[] = [
  {
    role: 'Full Stack Engineer',
    org: 'DEVyond',
    type: 'Internship · Remote',
    period: 'Sep 2026 – Nov 2026',
    points: [
      'Develop web interfaces and components with Next.js and TypeScript.',
      'Integrate backend services and databases with Supabase and Payload CMS.',
      'Work in a remote team under agile methodologies.',
    ],
    stack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Payload CMS', icon: SiPayloadcms },
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'Trainingym',
    type: 'Internship · Almería, hybrid',
    period: 'Feb 2025 – Apr 2025',
    points: [
      'Built web interfaces and components with AngularJS and TypeScript.',
      'Managed tasks and workflows in Azure DevOps and Jira.',
      'Took part in the full software development lifecycle using agile methodologies.',
    ],
    stack: [
      { name: 'AngularJS', icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Azure DevOps', icon: VscAzureDevops },
      { name: 'Jira', icon: SiJira },
    ],
  },
];

export const education = [
  {
    title: 'MSc in Computer Engineering',
    org: 'University of Almería',
    detail: 'Specialization in Web/Mobile Development',
    period: 'Sep 2025 – Feb 2027',
    points: [
      "Master's thesis (in progress): Resilience & Security in Microservices Orchestration, comparing a baseline and a hardened Kubernetes deployment to measure what security costs and what it buys.",
    ],
  },
  {
    title: 'BSc in Computer Engineering',
    org: 'University of Almería',
    detail: 'Specialization in Software Engineering · GPA: 8.02/10',
    period: 'Sep 2021 – Jun 2025',
    points: [
      "Bachelor's thesis: Stratify, a full stack platform to design, simulate and run algorithmic trading strategies on crypto markets, deployed on Azure.",
    ],
  },
];

export const skills: {
  title: string;
  groups: { label: string; items: Tech[] }[];
}[] = [
  {
    title: 'DevOps & Cloud',
    groups: [
      {
        label: 'Containers & orchestration',
        items: [
          { name: 'Docker', icon: SiDocker },
          { name: 'Docker Compose', icon: Container },
          { name: 'Kubernetes', icon: SiKubernetes },
          { name: 'Cilium', icon: SiCilium },
        ],
      },
      {
        label: 'CI/CD, GitOps & IaC',
        items: [
          { name: 'GitHub Actions', icon: SiGithubactions },
          { name: 'Jenkins', icon: SiJenkins },
          { name: 'Argo CD', icon: SiArgo },
          { name: 'Terraform', icon: SiTerraform },
        ],
      },
      {
        label: 'Cloud platforms',
        items: [
          { name: 'Microsoft Azure', icon: VscAzure },
          { name: 'Google Cloud', icon: SiGooglecloud },
          { name: 'OpenStack', icon: SiOpenstack },
        ],
      },
      {
        label: 'Observability, testing & security',
        items: [
          { name: 'Prometheus', icon: SiPrometheus },
          { name: 'Grafana', icon: SiGrafana },
          { name: 'k6', icon: SiK6 },
          { name: 'Trivy', icon: SiTrivy },
        ],
      },
    ],
  },
  {
    title: 'Development',
    groups: [
      {
        label: 'Programming languages',
        items: [
          { name: 'Python', icon: SiPython },
          { name: 'TypeScript', icon: SiTypescript },
          { name: 'JavaScript', icon: SiJavascript },
          { name: 'Java', icon: FaJava },
          { name: 'SQL', icon: Database },
          { name: 'Bash', icon: SiGnubash },
        ],
      },
      {
        label: 'Frameworks & web',
        items: [
          { name: 'React', icon: SiReact },
          { name: 'Next.js', icon: SiNextdotjs },
          { name: 'Tailwind CSS', icon: SiTailwindcss },
          { name: 'Angular', icon: SiAngular },
          { name: 'Node.js', icon: SiNodedotjs },
          { name: 'Django', icon: SiDjango },
          { name: 'Spring Boot', icon: SiSpringboot },
          { name: 'REST APIs', icon: ArrowLeftRight },
          { name: 'Microservices', icon: Boxes },
        ],
      },
      {
        label: 'Databases',
        items: [
          { name: 'PostgreSQL', icon: SiPostgresql },
          { name: 'MongoDB', icon: SiMongodb },
          { name: 'Redis', icon: SiRedis },
          { name: 'Supabase', icon: SiSupabase },
        ],
      },
    ],
  },
  {
    title: 'Tools & methodologies',
    groups: [
      {
        label: 'Version control & management',
        items: [
          { name: 'Git', icon: SiGit },
          { name: 'GitHub', icon: SiGithub },
          { name: 'Azure DevOps', icon: VscAzureDevops },
          { name: 'Jira', icon: SiJira },
        ],
      },
      {
        label: 'Methodologies',
        items: [
          { name: 'Scrum', icon: Repeat },
          { name: 'Kanban', icon: Kanban },
        ],
      },
    ],
  },
  {
    title: 'Engineering fundamentals',
    groups: [
      {
        label: 'Software principles',
        items: [
          { name: 'Data structures', icon: ListTree },
          { name: 'Algorithms', icon: Binary },
          { name: 'Object-oriented programming', icon: Blocks },
          { name: 'Design patterns', icon: Shapes },
          { name: 'Testing', icon: FlaskConical },
          { name: 'Technical documentation', icon: FileText },
        ],
      },
      {
        label: 'Systems & networks',
        items: [
          { name: 'Linux', icon: SiLinux },
          { name: 'Nginx', icon: SiNginx },
          { name: 'Computer networks', icon: Network },
        ],
      },
    ],
  },
];
