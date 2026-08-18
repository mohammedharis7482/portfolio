import Container from "../Container";
import { Tag } from "../Basics";
import { tools, toolsSection } from "@/lib/content";

export default function Tools() {
  return (
    <section className="bg-[var(--color-bg-surface)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <h2 className="text-section max-w-[680px] text-[var(--color-text-primary)]">
          {toolsSection.heading}
        </h2>

        {/* Compact grid — quieter than Capabilities, no dividers */}
        <div className="mt-[var(--space-9)] grid gap-[var(--space-7)] md:grid-cols-2 lg:mt-[var(--space-10)] lg:grid-cols-3 lg:gap-[var(--space-8)]">
          {tools.map((group) => (
            <div key={group.category}>
              <p className="text-micro text-[var(--color-text-muted)]">
                {group.category}
              </p>
              <div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
