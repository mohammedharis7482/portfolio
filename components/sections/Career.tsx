import Container from "../Container";
import Button from "../Button";
import { career, site } from "@/lib/content";

type Column = typeof career.fullTime | typeof career.freelance;

function CareerCard({
  column,
  href,
  variant,
}: {
  column: Column;
  href: string;
  variant: "primary" | "secondary";
}) {
  return (
    <div className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-[var(--space-6)] shadow-[var(--shadow-soft)] md:p-[var(--space-7)]">
      <div className="flex items-baseline justify-between gap-[var(--space-4)]">
        <span className="text-micro text-[var(--color-accent)]">
          {column.label}
        </span>
        <span className="text-micro text-[var(--color-text-muted)]">
          {column.region}
        </span>
      </div>

      <h3 className="text-subheading mt-[var(--space-5)] text-[var(--color-text-primary)]">
        {column.heading}
      </h3>

      <ul className="mt-[var(--space-4)] flex flex-col gap-[var(--space-3)]">
        {column.items.map((item) => (
          <li key={item} className="flex items-start gap-[var(--space-3)]">
            <span
              aria-hidden="true"
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            <span className="text-body">{item}</span>
          </li>
        ))}
      </ul>

      {/* mt-auto keeps both cards' CTAs aligned despite unequal list lengths */}
      <div className="mt-auto pt-[var(--space-6)]">
        <Button href={href} variant={variant}>
          {column.cta}
        </Button>
      </div>
    </div>
  );
}

export default function Career() {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <div className="max-w-[680px]">
          <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent)]">
            {career.eyebrow}
          </p>
          <h2 className="text-section text-[var(--color-text-primary)]">
            {career.heading}
          </h2>
          <p className="text-body-lg mt-[var(--space-5)]">{career.body}</p>
        </div>

        <div className="mt-[var(--space-9)] grid gap-[var(--space-5)] md:grid-cols-2 md:gap-[var(--space-6)] lg:mt-[var(--space-10)]">
          <CareerCard
            column={career.fullTime}
            href={site.links.resume}
            variant="secondary"
          />
          <CareerCard
            column={career.freelance}
            href="#contact"
            variant="primary"
          />
        </div>
      </Container>
    </section>
  );
}
