import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { SectionHeading, Tag } from "../Basics";
import { featuredProjects, selectedWork, type Project } from "@/lib/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cover = project.images[0];
  const imageFirst = index % 2 === 0;

  return (
    <article className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]">
      <div className="grid items-center lg:grid-cols-12">
        {/* Project image frame — spec §21 */}
        <div
          className={`bg-[var(--color-bg-image-frame)] lg:col-span-7 ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex h-full items-center p-[var(--space-5)] md:p-[var(--space-7)] lg:p-[var(--space-8)]">
            <div className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-soft)]">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Card content — spec §22 */}
        <div
          className={`p-[var(--space-5)] md:p-[var(--space-7)] lg:col-span-5 lg:p-[var(--space-8)] ${
            imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex items-center gap-[var(--space-3)]">
            <span className="text-micro text-[var(--color-text-muted)]">
              {project.order}
            </span>
            <span className="h-px w-6 bg-[var(--color-border)]" />
            <span className="text-micro text-[var(--color-accent)]">
              {project.category}
            </span>
          </div>

          <h3 className="text-project mt-[var(--space-4)] text-[var(--color-text-primary)]">
            {project.title}
          </h3>

          <p className="text-subheading mt-[var(--space-3)] text-[var(--color-text-primary)]">
            {project.headline}
          </p>

          <p className="text-body mt-[var(--space-4)]">{project.description}</p>

          <div className="mt-[var(--space-5)] flex flex-wrap gap-[var(--space-2)]">
            {project.tech.slice(0, 4).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <div className="mt-[var(--space-6)] flex flex-wrap items-center gap-x-[var(--space-6)] gap-y-[var(--space-3)]">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-dark)]"
            >
              {selectedWork.cta}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
              >
                {selectedWork.liveCta}
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]"
    >
      <Container>
        <SectionHeading
          heading={selectedWork.heading}
          body={selectedWork.body}
        />

        <div className="mt-[var(--space-9)] flex flex-col gap-[var(--space-8)] md:mt-[var(--space-10)] md:gap-[var(--space-9)]">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
