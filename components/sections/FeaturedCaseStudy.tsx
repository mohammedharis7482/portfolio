import Image from "next/image";
import Container from "../Container";
import { caseStudy, featuredProjects } from "@/lib/content";

const project = featuredProjects[0];

/** Resolves a showcase path to the project image so alt text stays in one place. */
function showcaseImage(src: string) {
  return (
    project.images.find((image) => image.src === src) ?? {
      src,
      alt: project.title,
      width: 2560,
      height: 1600,
    }
  );
}

function Frame({
  src,
  priority = false,
  sizes,
}: {
  src: string;
  priority?: boolean;
  sizes: string;
}) {
  const image = showcaseImage(src);

  return (
    <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/5 shadow-[var(--shadow-elevated)]">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function FeaturedCaseStudy() {
  return (
    <section className="bg-[var(--color-dark-section)] py-[var(--space-12)] lg:py-[var(--space-13)]">
      <Container>
        {/* Eyebrow — spec §24 */}
        <div className="flex flex-wrap items-center gap-[var(--space-3)]">
          <span className="text-micro text-[var(--color-accent)]">
            {caseStudy.eyebrow}
          </span>
          <span className="h-px w-6 bg-white/20" />
          <span className="text-micro text-[var(--color-accent)]">
            {project.category}
          </span>
        </div>

        <h2 className="text-section mt-[var(--space-5)] max-w-[880px] text-white">
          {project.headline}
        </h2>
        <p className="mt-[var(--space-5)] max-w-[720px] text-[19px] leading-[1.6] text-gray-300">
          {project.description}
        </p>

        {/* Visual hierarchy — one large, two supporting (spec §47) */}
        <div className="mt-[var(--space-9)] lg:mt-[var(--space-10)]">
          <Frame
            src={caseStudy.showcase.large}
            sizes="(min-width: 1024px) 1240px, 100vw"
          />

          <div className="mt-[var(--space-5)] grid gap-[var(--space-5)] md:grid-cols-2 md:gap-[var(--space-6)]">
            {caseStudy.showcase.small.map((src) => (
              <Frame
                key={src}
                src={src}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>

        {/* Meta footer */}
        <div className="mt-[var(--space-9)] grid gap-[var(--space-6)] border-t border-white/10 pt-[var(--space-7)] md:grid-cols-3 md:gap-[var(--space-7)]">
          <div>
            <p className="text-micro text-[var(--color-accent)]">
              {caseStudy.labels.project}
            </p>
            <p className="mt-[var(--space-3)] text-[15px] leading-[1.5] text-white">
              {project.title}
            </p>
          </div>

          <div>
            <p className="text-micro text-[var(--color-accent)]">
              {caseStudy.labels.role}
            </p>
            <p className="mt-[var(--space-3)] text-[15px] leading-[1.5] text-gray-300">
              {project.role}
            </p>
          </div>

          <div>
            <p className="text-micro text-[var(--color-accent)]">
              {caseStudy.labels.interfaces}
            </p>
            <div className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-2)]">
              {caseStudy.interfaces.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
