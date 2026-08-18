import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Tag } from "@/components/Basics";
import { caseStudy, featuredProjects, type Project } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — Mohammed Haris`,
    description: project.description,
  };
}

function ImageFrame({
  image,
  sizes,
  priority = false,
}: {
  image: Project["images"][number];
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="flex items-center justify-center rounded-[var(--radius-2xl)] bg-[var(--color-bg-image-frame)] p-[var(--space-4)] md:p-[var(--space-6)] lg:p-[var(--space-7)]">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-soft)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = featuredProjects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = featuredProjects[index];
  const [cover, ...rest] = project.images;
  const nextProject = featuredProjects[(index + 1) % featuredProjects.length];

  return (
    <>
      <Navbar />
      <main>
        {/* 01 — Case study hero */}
        <section className="bg-[var(--color-bg-primary)] pt-[140px] pb-[var(--space-10)] md:pt-[160px] md:pb-[var(--space-11)]">
          <Container>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-[var(--space-2)] text-[15px] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-x-1"
              >
                ←
              </span>
              Back to work
            </Link>

            <div className="mt-[var(--space-7)] flex items-center gap-[var(--space-3)]">
              <span className="text-micro text-[var(--color-text-muted-accessible)]">
                {project.order}
              </span>
              <span className="h-px w-6 bg-[var(--color-border)]" />
              <span className="text-micro text-[var(--color-accent-dark)]">
                {project.category}
              </span>
            </div>

            <h1 className="text-hero mt-[var(--space-5)] max-w-[900px] text-[var(--color-text-primary)]">
              {project.title}
            </h1>
            <p className="text-body-lg mt-[var(--space-5)] max-w-[720px]">
              {project.headline}
            </p>
          </Container>
        </section>

        {/* 02 — Overview */}
        <section className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)]">
          <Container>
            <div className="grid gap-[var(--space-5)] md:grid-cols-12 md:gap-[var(--space-7)]">
              <h2 className="text-micro text-[var(--color-accent-dark)] md:col-span-3">
                Overview
              </h2>
              <p className="text-body-lg md:col-span-9 md:max-w-[760px]">
                {project.description}
              </p>
            </div>
          </Container>
        </section>

        {/* 03 — Visual showcase: cover full width, remainder two-up (spec §47) */}
        <section className="bg-[var(--color-bg-secondary)] py-[var(--space-10)] md:py-[var(--space-12)]">
          <Container>
            <ImageFrame
              image={cover}
              sizes="(min-width: 1024px) 1240px, 100vw"
              priority
            />

            {rest.length > 0 && (
              <div className="mt-[var(--space-5)] grid gap-[var(--space-5)] md:grid-cols-2 md:gap-[var(--space-6)]">
                {rest.map((image) => (
                  <ImageFrame
                    key={image.src}
                    image={image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                ))}
              </div>
            )}
          </Container>
        </section>

        {/* 04 — Role & tech, plus 05 — live link where one exists */}
        <section className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)]">
          <Container>
            <div className="grid gap-[var(--space-7)] md:grid-cols-2 md:gap-[var(--space-9)]">
              <div>
                <h2 className="text-micro text-[var(--color-accent-dark)]">
                  {caseStudy.labels.role}
                </h2>
                <p className="text-body mt-[var(--space-4)]">{project.role}</p>
              </div>

              <div>
                <h2 className="text-micro text-[var(--color-accent-dark)]">
                  Technology
                </h2>
                <div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>

            {project.liveUrl && (
              <div className="mt-[var(--space-8)] border-t border-[var(--color-border)] pt-[var(--space-7)]">
                <Button href={project.liveUrl} variant="primary">
                  Visit live site ↗
                </Button>
              </div>
            )}
          </Container>
        </section>

        {/* 06 — Next project */}
        <section className="bg-[var(--color-bg-primary)] py-[var(--space-10)] md:py-[var(--space-12)]">
          <Container>
            <div className="flex flex-col gap-[var(--space-6)] border-t border-[var(--color-border)] pt-[var(--space-7)] md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-micro text-[var(--color-text-muted-accessible)]">
                  Next project
                </p>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group mt-[var(--space-3)] inline-flex items-baseline gap-[var(--space-3)]"
                >
                  <span className="text-project text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent-dark)]">
                    {nextProject.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[var(--color-accent-dark)] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              <Button href="/#work" variant="secondary">
                Back to all work
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
