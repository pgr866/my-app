import type { ComponentType } from 'react';
import {
  SiAngular,
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
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiOpenstack,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import {
  ArrowLeftRight,
  Binary,
  Blocks,
  Boxes,
  Database,
  FileText,
  FlaskConical,
  GitPullRequestArrow,
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

export const experience = [
  {
    role: 'Full Stack Engineer',
    org: 'DEVyond',
    type: 'Internship · Remote',
    period: 'Sep 2026 – Nov 2026',
    points: [
      'Building web interfaces and components with Next.js and TypeScript.',
      'Integrating backend and databases with Supabase and Payload CMS.',
      'Working in a team under agile methodologies.',
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
      'Took part in the whole software lifecycle under agile methodologies.',
    ],
  },
];

export const education = [
  {
    title: 'MSc in Computer Engineering',
    org: 'University of Almería',
    detail: 'Specialization: Web/Mobile Development',
    period: 'Sep 2025 – Feb 2027',
  },
  {
    title: 'BSc in Computer Engineering',
    org: 'University of Almería',
    detail: 'Specialization: Software Engineering · Grade 8.02 / 10',
    period: 'Sep 2021 – Jun 2025',
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
          { name: 'Kubernetes', icon: SiKubernetes },
        ],
      },
      {
        label: 'IaC & CI/CD',
        items: [
          { name: 'Terraform', icon: SiTerraform },
          { name: 'GitHub Actions', icon: SiGithubactions },
          { name: 'Jenkins', icon: SiJenkins },
          { name: 'GitOps', icon: GitPullRequestArrow },
        ],
      },
      {
        label: 'Cloud platforms',
        items: [
          { name: 'Microsoft Azure', icon: VscAzure },
          { name: 'GCP', icon: SiGooglecloud },
          { name: 'OpenStack', icon: SiOpenstack },
        ],
      },
      {
        label: 'Observability',
        items: [
          { name: 'Prometheus', icon: SiPrometheus },
          { name: 'Grafana', icon: SiGrafana },
        ],
      },
    ],
  },
  {
    title: 'Development',
    groups: [
      {
        label: 'Languages',
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
          { name: 'AngularJS', icon: SiAngular },
          { name: 'Django', icon: SiDjango },
          { name: 'Spring Boot', icon: SiSpringboot },
          { name: 'REST APIs', icon: ArrowLeftRight },
          { name: 'Microservices', icon: Boxes },
          { name: 'Design patterns', icon: Shapes },
          { name: 'Testing', icon: FlaskConical },
        ],
      },
      {
        label: 'Databases',
        items: [
          { name: 'PostgreSQL', icon: SiPostgresql },
          { name: 'MongoDB', icon: SiMongodb },
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
          { name: 'Azure DevOps', icon: VscAzure },
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
          { name: 'Technical documentation', icon: FileText },
        ],
      },
      {
        label: 'Systems & networks',
        items: [
          { name: 'Linux', icon: SiLinux },
          { name: 'Computer networks', icon: Network },
        ],
      },
    ],
  },
];
