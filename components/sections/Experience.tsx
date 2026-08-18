import Container from "../Container";
import { Tag } from "../Basics";
import { experience, experienceSection } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]"
    >
      <Container>
        <div className="max-w-[680px]">
          <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent-dark)]">
            {experienceSection.eyebrow}
          </p>
          <h2 className="text-section text-[var(--color-text-primary)]">
            {experienceSection.heading}
          </h2>
        </div>

        <ol className="mt-[var(--space-9)] lg:mt-[var(--space-10)]">
          {experience.map((item) => (
            <li
              key={`${item.role}-${item.company}`}
              className="border-t border-[var(--color-border)] py-[var(--space-6)] first:border-t-0 first:pt-0 last:pb-0 md:py-[var(--space-7)]"
            >
              <div className="flex flex-col gap-[var(--space-2)] md:flex-row md:items-baseline md:justify-between md:gap-[var(--space-6)]">
                <div>
                  <h3 className="text-subheading text-[var(--color-text-primary)]">
                    {item.role}
                  </h3>
                  <p className="mt-[var(--space-1)] text-[15px] leading-[1.5] text-[var(--color-text-muted-accessible)]">
                    {item.company} — {item.location}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.5] text-[var(--color-text-muted-accessible)] md:shrink-0 md:text-right">
                  {item.dates}
                </p>
              </div>

              <p className="text-body mt-[var(--space-4)] max-w-[760px]">
                {item.description}
              </p>

              <div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
