# MASTER PROMPT

## Mohammed Haris — Premium Light-First Portfolio Redesign & Visual System

> This file is the verbatim design brief provided by the project owner. Do not edit.
> See `../CLAUDE.md` for the working summary, current build status, and any confirmed overrides (e.g. availability copy changed to "Open to Work").

---

## 01. ROLE AND OBJECTIVE

You are working on an existing portfolio website for:

**Mohammed Haris**

**Professional Positioning:**

> Product Designer & Full-Stack Developer

The existing portfolio already contains the core content, project structure, professional positioning, and sections.

Your task is **NOT to completely rebuild the portfolio from scratch**.

Your task is to perform a comprehensive **visual design refinement, UI/UX improvement, design-system upgrade, readability improvement, and premium visual polish** while preserving the existing approved content and project information.

The current implementation is visually too dark and has insufficient visual variation. It currently feels like a dark developer/technology portfolio.

The desired result is:

> **A premium, modern, light-first product portfolio that combines Product Design, UI/UX, Full-Stack Development, SaaS, business applications, and professional career positioning.**

The final portfolio should be suitable for:

1. Qatar/GCC full-time job applications
2. International remote opportunities
3. Freelance clients
4. Startup/product collaborations
5. Product-focused technology companies
6. UI/UX and frontend/full-stack recruiters

The website should communicate:

> **I can design.
> I can build.
> I understand products.
> I understand business workflows.
> I can work professionally.**

---

# 02. IMPORTANT PRESERVATION RULE

Do not unnecessarily remove or rewrite the existing portfolio content.

Preserve the established:

* personal information
* project names
* project descriptions
* professional positioning
* experience
* skills
* case-study concepts
* Qatar/GCC job positioning
* freelance positioning
* project technologies
* contact information
* portfolio links

If content already exists in the implementation, keep it unless a visual hierarchy change requires restructuring it.

Do not invent:

* fake companies
* fake clients
* fake metrics
* fake awards
* fake statistics
* fake testimonials
* fake employment
* fake project outcomes

Do not create unsupported claims.

Where metrics are unavailable, use qualitative descriptions instead of fabricated numbers.

---

# 03. CORE PROFESSIONAL POSITIONING

The entire website should consistently position Mohammed Haris as:

# Mohammed Haris

## Product Designer & Full-Stack Developer

Primary statement:

> I design and build modern digital products where user experience, technology and business come together.

Secondary statement:

> UI/UX Designer and Full-Stack Developer focused on creating scalable SaaS platforms, business applications, dashboards and digital experiences from concept to implementation.

Core disciplines:

**Product Design • UI/UX • Frontend Development • Full-Stack Development • SaaS • Business Applications • Mobile Development • Product Thinking**

Availability:

> Based in Kerala, India
> Exploring full-time opportunities in Qatar & the GCC
> Available for selected freelance projects and product collaborations

---

# 04. PRIMARY DESIGN DIRECTION

Completely move away from the current overly dark visual treatment.

The website should become:

### LIGHT-FIRST

with selective dark sections.

The visual balance should approximately be:

**70% Light**

**20% Soft Gray**

**10% Dark / Accent**

Do NOT simply invert the current dark theme into pure white.

The new design should feel:

* premium
* clean
* modern
* sophisticated
* editorial
* spacious
* technical
* product-focused
* professional
* readable
* confident
* understated

The visual language should feel inspired by the quality level of:

* Linear
* Stripe
* Vercel
* Framer
* Notion

But do NOT copy any of these websites.

Create an original visual identity for Mohammed Haris.

---

# 05. VISUAL PERSONALITY

The portfolio should feel like:

> **A premium product created by a product designer.**

It should NOT feel like:

* a generic developer portfolio
* a cybersecurity website
* a gaming website
* an AI-generated landing page
* a generic SaaS template
* a resume converted into a website
* a Figma screenshot gallery

The design should communicate maturity.

Use:

* strong typography
* generous whitespace
* precise alignment
* sophisticated neutral colors
* subtle emerald accents
* high-quality project imagery
* controlled motion
* restrained borders
* subtle shadows
* strong visual hierarchy

---

# 06. COLOR DESIGN SYSTEM

Create CSS variables/design tokens for all colors.

## Primary Background
`#F7F8F6` — primary page background, replaces old continuous dark background. Intentionally slightly warm rather than pure white.

## White Surface
`#FFFFFF` — project cards, content cards, capability surfaces, experience sections, floating components, contact components.

## Secondary Background
`#F0F2EF` — About section, journey section, alternate content blocks, visual separation between major sections.

## Primary Text
`#0B1220` — headings, navigation, project titles, important content. Do not use pure `#000000`.

## Secondary Text
`#56606F` — normal body text.

## Muted Text
`#7B8490` — metadata, timestamps, secondary labels. Do not use extremely light gray for important body copy.

## Border
`#E2E6E2` — subtle 1px borders, visible but understated.

## Primary Accent
`#08A77A` — primary CTA, active navigation, availability indicator, important labels, small visual accents, hover states.

## Dark Accent
`#057A5B` — hover, pressed state, dark CTA treatment.

## Dark Section
`#0B1117` — used selectively (never as default page background). Recommended uses: selected featured case study, freelance CTA, footer.

---

# 07. COLOR USAGE RULE

Do not overuse emerald. Visual hierarchy: Neutral → Neutral → Neutral → Emerald accent, not Emerald → Emerald → Emerald → Emerald. Project visuals provide most of the color variety; the portfolio itself stays neutral.

---

# 08. TYPOGRAPHY SYSTEM

Use **Inter** as the primary font throughout. Do not use multiple decorative fonts.

- Display XL: 72–88px, weight 600–700, line-height 0.95–1.05 (sparingly)
- Hero Heading: 64–72px desktop / 52–60px tablet / 40–48px mobile, weight 600–700, line-height 1.0–1.08, max-width 600–680px
- Section Heading: 44–52px, weight 600, line-height 1.05–1.15
- Project Heading: 30–40px, weight 600
- Subheading: 20–24px, weight 500–600
- Body Large: 18–20px, line-height 1.6
- Body: 16–18px, line-height 1.65
- Small/Metadata: 13–14px, line-height 1.4
- Micro Labels: 11–12px, letter-spacing 0.08em, uppercase — category labels/metadata only

---

# 09. SPACING SYSTEM

8px-based: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 144, 160.

Major sections: 120–160px desktop, 80–120px tablet, 64–96px mobile. Whitespace must have hierarchy and purpose — no empty space for its own sake.

---

# 10. CONTAINER SYSTEM

Desktop max-width: 1280–1320px (1320–1440px for wide visual showcases). Side padding: 32–48px desktop, 24–32px tablet, 20–24px mobile.

---

# 11. GRID SYSTEM

Desktop: 12-column, 24px gap. Tablet: 8-column, 20px gap. Mobile: 4-column, 16px gap. Maintain strong alignment across nav, hero, projects, headings, content, footer.

---

# 12. BORDER RADIUS

Small 8px · Medium 12px · Large 16px · Featured surfaces 20–24px. Restrained — avoid an overly rounded "SaaS template" look.

---

# 13. SHADOW SYSTEM

```css
/* standard */
box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
/* elevated */
box-shadow: 0 16px 50px rgba(15, 23, 42, 0.08);
```

Avoid heavy black shadows or ubiquitous floating-card effects.

---

# 14. NAVIGATION

Left: **Mohammed Haris** (full name desktop) or **MH** (compact). Nav items: Work, About, Capabilities, Experience, Contact. Primary CTA: **Let's Talk →**. Availability: subtle green dot + text, not a large bright badge.

---

# 15. NAVIGATION BEHAVIOR

Initial: transparent/subtle. On scroll: `rgba(255,255,255,0.90)` with backdrop blur and subtle bottom border. Must stay highly readable — no heavy floating pill navbar.

---

# 16. HERO SECTION

Background: `#F7F8F6`.

Eyebrow: PRODUCT DESIGNER • FULL-STACK DEVELOPER (emerald)

Heading: "I design and build digital products that turn ideas into real-world solutions." — strong dark navy type, max-width 620–680px, not oversized.

Supporting copy: "I'm Mohammed Haris, a Product Designer and Full-Stack Developer focused on creating thoughtful, scalable and business-driven digital products. I combine product design, modern frontend engineering and backend development to take ideas from concept to implementation."

CTA: **View My Work →** (primary), **Let's Work Together →** (secondary)

Availability: "Currently exploring full-time opportunities in Qatar & the GCC, while available for selected freelance projects and product collaborations."

---

# 17. HERO VISUAL

Do NOT rely primarily on generic abstract tech illustration. Use actual portfolio work — layered composition from GCC Chalissery, NexaPOS, PropertyFlow AI screenshots: one large interface, two smaller floating interfaces, subtle background grid, very subtle emerald glow, clean shadows, rounded corners. Communicates DESIGN + PRODUCT + ENGINEERING. No excessive 3D.

---

# 18. HERO VISUAL RULE

Actual project screenshots always preferred over generic AI-generated illustrations. The work itself is the strongest proof of ability.

---

# 19. SELECTED WORK SECTION

Background: `#FFFFFF`. Heading: "Selected Work". Supporting: "A selection of digital products, platforms and experiences I've designed and built across SaaS, business software, sports technology, real estate, education and ecommerce."

---

# 20. FEATURED PROJECT CARD SYSTEM

White surface, subtle border, 20–24px radius, very soft shadow, large visual, strong typography, minimal metadata. Do NOT combine dark screenshot + dark card + dark background (visuals blend into interface).

---

# 21. PROJECT IMAGE FRAME

Light neutral image container `#EEF1EF`, actual product UI inside, screenshot occupies ~65–80% of visual area — the image is the main visual focus.

---

# 22. PROJECT CARD CONTENT

Category (e.g. SPORTS • SAAS • PLATFORM) → Title → one-sentence description → 3–4 technologies only → **View Case Study →**. Do not show 10 tech pills.

---

# 23. FEATURED PROJECT 01 — GCC CHALISSERY

Category: SPORTS • SAAS • PLATFORM
Title: GCC Chalissery Football Academy
Headline: "Turning tournament operations into a connected digital experience."
Description: "A centralized tournament and academy management platform designed to simplify team registration, player management, approvals, fixtures, results and tournament operations."
Role: Product Design • UI/UX • Frontend • Backend Architecture • Product Strategy
Tech: Next.js • TypeScript • Tailwind CSS • Django REST Framework • PostgreSQL • PWA
Flagship project — highlight accordingly.

---

# 24. GCC CHALISSERY VISUAL TREATMENT

Large showcase including: registration interface, player management, tournament dashboard, fixtures, knockout bracket, admin interface. May use a dark featured case-study section around this project specifically — intentional contrast against the light portfolio.

---

# 25. FEATURED PROJECT 02 — NEXAPOS

Category: SAAS • POS • RETAIL
Title: NexaPOS
Headline: "A modern operating system for small grocery businesses."
Description: "A business-focused SaaS POS platform designed to simplify billing, inventory and product management for small grocery businesses."
Role: Product Design • UX Architecture • Frontend • Backend • Database • DevOps
Tech: Next.js • TypeScript • Tailwind CSS • Django REST Framework • PostgreSQL • Docker • PWA
Show: POS, inventory, products, dashboard, CSV import/export, product management.

---

# 26. FEATURED PROJECT 03 — PROPERTYFLOW AI

Category: AI • REAL ESTATE • SAAS • MOBILE
Title: PropertyFlow AI
Headline: "Making real estate discovery and management more intelligent."
Description: "A GCC-focused real estate SaaS concept combining property discovery, management workflows and AI-powered capabilities into a unified digital experience."
Role: Product Design • UX Architecture • Mobile UI • Design System • Full-Stack Development
Tech: React Native • Expo • Next.js • TypeScript • Django REST
Show: mobile UI, property discovery, property details, dashboards, design system, AI-oriented interfaces.

---

# 27. FEATURED PROJECT ORDER

01 GCC Chalissery · 02 NexaPOS · 03 PropertyFlow AI — largest visual treatment, in this order.

---

# 28. MORE WORK

Not six repetitive dark cards — editorial list or compact grid. Include: MathBot (EDTECH • AI • FULL-STACK), Odrowita (WEB DESIGN • BRANDING • CLIENT PROJECT), Maison Élève (ECOMMERCE • FRONTEND • MOTION). Additional: PlaySphere, Turf Booking App, Baladna Offer Mart, Technical Debt Framework. Keep visually lighter than Featured Work.

---

# 29. ABOUT SECTION

Background: `#F0F2EF`. Eyebrow: ABOUT ME. Heading: "More than a designer. More than a developer."

Copy: "I'm Mohammed Haris, a Product Designer and Full-Stack Developer from Kerala, India, with a strong interest in building digital products that solve real business problems. My work sits at the intersection of design, engineering and product thinking. I enjoy understanding a problem, simplifying complexity, designing the experience, architecting the solution and turning it into a functional product. I've worked across SaaS platforms, POS systems, sports management, real estate, education, ecommerce and business websites, giving me experience with both customer-facing experiences and complex business workflows. Beyond individual projects, I'm interested in building scalable software products of my own, particularly SaaS, ERP/POS and AI-powered solutions for India and the GCC."

---

# 30. ABOUT VISUAL STRUCTURE

Left: portrait/personal visual. Right: about content. Below: three pillars.

---

# 31. THREE PILLARS

**01 — Design** / Understand the user. — "Clear, intuitive and purposeful experiences through user flows, information architecture, wireframes, interfaces, prototypes and design systems."

**02 — Engineering** / Build the solution. — "Responsive web and mobile products using modern frontend technologies and structured backend architectures."

**03 — Product** / Solve the right problem. — "Connecting design and technology with business requirements, operational workflows and long-term product goals."

Editorial three-column layout — avoid three large dark cards.

---

# 32. MY JOURNEY

Light background. Eyebrow: MY JOURNEY. Heading: "From designer to product builder."

Copy: "My journey started with an interest in creating digital experiences and gradually expanded into understanding how those experiences are engineered. Today, I work across both sides of the product lifecycle — designing interfaces and user experiences while also building the systems behind them. This combination has shaped the way I approach projects: I don't stop at designing a screen. I think about the user journey, the business workflow, the underlying architecture and how the final product will actually work."

---

# 33. JOURNEY VISUAL

Horizontal progression: UI/UX → Frontend → Full-Stack → Product Development → SaaS/AI. Subtle connected lines, no large colorful pills.

---

# 34. HOW I WORK

White background. Heading: "From problem to product." Six stages:

01 Understand — Understand users, business objectives, constraints and the actual problem.
02 Define — Structure requirements, user flows, information architecture and technical considerations.
03 Design — Create wireframes, interfaces, prototypes and reusable design systems.
04 Build — Translate the experience into clean, responsive and maintainable software.
05 Validate — Test workflows, audit implementation, identify issues and iterate.
06 Improve — Refine the product based on feedback, business needs and technical insights.

---

# 35. PROCESS VISUAL

Desktop: horizontal timeline. Mobile: vertical timeline. Numbered circles, thin connecting lines, subtle accent, large whitespace, no heavy cards.

---

# 36. PROFESSIONAL WORK STYLE

Four principles, minimal editorial blocks:

**Audit First** — Understand before changing.
**Design + Engineering** — Design experiences with technical reality in mind.
**Clean Architecture** — Build structured, reusable and maintainable systems.
**Business Connection** — Technology should solve an actual user or business problem.

---

# 37. EXPERIENCE

White background. Heading: "Experience."

> Note: the master prompt originally specified only the Softroniics entry below. Two additional confirmed roles (Aspira Design, Qatar freelance) have since been added — see CLAUDE.md §4 for the final authoritative experience list.

### UI/UX Mentor
**Softroniics — Palakkad, Kerala**
**March 2026 – August 2026**
"Worked across UI/UX design, design education and practical digital product development while mentoring learners on modern design principles, workflows and product creation."
Focus: UI/UX · Mentoring · Product Design · Design Systems
Do not exaggerate the role.

---

# 38. CAPABILITIES

Large editorial sections, not a repetitive grid of tiny cards.

**01 — Product Design:** UX strategy, User flows, Information architecture, Wireframing, UI design, Prototyping, Design systems, Responsive design, Interaction design
**02 — Frontend Development:** Next.js, React, TypeScript, JavaScript, Tailwind CSS, Shadcn UI, Responsive web, API integration
**03 — Backend Development:** Django, Django REST Framework, Python, PostgreSQL, REST APIs, Authentication, Database architecture, Business logic
**04 — Mobile Development:** React Native, Expo, Expo Router, API integration, Mobile UX
**05 — Product & SaaS:** SaaS architecture, Business workflows, Product strategy, System thinking, Technical auditing, MVP planning, Product architecture

---

# 39. TECHNOLOGY SECTION

Heading: "Tools I work with." Organized by category: Design (Figma) · Frontend (Next.js, React, TypeScript, JavaScript, Tailwind CSS, Shadcn UI) · Backend (Django, Django REST Framework, Python) · Database (PostgreSQL) · Mobile (React Native, Expo) · Engineering (Git, GitHub, Docker, PWA, REST APIs). AI-assisted development mentioned only as "AI-assisted development workflows" — not the main professional identity.

---

# 40. CAREER + FREELANCE SECTION

Background: `#F0F2EF`. Heading: "Open to meaningful opportunities."

> Note: availability copy throughout this section and elsewhere has been overridden to "Open to Work" — see CLAUDE.md §4.

Supporting: "I'm currently exploring opportunities in Qatar and the wider GCC, particularly within product design, UI/UX, frontend development and full-stack product engineering. I'm also available for selected freelance projects, remote work and product collaborations."

---

# 41. FULL-TIME COLUMN

**FULL-TIME / Qatar / GCC** — Interested in: Product Designer, UI/UX Designer, Frontend Developer, React Developer, Next.js Developer, Full-Stack Developer, Product Engineer. CTA: **View Resume →**

---

# 42. FREELANCE COLUMN

**FREELANCE / Remote / Global** — Available for: Website design and development, SaaS MVPs, Dashboard design, Business applications, POS/ERP interfaces, UI/UX redesigns, Frontend development, Full-stack product development, Design systems, Product prototypes. CTA: **Start a Project →**

---

# 43. FREELANCE CTA

One of the strongest visual sections. Dark background `#0B1117` with subtle emerald accent.

Heading: "Have a product idea? Let's turn it into something real."
Supporting: "From UX architecture and interface design to functional software, I can help transform an idea into a polished digital product."
Primary: **Start a Project →** · Secondary: **View My Work →**. No excessive glow.

---

# 44. CONTACT SECTION

Background: `#F7F8F6`. Heading: "Let's build something meaningful."
Copy: "Whether you're hiring for a product team, looking for a freelance partner, or exploring a new product idea, I'd love to hear about what you're building."
Contact methods: Email, LinkedIn, GitHub, Behance — real information only, never invented.

---

# 45. FOOTER

Background: `#0B1117`.
**Mohammed Haris** / **Product Designer & Full-Stack Developer**
"Designing experiences. Building products. Solving real problems."
Links: Work, About, Capabilities, Experience, Resume, LinkedIn, GitHub, Behance, Email.
Availability: "Open to Qatar/GCC opportunities & selected freelance projects." *(overridden to "Open to Work" — see CLAUDE.md)*

---

# 46. PROJECT CASE STUDY SYSTEM

Every major case study follows the same structure (sections can vary based on available information — never fabricate research or outcomes):

01 Project Hero · 02 Overview · 03 Problem · 04 Understanding/Research · 05 Strategy · 06 User Flow · 07 Wireframes · 08 Design System · 09 Final Product · 10 Technical Architecture · 11 Challenges · 12 Solutions · 13 Outcome · 14 Learnings · 15 Next Project

---

# 47. PROJECT CASE STUDY DESIGN

Mix of full-width screenshots, two-column comparisons, process diagrams, UI detail crops, design-system specimens, architecture diagrams, short explanatory text. Avoid placing every screenshot in the same card style — create visual rhythm.

---

# 48. IMAGE TREATMENT

Project images: 16–24px radius, subtle shadow, consistent framing, actual product screenshots wherever possible. No generic stock images unless genuinely required.

---

# 49. MOTION DESIGN SYSTEM

Page entrance: opacity 0→1, translateY 12px→0, duration 500–700ms.
Project hover: image scale 1→1.02, arrow moves slightly on text.
Navigation: smooth color/border transition.
Section reveal: subtle fade-up. Do not animate every element separately.

---

# 50. MOTION RULE

The portfolio should still feel premium with all animations disabled. Motion improves hierarchy, not noise. Respect `prefers-reduced-motion`.

---

# 51. RESPONSIVE SYSTEM

Desktop min target 1440px (optimize especially 1440×900, 1920×1080). Tablet 768–1199px. Mobile 360/390/414px.

---

# 52. MOBILE RULES

Do not simply shrink desktop. Stack hero content, visual below hero copy, horizontal or vertical project card compositions, clean collapsed nav, readable typography, 20–24px page padding, 44px+ button height, large screenshots, no tiny text.

---

# 53. ACCESSIBILITY

WCAG-conscious contrast, semantic HTML, keyboard navigation, visible focus states, alt text, accessible buttons/nav, readable font sizes, reduced-motion support. Never sacrifice readability for style.

---

# 54. PERFORMANCE

Optimize images, fonts, JS, animations, lazy loading, responsive images, component architecture, dependencies. No large background videos or heavy 3D scenes unless essential.

---

# 55. SEO

Title: "Mohammed Haris — Product Designer & Full-Stack Developer"
Description: "Mohammed Haris is a Product Designer and Full-Stack Developer creating modern SaaS platforms, business applications and digital products across design, frontend and backend development."
Natural terms: Product Designer, UI/UX Designer, Full-Stack Developer, Frontend Developer, Next.js Developer, SaaS, Qatar, GCC, Freelance. No keyword stuffing.

---

# 56. PERSONAL BRAND DETAILS

Initials **MH** as a subtle personal brand mark where appropriate. No overly complicated logo — typography and layout carry the brand.

---

# 57. DESIGN SYSTEM COMPONENTS

Reusable components: Navbar, Buttons, SectionHeading, ProjectCard, ProjectTag, CaseStudyHero, CaseStudyMeta, ImageFrame, CapabilityBlock, ProcessStep, ExperienceItem, AvailabilityCard, ContactLink, Footer, Badge, Divider. All using shared design tokens — no hardcoded random values.

---

# 58. DESIGN TOKENS

Centralized tokens for: Colors (Primary background, Surface, Secondary background, Text, Secondary text, Muted, Border, Accent, Dark section), Typography (Display, H1, H2, H3, Body Large, Body, Small, Micro), Spacing (4–160px system), Radius (8/12/16/20/24), Shadows (Subtle/Medium), Container (1280–1320px). Should make future refinements easy.

---

# 59. VISUAL RHYTHM

```
LIGHT     Hero
WHITE     Selected Work
SOFT GRAY About
DARK      Featured Case Study
WHITE     More Work
SOFT GRAY Journey
WHITE     How I Work
WHITE     Experience
SOFT GRAY Capabilities / Career
DARK      Freelance CTA
LIGHT     Contact
DARK      Footer
```

Prevents visual monotony.

---

# 60. IMPORTANT: PROJECTS SHOULD PROVIDE THE COLOR

The website itself stays mostly neutral. Project screenshots introduce emerald, blue, orange, gold, purple, other project-specific colors — this makes the portfolio feel curated, not colorful throughout.

---

# 61. REMOVE / REDUCE

Reduce or remove: excessive dark backgrounds, excessive glow, excessive glassmorphism, excessive gradient, too many pill badges, too many cards, tiny text, low-contrast gray, giant empty spaces, generic AI illustrations, repetitive layouts, unnecessary decorative objects, over-animated elements.

---

# 62. PRESERVE

Preserve: project hierarchy, professional identity, case-study approach, strong project descriptions, Qatar/GCC availability *(now "Open to Work")*, freelance positioning, design+engineering positioning, technical credibility, project details, professional tone.

---

# 63. FINAL HOMEPAGE FLOW

```
NAVIGATION
HERO — Product Designer & Full-Stack Developer
SELECTED WORK — GCC Chalissery, NexaPOS, PropertyFlow AI
ABOUT — More than a designer. More than a developer.
DESIGN / ENGINEERING / PRODUCT
FEATURED CASE STUDY — GCC Chalissery
MORE WORK — MathBot, Odrowita, Maison Élève
MY JOURNEY — From designer to product builder.
HOW I WORK — Understand → Define → Design → Build → Validate → Improve
EXPERIENCE
CAPABILITIES
TOOLS / TECHNOLOGY
OPEN TO OPPORTUNITIES — Full-time (Qatar/GCC) / Freelance (Remote/Global)
FREELANCE CTA — Have a product idea?
CONTACT — Let's build something meaningful.
FOOTER
```

---

# 64. FINAL QUALITY BAR

Before considering the redesign complete, evaluate against: Professional (would a Qatar/GCC company confidently hire?) · Readability (comfortable without eye strain?) · Design (intentional hierarchy?) · Product (feels like a premium digital product itself?) · Portfolio (real projects more prominent than decoration?) · UX (understand who Mohammed is within 10 seconds?) · Career (clear Qatar/GCC availability?) · Freelance (clear freelance availability?) · Engineering (technical credibility without becoming a resume?) · Design (product thinking without becoming a Dribbble gallery?) · Mobile (intentionally designed, not shrunk?) · Performance (fast and responsive?)

---

# 65. FINAL SUCCESS CRITERIA

> Mohammed Haris is a Product Designer and Full-Stack Developer who can understand a problem, design a strong experience, build the product and think about the business behind it.

Appropriate for: Qatar/GCC Recruiters, Technology Companies, Startups, Product Teams, Freelance Clients, Founders, Businesses.

---

# 66. FINAL DESIGN STATEMENT

> Light-first. Premium. Minimal. Editorial. Technical. Human.

Warm off-white backgrounds · White surfaces · Deep navy typography · Subtle emerald accents · Actual product interfaces · Large typography · Generous but controlled whitespace · Minimal borders · Subtle shadows · Restrained motion · Selective dark sections.

Should feel: clean enough for a recruiter, premium enough for a client, technical enough for an engineering team, product-focused enough for a startup.

---

# 67. IMPLEMENTATION INSTRUCTION

1. Inspect existing implementation. 2. Identify current sections/reusable components. 3. Preserve approved content. 4. Identify current dark-theme styles. 5. Replace global visual system with new light-first tokens. 6. Refactor components to use shared tokens. 7. Redesign section layouts where specified. 8. Improve project image presentation. 9. Add clear Qatar/GCC full-time positioning. 10. Add clear freelance positioning. 11. Improve responsive behavior. 12. Add subtle motion. 13. Optimize accessibility. 14. Optimize performance. 15. Test desktop and mobile layouts. 16. Verify no project information was accidentally removed. 17. Verify all CTAs and links. 18. Check typography and contrast. 19. Check spacing consistency. 20. Final visual polish pass.

Do not rush directly into implementation — inspect first, then apply systematically.

---

# 68. FINAL DIRECTIVE

**Do not make the website simply "lighter."**

Make it feel like a completely refined premium light-first product portfolio while preserving existing content and project identity. Must NOT look like a simple dark→white inversion — should look like a professionally art-directed Product Designer + Full-Stack Developer portfolio with a sophisticated light-first design system.

Prioritize, in this order: **Readability → Hierarchy → Project presentation → Professional credibility → Visual polish → Motion.**

The website should be impressive because of its clarity, product thinking and craftsmanship — not excessive visual effects.
