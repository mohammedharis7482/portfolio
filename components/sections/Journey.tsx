import Container from "../Container";
import { journey } from "@/lib/content";

export default function Journey() {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <div className="max-w-[680px]">
          <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent)]">
            {journey.eyebrow}
          </p>
          <h2 className="text-section text-[var(--color-text-primary)]">
            {journey.heading}
          </h2>
          <div className="mt-[var(--space-5)] space-y-[var(--space-4)]">
            {journey.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stage progression — spec §33, connected line, no pills */}
        <ol className="relative mt-[var(--space-9)] md:grid md:grid-cols-5 lg:mt-[var(--space-10)]">
          {/* Rail spans dot-centre to dot-centre across the five columns */}
          <span
            aria-hidden="true"
            className="absolute top-[5px] right-[10%] left-[10%] hidden h-px bg-[var(--color-border)] md:block"
          />

          {journey.stages.map((stage) => (
            <li
              key={stage}
              className="relative border-l border-[var(--color-border)] pb-[var(--space-5)] pl-[var(--space-5)] last:border-l-0 last:pb-0 md:border-l-0 md:pb-0 md:pl-0 md:text-center"
            >
              <span
                aria-hidden="true"
                className="absolute top-[1px] left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--color-accent)] md:static md:mx-auto md:block md:translate-x-0"
              />
              <span className="block text-[15px] leading-[1.4] font-medium text-[var(--color-text-primary)] md:mt-[var(--space-4)]">
                {stage}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
