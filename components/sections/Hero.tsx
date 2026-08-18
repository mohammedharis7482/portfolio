import Container from "../Container";
import Button from "../Button";
import HeroIllustration from "./HeroIllustration";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-primary)] pt-[140px] pb-[80px] md:pt-[160px] md:pb-[96px]">
      {/* Grid backdrop sits on its own layer — the utility carries opacity */}
      <div
        aria-hidden="true"
        className="bg-grid-subtle pointer-events-none absolute inset-0 z-0"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[620px]">
            <p className="text-micro text-[var(--color-accent-dark)] mb-6">
              {hero.eyebrow}
            </p>
            <h1 className="text-hero text-[var(--color-text-primary)]">
              {hero.heading}
            </h1>
            <p className="text-body-lg mt-6">{hero.body}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="#work" variant="primary">
                {hero.ctaPrimary}
              </Button>
              <Button href="#contact" variant="secondary">
                {hero.ctaSecondary}
              </Button>
            </div>
            <p className="flex items-start gap-2 text-[14px] text-[var(--color-text-muted-accessible)] mt-8 max-w-[480px]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
              {hero.availabilityNote}
            </p>
          </div>

          <div className="w-full">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
