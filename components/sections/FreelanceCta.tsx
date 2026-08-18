import Container from "../Container";
import Button from "../Button";
import { freelanceCta } from "@/lib/content";

export default function FreelanceCta() {
  return (
    <section className="bg-[var(--color-dark-section)] py-[var(--space-11)] md:py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          {/* Restrained emerald accent — spec §43 asks for no excessive glow */}
          <span
            aria-hidden="true"
            className="mx-auto mb-[var(--space-6)] block h-px w-10 bg-[var(--color-accent)]"
          />

          <h2 className="text-section text-white">{freelanceCta.heading}</h2>

          <p className="mx-auto mt-[var(--space-5)] max-w-[620px] text-[19px] leading-[1.6] text-gray-300">
            {freelanceCta.body}
          </p>

          <div className="mt-[var(--space-7)] flex flex-wrap justify-center gap-[var(--space-4)]">
            <Button href="#contact" variant="primary">
              {freelanceCta.primary}
            </Button>
            <Button href="#work" variant="ghost">
              {freelanceCta.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
