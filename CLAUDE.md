# Mohammed Haris — Portfolio Website

Master reference for building this project. Read this fully before making changes.
Any Claude Code session working on this repo should treat this file as the source of truth for design decisions, content, and architecture — not assumptions.

---

## 1. Project Summary

A premium, light-first portfolio website for **Mohammed Haris**, positioned as:

> Product Designer & Full-Stack Developer

Target audiences: Qatar/GCC recruiters, international remote employers, freelance clients, startups, product teams.

Full design brief lives at `docs/master-prompt.md` (verbatim source spec — 68 sections). This CLAUDE.md is the working summary + build status. If anything here conflicts with `docs/master-prompt.md`, the master prompt wins on visual/content direction; this file wins on current implementation status.

**Critical rule — content integrity:** Never fabricate metrics, clients, testimonials, employers, or outcomes. Where data is unavailable, use qualitative language. All real content lives in `lib/content.ts` — treat it as the single source of truth. Do not invent project descriptions not present there.

---

## 2. Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-variable-based `@theme`, not the v3 config file)
- **Font:** Inter — self-hosted via `@fontsource/inter` (NOT `next/font/google` — this sandbox's network rules block fonts.googleapis.com at build time; the self-hosted package avoids that dependency entirely and works identically in production)
- **Images:** `next/image`, all real screenshots stored in `public/images/`
- **Deployment target:** Vercel (implied by stack; not yet configured)

---

## 3. Design System (source: `app/globals.css`)

All tokens are CSS custom properties under `:root`, exposed to Tailwind via `@theme inline`. Never hardcode a hex value or spacing number directly in a component — always reference the token.

### Colors
| Token | Value | Use |
|---|---|---|
| `--color-bg-primary` | `#f7f8f6` | Page background (light, warm off-white) |
| `--color-bg-surface` | `#ffffff` | Cards, floating components |
| `--color-bg-secondary` | `#f0f2ef` | About, Journey, alternate blocks |
| `--color-bg-image-frame` | `#eef1ef` | Project image containers |
| `--color-text-primary` | `#0b1220` | Headings, nav, important text |
| `--color-text-secondary` | `#56606f` | Body copy |
| `--color-text-muted` | `#7b8490` | Metadata, timestamps |
| `--color-border` | `#e2e6e2` | Subtle 1px borders |
| `--color-accent` | `#08a77a` | CTAs, active states, availability dot |
| `--color-accent-dark` | `#057a5b` | Hover/pressed states |
| `--color-dark-section` | `#0b1117` | Footer, freelance CTA, featured case study |

**Color usage rule:** ~70% light / 20% soft gray / 10% dark. Neutral-first hierarchy — emerald is an accent, not a dominant color. Project screenshots provide the visual color variety, not the site chrome.

### Typography
Single typeface: Inter. Utility classes in `globals.css`:
`.text-display-xl` `.text-hero` `.text-section` `.text-project` `.text-subheading` `.text-body-lg` `.text-body` `.text-small` `.text-micro`

### Spacing
8px-based scale, tokens `--space-1` (4px) through `--space-14` (160px). Section vertical rhythm: 120–160px desktop, 64–96px mobile.

### Radius
`--radius-sm` 8px · `--radius-md` 12px · `--radius-lg` 16px · `--radius-xl` 20px · `--radius-2xl` 24px (featured surfaces)

### Shadows
`--shadow-soft` (cards) and `--shadow-elevated` (floating/hero elements) — both very subtle, no heavy black shadows.

### Container
Max width 1320px standard, 1440px (`wide` prop) for large visual showcases.

---

## 4. Content Source of Truth

**File:** `lib/content.ts`

Contains every real string used on the site: site metadata, nav, hero copy, all 3 featured projects (with real image paths), more-work list, about copy, pillars, journey, process, work style, **experience (corrected — see below)**, capabilities, tools, career/freelance copy, footer.

Never duplicate copy inline in a component — import from this file. If new real content arrives (screenshots, project descriptions, resume data), update `lib/content.ts` first, then components consume it automatically.

### Experience — confirmed final version (do not alter without explicit instruction)
1. **UI/UX Mentor** — Softroniics, Palakkad, Kerala — March 2026 – August 2026
2. **Freelance Product Designer** — Self Employed, Remote — Helpdesk Qatar — December 2025 – Present
3. **UI/UX Design Intern** — Aspira Design, Bengaluru, Karnataka, India — July 2025 – March 2026 *(combined from two overlapping LinkedIn title entries per explicit user decision — do not split back into UI Designer / UX Designer)*
   Description: "Worked as a UI/UX Design Intern, contributing to interface design, user experience and design system work under guidance from the design team."

### Real links (confirmed)
- Email: `mohammedharisar@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/mohammed-haris-178332325/`
- GitHub: `https://github.com/mohammedharis7482`
- Behance: `https://www.behance.net/mohdharis21`
- GCC Chalissery live: `https://gccacademy.in/`
- PropertyFlow AI live: `https://propertyflow-ai-omega.vercel.app/`
- NexaPOS: **no live URL yet** (deployment deferred pending custom domain) — do not add a live link or "View Live" CTA for this project until confirmed
- Resume: **not yet built** — `site.links.resume` in content.ts is currently `"#"`, a placeholder to be replaced once the resume file exists

### Availability copy
Confirmed as **"Open to Work"** everywhere (nav badge, hero, footer, contact) — NOT "Open to Qatar/GCC & Freelance" as the original master-prompt draft specified. This override has already been applied in `lib/content.ts`.

---

## 5. Asset Inventory (`public/images/`)

All real, no placeholders/stock images used anywhere.

```
public/images/
├── about/
│   └── portrait.jpeg              — professional photo for About section
├── gcc/
│   ├── site-hero.png              — public homepage hero (used in Hero + Selected Work)
│   ├── site-gallery.png           — gallery section
│   ├── registration.jpeg          — tournament registration hub
│   ├── add-players-mobile.jpeg    — mobile player registration flow
│   ├── matches-admin.jpeg         — admin matches dashboard
│   └── bracket.jpeg               — knockout bracket view
├── nexapos/
│   ├── dashboard.jpeg
│   ├── billing.jpeg
│   ├── products.jpeg
│   ├── reports.jpeg
│   └── receipt.jpeg
└── propertyflow/
    ├── landing.png
    ├── user-dashboard.png
    ├── agent-dashboard.png
    └── admin-dashboard.png
```

**Not yet available:** screenshots for MathBot, Odrowita, Maison Élève, PlaySphere, Turf Booking App, Baladna Offer Mart, Technical Debt Framework. These live in the "More Work" section as text-only editorial rows (spec §28 already treats this section as lightweight — no card imagery required). If screenshots arrive later, upgrade that section to include thumbnails.

---

## 6. Component Architecture

```
app/
├── layout.tsx          — root layout, Inter font import, SEO metadata
├── globals.css         — design tokens + type scale (see §3 above)
├── page.tsx            — homepage, assembles all sections in order
└── work/
    └── [slug]/page.tsx — DONE: dynamic case study route (3 static params)

components/
├── Container.tsx        — max-width wrapper (1320px / 1440px wide)
├── Button.tsx            — primary / secondary / dark / ghost variants
├── Basics.tsx             — Badge, Tag, Divider, Eyebrow, AvailabilityDot, SectionHeading
├── Navbar.tsx             — scroll-aware, mobile menu, "Open to Work" badge, Let's Talk CTA
├── Footer.tsx             — dark footer, real social links
└── sections/            — DONE: all 12 homepage sections built
    ├── Hero.tsx           — uses real GCC + NexaPOS screenshots as hero visual
    ├── SelectedWork.tsx   — 3 featured project cards (GCC, NexaPOS, PropertyFlow)
    ├── About.tsx          — portrait + copy + 3 pillars
    ├── FeaturedCaseStudy.tsx — dark section, GCC Chalissery deep dive
    ├── MoreWork.tsx       — editorial list, 7 items
    ├── Journey.tsx        — 5-stage progression
    ├── HowWeWork.tsx      — 6-stage process + work-style principles
    ├── Experience.tsx     — 3 entries
    ├── Capabilities.tsx   — 5 categories as editorial rows
    ├── Tools.tsx          — technology list by category
    ├── Career.tsx         — full-time / freelance two-column
    ├── FreelanceCta.tsx   — dark CTA
    └── Contact.tsx        — contact links

lib/
└── content.ts            — all real copy and data (see §4)

docs/
└── master-prompt.md      — original 68-section design brief (verbatim, do not edit)
```

### Case study pages — built
`app/work/[slug]/page.tsx` serves one statically generated page per featured project (`/work/gcc-chalissery`, `/work/nexapos`, `/work/propertyflow-ai`); unknown slugs 404.

Only the spec §46 sections with real backing data are rendered: Project Hero, Overview, Final Product (visual showcase), Technology/role meta, live-site CTA where a URL exists, Next Project. **Problem, Research, Strategy, User Flow, Wireframes, Design System, Architecture, Challenges, Solutions, Outcome and Learnings are deliberately omitted** — there is no real content for them, and §46 permits sections to vary. Do not add them with invented copy.

`ImageFrame` lives inside the route file; no separate `CaseStudyHero` / `CaseStudyMeta` components were needed.

### Nav anchors
Navbar and Footer link with homepage-qualified anchors (`/#work`, not `#work`) so they resolve from case study subpages. Keep new nav links in that form. In-page CTAs inside homepage-only sections (Hero, Career, FreelanceCta) may stay bare.

---

## 7. Homepage Section Order (locked — spec §63)

```
Navigation
Hero                                          [DONE]
Selected Work (GCC -> NexaPOS -> PropertyFlow) [DONE]
About ("More than a designer...")             [DONE]
Design / Engineering / Product (pillars)      [DONE]
Featured Case Study (GCC, dark section)       [DONE]
More Work (MathBot, Odrowita, Maison Elève..) [DONE]
My Journey                                    [DONE]
How I Work                                    [DONE]
Experience                                    [DONE]
Capabilities                                  [DONE]
Tools / Technology                            [DONE]
Open to Opportunities (Full-time / Freelance) [DONE]
Freelance CTA (dark)                          [DONE]
Contact                                       [DONE]
Footer                                        [DONE]
```

Section background rhythm (spec §59): Light -> White -> Soft Gray -> Dark -> White -> Soft Gray -> White -> White -> Soft Gray -> Dark -> Light -> Dark(footer). Don't let two dark or two white sections sit back to back without a gray/light buffer, except where the spec explicitly calls for it.

---

## 8. Outstanding Items / Do Not Guess

- **Resume file** — not built yet. When built, update `site.links.resume` in `lib/content.ts` to point to the real file, and update the "View Resume" CTA in the Career section.
- **NexaPOS live URL** — none yet. Do not add a live-site link for this project.
- **More Work screenshots** — none yet for the 7 secondary projects. Keep that section text-only until assets arrive.
- **Case study depth** — the 3 case study pages are built, but carry only hero/overview/visuals/tech. Problem, research, strategy, challenges and outcome sections stay omitted until real material exists for them.
- Do not invent client names, user counts, revenue figures, or awards anywhere on the site.

---

## 9. Commands

```bash
npm run dev      # local dev server
npm run build    # production build - must pass clean before any commit
npm run lint     # eslint
```

Always run `npm run build` before committing. This project has already hit one environment-specific issue (Google Fonts blocked in sandboxed builds) — the fix (self-hosted `@fontsource/inter`) is permanent; do not revert to `next/font/google`.

---

## 10. Workflow Notes

- Audit-first: read this file and the relevant section of `docs/master-prompt.md` before touching a section.
- Phase-by-phase: build one section at a time, confirm it renders, then move to the next — matches the project owner's established review-checkpoint workflow.
- Prefer raw terminal output (build logs, dev server status) over summaries when reporting progress.
