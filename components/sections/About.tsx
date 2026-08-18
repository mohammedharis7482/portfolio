import Image from "next/image";
import Container from "../Container";
import { about, pillars, site } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-secondary)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]"
    >
      <Container>
        <div className="grid items-start gap-[var(--space-7)] lg:grid-cols-12 lg:gap-[var(--space-9)]">
          {/* Portrait — spec §30, frame treatment matches Selected Work */}
          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-2xl)] bg-[var(--color-bg-image-frame)] p-[var(--space-4)] md:p-[var(--space-5)]">
              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-soft)]">
                <Image
                  src={about.portrait}
                  alt={`${site.name} — ${site.title}`}
                  width={1197}
                  height={1315}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* About copy — spec §29 */}
          <div className="lg:col-span-7 lg:pt-[var(--space-4)]">
            <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent-dark)]">
              {about.eyebrow}
            </p>
            <h2 className="text-section text-[var(--color-text-primary)]">
              {about.heading[0]}
              <br />
              <span className="text-[var(--color-text-secondary)]">
                {about.heading[1]}
              </span>
            </h2>
            <div className="mt-[var(--space-5)] max-w-[620px] space-y-[var(--space-4)]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Three pillars — spec §31, editorial columns, no cards */}
        <div className="mt-[var(--space-10)] grid gap-[var(--space-7)] md:grid-cols-3 md:gap-[var(--space-6)] lg:mt-[var(--space-12)] lg:gap-[var(--space-8)]">
          {pillars.map((pillar) => (
            <div
              key={pillar.order}
              className="border-t border-[var(--color-border)] pt-[var(--space-5)]"
            >
              <div className="flex items-baseline gap-[var(--space-3)]">
                <span className="text-micro text-[var(--color-accent-dark)]">
                  {pillar.order}
                </span>
                <h3 className="text-subheading text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-body-lg mt-[var(--space-3)] text-[var(--color-text-primary)]">
                {pillar.subtitle}
              </p>
              <p className="text-body mt-[var(--space-3)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
