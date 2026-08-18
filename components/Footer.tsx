import Container from "./Container";
import { site, footer } from "@/lib/content";

const navigate = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
];

const elsewhere = [
  { label: "Resume", href: site.links.resume },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Behance", href: site.links.behance },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-section)] pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-10 pb-10">
          <div className="max-w-[360px]">
            <p className="font-semibold text-white">{site.name}</p>
            <p className="text-[15px] text-gray-400 mt-1">{site.title}</p>
            <p className="text-[15px] text-gray-300 mt-4">{footer.tagline}</p>
            <span className="flex items-center gap-2 text-[13px] text-gray-400 mt-4">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              {site.availability}
            </span>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-micro text-gray-500 mb-4">Navigate</p>
              <ul className="flex flex-col gap-3">
                {navigate.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[15px] text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-micro text-gray-500 mb-4">Elsewhere</p>
              <ul className="flex flex-col gap-3">
                {elsewhere.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[15px] text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/10" />

        <div className="flex flex-col sm:flex-row justify-between gap-2 pt-6 text-[13px] text-gray-500">
          <p>{footer.copyright}</p>
          <p>{footer.location}</p>
        </div>
      </Container>
    </footer>
  );
}
