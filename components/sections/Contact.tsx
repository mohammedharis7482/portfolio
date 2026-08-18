import Container from "../Container";
import { contact, site } from "@/lib/content";

/** Strips scheme and trailing slash so a real URL reads cleanly as a label. */
function displayUrl(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

const methods = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "LinkedIn",
    value: displayUrl(site.links.linkedin),
    href: site.links.linkedin,
  },
  {
    label: "GitHub",
    value: displayUrl(site.links.github),
    href: site.links.github,
  },
  {
    label: "Behance",
    value: displayUrl(site.links.behance),
    href: site.links.behance,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg-primary)] py-[var(--space-10)] md:py-[var(--space-12)] lg:py-[var(--space-13)]"
    >
      <Container>
        <div className="grid gap-[var(--space-8)] lg:grid-cols-12 lg:gap-[var(--space-9)]">
          <div className="lg:col-span-5">
            <p className="text-micro mb-[var(--space-4)] text-[var(--color-accent-dark)]">
              {contact.eyebrow}
            </p>
            <h2 className="text-section text-[var(--color-text-primary)]">
              {contact.heading}
            </h2>
            <p className="text-body-lg mt-[var(--space-5)] max-w-[520px]">
              {contact.body}
            </p>

            <span className="mt-[var(--space-6)] flex items-center gap-2 text-[14px] text-[var(--color-text-muted-accessible)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              {site.availability}
            </span>
          </div>

          <ul className="lg:col-span-7">
            {methods.map((method) => {
              const isExternal = method.href.startsWith("http");

              return (
                <li
                  key={method.label}
                  className="border-t border-[var(--color-border)] py-[var(--space-5)] first:border-t-0 first:pt-0 last:pb-0 md:py-[var(--space-6)]"
                >
                  <p className="text-micro text-[var(--color-text-muted-accessible)]">
                    {method.label}
                  </p>
                  <a
                    href={method.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group mt-[var(--space-2)] inline-flex items-center gap-[var(--space-3)] text-[17px] leading-[1.5] text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-accent-dark)]"
                  >
                    {method.value}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
