import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-primary)] pt-[140px] pb-[80px] md:pt-[160px] md:pb-[96px]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[620px]">
            <p className="text-micro text-[var(--color-accent)] mb-6">
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
            <p className="flex items-start gap-2 text-[14px] text-[var(--color-text-muted)] mt-8 max-w-[480px]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
              {hero.availabilityNote}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-[var(--color-accent)]/5 rounded-[var(--radius-2xl)] blur-2xl -z-10" />
            <div className="rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-elevated)] bg-white">
              <Image
                src="/images/gcc/site-hero.png"
                alt="GCC Chalissery Football Academy platform interface"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-[45%] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-soft)] bg-white">
              <Image
                src="/images/nexapos/dashboard.jpeg"
                alt="NexaPOS dashboard interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
