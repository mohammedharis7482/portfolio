import Container from "../Container";
import { capabilities, capabilitiesSection } from "@/lib/content";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[var(--color-bg-secondary)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]"
    >
      <Container>
        <div className="max-w-[680px]">
          <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent-dark)]">
            {capabilitiesSection.eyebrow}
          </p>
          <h2 className="text-section text-[var(--color-text-primary)]">
            {capabilitiesSection.heading}
          </h2>
        </div>

        {/* Large editorial rows — spec §38, not a grid of small cards */}
        <ol className="mt-[var(--space-9)] lg:mt-[var(--space-10)]">
          {capabilities.map((capability) => (
            <li
              key={capability.num}
              className="grid gap-[var(--space-4)] border-t border-[var(--color-border)] py-[var(--space-6)] first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-[var(--space-6)] md:py-[var(--space-7)]"
            >
              <div className="flex items-baseline gap-[var(--space-3)] md:col-span-4">
                <span className="text-micro text-[var(--color-accent-dark)]">
                  {capability.num}
                </span>
                <h3 className="text-subheading text-[var(--color-text-primary)]">
                  {capability.title}
                </h3>
              </div>

              {/* Inline rather than pills — spec §61 cautions against badge overload */}
              <p className="flex flex-wrap items-baseline gap-x-[var(--space-3)] gap-y-[var(--space-2)] md:col-span-8">
                {capability.items.map((item, index) => (
                  <span
                    key={item}
                    className="text-[15px] leading-[1.5] text-[var(--color-text-secondary)]"
                  >
                    {item}
                    {/* separator travels with its item so it never starts a line */}
                    {index < capability.items.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-[var(--space-3)] text-[var(--color-text-muted-accessible)]"
                      >
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
