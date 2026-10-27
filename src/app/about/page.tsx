import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Languages, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { CvMenu } from '@/components/CvMenu';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { cvs, education, experience, skills, type Tech } from '@/data/about';
import { gitConfig } from '@/lib/layout.shared';
import { slugify } from '@/lib/slug';
import avatar from '../../../assets/avatar.png';

export const metadata: Metadata = {
  title: 'About me',
  description:
    'Software engineer specializing in DevOps and cloud infrastructure: CI/CD automation, infrastructure as code and container orchestration.',
};

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pablo-gomez-rivas/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: `https://github.com/${gitConfig.user}`,
    icon: FaGithub,
  },
  { label: 'X', href: 'https://x.com/pgr866', icon: FaXTwitter },
  { label: 'Email', href: 'mailto:pgr866@gmail.com', icon: Mail },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2
      id={slugify(children)}
      className="mb-6 scroll-mt-20 text-2xl font-semibold tracking-tight"
    >
      {children}
    </h2>
  );
}

function Chip({ name, icon: Icon }: Tech) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background/60 px-2.5 py-1 text-xs font-medium">
      {Icon && <Icon className="size-3.5" />}
      {name}
    </li>
  );
}

function Timeline({
  items,
}: {
  items: {
    title: string;
    sub: string;
    meta?: string;
    period: string;
    points?: string[];
  }[];
}) {
  return (
    <ol className="relative flex flex-col gap-8 border-s border-fd-border ps-6">
      {items.map(({ title, sub, meta, period, points }) => (
        <li key={`${title}-${period}`} className="relative">
          <span
            aria-hidden
            className="absolute top-1.5 -start-[29px] size-2.5 rounded-full border-2 border-fd-background bg-fd-primary ring-2 ring-fd-primary/30"
          />
          <p className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">
            {period}
          </p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-fd-muted-foreground">
            {sub}
            {meta && <> · {meta}</>}
          </p>
          {points && (
            <ul className="mt-3 flex list-disc flex-col gap-1.5 ps-5 text-sm marker:text-fd-primary/60">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

function CardGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--color-fd-primary) 8%, transparent), transparent 70%)',
      }}
    />
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[836px] flex-1 overflow-x-clip px-4 pt-14 pb-16 min-[940px]:overflow-visible">
      <div data-reveal-root className="flex flex-col gap-16">
        <section className="relative flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 size-72 rounded-full bg-fd-primary/15 blur-3xl"
          />
          <div className="relative flex max-w-lg flex-col gap-4">
            <p className="text-sm font-medium text-fd-muted-foreground">
              Hi there, I&apos;m
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Pablo Gómez Rivas
            </h1>
            <p className="text-xl text-fd-muted-foreground">
              DevOps &amp; Cloud Engineer
            </p>
            <p className="flex items-center gap-1.5 text-sm text-fd-muted-foreground">
              <MapPin className="size-4" /> Almería, Spain
            </p>
            <p className="text-fd-muted-foreground">
              DevOps &amp; Cloud Engineer focused on{' '}
              <strong className="text-fd-foreground">
                CI/CD pipeline automation
              </strong>
              ,{' '}
              <strong className="text-fd-foreground">
                infrastructure as code (IaC)
              </strong>{' '}
              and{' '}
              <strong className="text-fd-foreground">
                container orchestration
              </strong>
              . My background in software engineering and full-stack development
              gives me a comprehensive view of product requirements, allowing me
              to design architectures and deployments that streamline the
              development team&apos;s workflow.
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-fd-border bg-fd-card px-3 py-1.5 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/80"
                  >
                    <Icon className="size-4" /> {label}
                  </a>
                </li>
              ))}
              <li>
                <CvMenu cvs={cvs} />
              </li>
            </ul>
          </div>
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[2rem] bg-linear-to-br from-fd-primary/50 to-transparent blur-md"
            />
            <Image
              src={avatar}
              alt="Portrait of Pablo Gómez Rivas"
              priority
              className="relative size-44 rounded-[1.75rem] border border-fd-border object-cover sm:size-56"
            />
          </div>
        </section>

        <section>
          <SectionTitle>How I got here</SectionTitle>
          <div className="flex flex-col gap-4 text-fd-muted-foreground">
            <p>
              I started out as a{' '}
              <strong className="text-fd-foreground">
                full stack developer
              </strong>
              , building interfaces and APIs and caring about how all the pieces
              of a product fit together.
            </p>
            <p>
              Then <strong className="text-fd-foreground">containers</strong>{' '}
              won me over: the idea that one image runs the same everywhere, and
              that something like Kubernetes can keep whole systems alive on its
              own. That fascination pulled me towards{' '}
              <strong className="text-fd-foreground">
                DevOps and the cloud
              </strong>
              : pipelines, infrastructure as code and everything around shipping
              software reliably.
            </p>
            <p>
              I never left the development side behind. Knowing what the product
              needs lets me design architectures and deployments that make the
              work of the development team easier.
            </p>
            <p>
              I keep learning by building, breaking and writing down what I find
              in my{' '}
              <Link
                href="/notes"
                className="font-medium text-fd-foreground underline underline-offset-4 decoration-fd-primary/60 hover:decoration-fd-primary"
              >
                notes
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>Experience</SectionTitle>
          <Timeline
            items={experience.map((e) => ({
              title: e.role,
              sub: e.org,
              meta: e.type,
              period: e.period,
              points: e.points,
            }))}
          />
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <Timeline
            items={education.map((e) => ({
              title: e.title,
              sub: e.org,
              meta: e.detail,
              period: e.period,
            }))}
          />
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <SpotlightGrid className="grid gap-4 md:grid-cols-2">
            {skills.map(({ title, groups }) => (
              <article
                key={title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50"
              >
                <CardGlow />
                <h3
                  id={slugify(title)}
                  className="relative scroll-mt-20 text-lg font-semibold"
                >
                  {title}
                </h3>
                {groups.map(({ label, items }) => (
                  <div key={label} className="relative flex flex-col gap-2">
                    <p className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">
                      {label}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <Chip key={tech.name} {...tech} />
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </SpotlightGrid>
        </section>

        <section>
          <SectionTitle>Languages</SectionTitle>
          <SpotlightGrid className="grid gap-4 md:grid-cols-2">
            <article className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50">
              <CardGlow />
              <Languages className="relative mt-0.5 size-5 shrink-0" />
              <div className="relative">
                <h3 className="font-semibold">Spanish</h3>
                <p className="text-sm text-fd-muted-foreground">Native</p>
              </div>
            </article>
            <article className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50">
              <CardGlow />
              <Languages className="relative mt-0.5 size-5 shrink-0" />
              <div className="relative">
                <h3 className="font-semibold">English</h3>
                <p className="text-sm text-fd-muted-foreground">
                  Advanced · Cambridge English: First (FCE) | B2
                </p>
                <p className="text-sm text-fd-muted-foreground">Sep 2019</p>
              </div>
            </article>
          </SpotlightGrid>
        </section>

        <section className="flex flex-col items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">See what I&apos;ve built</h2>
            <p className="text-fd-muted-foreground">
              Thesis work, side projects and the cheatsheets I keep for myself.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-lg border border-fd-primary bg-fd-card px-3 py-1.5 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/80"
            >
              Projects <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 rounded-lg border border-fd-border bg-fd-card px-3 py-1.5 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/80"
            >
              Notes
            </Link>
          </div>
        </section>
      </div>
      <ScrollReveal selector="[data-reveal-root]" />
    </main>
  );
}
