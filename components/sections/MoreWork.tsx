import Container from "../Container";
import { SectionHeading } from "../Basics";
import { moreProjects, moreWork } from "@/lib/content";

export default function MoreWork() {
  return (
    <section className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <SectionHeading heading={moreWork.heading} body={moreWork.body} />

        {/* Editorial list, deliberately lighter than Selected Work — spec §28 */}
        <ul className="mt-[var(--space-9)] border-b border-[var(--color-border)] md:mt-[var(--space-10)]">
          {moreProjects.map((project, index) => (
            <li
              key={project.title}
              className="grid gap-[var(--space-2)] border-t border-[var(--color-border)] py-[var(--space-5)] md:grid-cols-12 md:items-baseline md:gap-[var(--space-5)] md:py-[var(--space-6)]"
            >
              <div className="flex items-baseline gap-[var(--space-3)] md:col-span-4">
                <span className="text-micro text-[var(--color-text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-subheading text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
              </div>

              <p className="text-body md:col-span-5">{project.description}</p>

              <p className="text-micro text-[var(--color-text-muted)] md:col-span-3 md:text-right">
                {project.category}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
