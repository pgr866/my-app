import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { cn } from '@/lib/cn';
import { slugify } from '@/lib/slug';
import {
  projects,
  projectsText,
  type Project,
  type ProjectStatus,
} from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected projects by Pablo Gómez Rivas: Kubernetes security and resilience research, a full stack trading platform on Azure, and CI/CD-driven deployments.',
};

const statusStyles: Record<ProjectStatus, { label: string; dot: string }> = {
  live: { label: projectsText.status.live, dot: 'bg-emerald-500' },
  'in-progress': {
    label: projectsText.status['in-progress'],
    dot: 'bg-orange-400',
  },
  completed: { label: projectsText.status.completed, dot: 'bg-sky-500' },
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, dot } = statusStyles[status];
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full whitespace-nowrap border border-fd-border px-4 py-1 text-xs font-medium text-fd-muted-foreground">
      <span className={cn('size-1.5 rounded-full', dot)} />
      {label}
    </span>
  );
}

function LinkButton({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
        primary
          ? 'border-fd-primary bg-fd-card text-fd-card-foreground hover:bg-fd-accent/80'
          : 'border-fd-border bg-fd-card hover:bg-fd-accent',
      )}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, kicker, description, highlights, status, stack, repo, demo } =
    project;
  const Icon = project.icon;
  const { featured, wide } = project;

  return (
    <article
      id={slugify(title)}
      data-spotlight-home={featured ? '' : undefined}
      className={cn(
        'group relative flex scroll-mt-20 flex-col gap-4 overflow-hidden rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50',
        featured && 'md:p-8',
        (featured || wide) && 'md:col-span-2',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 transition-opacity duration-300',
          featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
        )}
        style={{
          background: `radial-gradient(${featured ? 480 : 380}px circle at var(--mx, ${featured ? '100%' : '50%'}) var(--my, ${featured ? '0%' : '50%'}), color-mix(in oklab, var(--color-fd-primary) ${featured ? 11 : 8}%, transparent), transparent 70%)`,
        }}
      />

      <header className="relative grid grid-cols-[max-content_1fr] items-center gap-x-5">
        <Icon className="row-span-2 h-7 w-auto max-w-none text-fd-foreground" />
        <div className="flex items-start justify-between gap-4">
          {kicker && (
            <p className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">
              {kicker}
            </p>
          )}
          {/* Same height as the kicker line so the taller badge doesn't push the title down. */}
          <div className="ms-auto flex h-4 -translate-y-1 items-start">
            <StatusBadge status={status} />
          </div>
        </div>
        <h2 className={cn('font-semibold', featured ? 'text-2xl' : 'text-lg')}>
          {title}
        </h2>
      </header>

      <p className="relative text-fd-muted-foreground">{description}</p>

      <ul className="relative flex flex-col gap-2 text-sm">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-fd-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ul className="relative flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map(({ name, icon: TechIcon }) => (
          <li
            key={name}
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background/60 px-2.5 py-1 text-xs font-medium"
          >
            <TechIcon className="size-3.5" />
            {name}
          </li>
        ))}
      </ul>

      {(repo || demo) && (
        <footer className="relative mt-auto flex flex-wrap gap-2 pt-2">
          {demo && (
            <LinkButton href={demo} primary>
              Visit site <ArrowUpRight className="size-4" />
            </LinkButton>
          )}
          {repo && (
            <LinkButton href={repo}>
              <FaGithub className="size-4" /> Source code
            </LinkButton>
          )}
        </footer>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[836px] flex-1 px-4 pt-14 pb-10">
      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="max-w-xl text-lg text-fd-muted-foreground">
            {projectsText.intro}
          </p>
        </header>

        <SpotlightGrid data-reveal-cards className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SpotlightGrid>
      </div>
      <ScrollReveal selector="[data-reveal-cards]" />
    </main>
  );
}
