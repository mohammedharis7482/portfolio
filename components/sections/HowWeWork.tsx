import Container from "../Container";
import { howIWork, process, workStyle } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <div className="max-w-[680px]">
          <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent)]">
            {howIWork.eyebrow}
          </p>
          <h2 className="text-section text-[var(--color-text-primary)]">
            {howIWork.heading}
          </h2>
        </div>

        {/* Process timeline — spec §35: horizontal on desktop, vertical on mobile */}
        <ol className="mt-[var(--space-9)] lg:mt-[var(--space-10)] lg:grid lg:grid-cols-3 lg:gap-y-[var(--space-8)]">
          {process.map((stage, index) => (
            <li
              key={stage.num}
              className="relative border-l border-[var(--color-border)] pb-[var(--space-6)] pl-[var(--space-7)] last:border-l-0 last:pb-0 lg:border-l-0 lg:pr-[var(--space-7)] lg:pb-0 lg:pl-0"
            >
              {/* Connector runs to the next circle; suppressed at each row end */}
              {index % 3 !== 2 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[12px] right-0 left-[calc(var(--space-6)+var(--space-2))] hidden h-px bg-[var(--color-border)] lg:block"
                />
              )}

              <span className="absolute top-0 left-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg-surface)] text-[11px] font-semibold text-[var(--color-accent)] lg:static lg:translate-x-0">
                {stage.num}
              </span>

              <h3 className="text-subheading text-[var(--color-text-primary)] lg:mt-[var(--space-5)]">
                {stage.title}
              </h3>
              <p className="text-body mt-[var(--space-2)] max-w-[360px]">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Work-style principles — spec §36, minimal editorial blocks */}
        <div className="mt-[var(--space-10)] grid gap-[var(--space-6)] sm:grid-cols-2 lg:mt-[var(--space-12)] lg:grid-cols-4 lg:gap-[var(--space-7)]">
          {workStyle.map((principle) => (
            <div
              key={principle.title}
              className="border-t border-[var(--color-border)] pt-[var(--space-5)]"
            >
              <h3 className="text-subheading text-[var(--color-text-primary)]">
                {principle.title}
              </h3>
              <p className="text-body mt-[var(--space-3)]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
