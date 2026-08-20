<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Workbench Showcase

A focused project showcase documenting an AI Engineering internship (Jan–Jun 2026). Not a personal portfolio — purely a collection of projects built, skills learned, and work done during the internship.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first configuration via `@import "tailwindcss"`)
- **Animations:** Framer Motion
- **Icons:** Inline SVG components
- **Fonts:** Geist (Inter-based) via `next/font/google`

## Key Conventions

- **Dark mode default:** The `<html>` element has `className="dark"` — all components default to dark theme
- **Components are client components** when using Framer Motion (`"use client"` directive)
- **Data is static:** All project/experience/skill data lives in `src/data/` files — no external API calls at build time
- **Internship projects only:** All projects listed were built during an AI Engineering internship (Jan–Jun 2026); personal and academic projects are excluded
- **params are async:** In Next.js 16, `params` must be awaited in page components

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Navbar + Footer
│   ├── page.tsx             # Homepage (all sections stacked)
│   ├── methodology/
│   │   └── page.tsx         # Engineering methodology page (4-phase framework)
│   ├── projects/
│   │   ├── page.tsx         # Full projects grid
│   │   └── [slug]/page.tsx  # Project case study (dynamic)
│   ├── skills/page.tsx      # Skills matrix
│   ├── experience/page.tsx  # Experience timeline
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots config
├── components/
│   ├── ui/
│   │   ├── ai-card.tsx      # AICard: gradient overlays, grid pattern, hover glow effects
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   └── card.tsx         # Original Card (legacy)
│   ├── layout/
│   │   ├── navbar.tsx       # Includes tech ticker bar on scroll
│   │   └── footer.tsx
│   ├── icons/
│   ├── hero.tsx             # Homepage hero with tech marquee + CTA buttons
│   ├── methodology-content.tsx # 4-phase engineering process + tool selection table
│   ├── projects-grid.tsx    # Project grid wrapper
│   ├── project-card.tsx     # Uses AICard with metrics display
│   ├── project-detail.tsx   # Case study detail view with metrics badges
│   ├── skills-matrix.tsx    # Skills with proficiency labels (Expert/Advanced/Proficient/Competent)
│   ├── experience-timeline.tsx
│   ├── section-heading.tsx  # Gradient text + divider lines
│   ├── tech-tag.tsx         # Color-coded by technology category
│   ├── status-badge.tsx
│   └── theme-toggle.tsx
├── data/
│   ├── projects.ts          # 8 internship projects with case study data + metrics
│   ├── experience.ts        # Internship experience + education
│   └── skills.ts            # 6 skill categories
└── lib/
    ├── types.ts             # TypeScript interfaces (Project includes metrics?)
    └── utils.ts             # cn() utility
```

## Design System

- **Colors:** Dark mode with navy-based palette (--background: #020617, --card: #0a0a0f), electric blue accent (--primary: #60a5fa), purple secondary accent (--accent: #a78bfa). Light mode defaults to clean white/slate palette. CSS variables defined in `globals.css`.
- **Typography:** Geist Sans (headings/body), Geist Mono (code/tags, technical elements)
- **Components:**
  - **AICard:** Clean card component with border, background, and optional hover shadow lift. No gradient overlays, grid patterns, or glow effects.
  - **TechTag:** Color-coded by technology category (AI/ML: purple, frontend: cyan, backend: emerald, infra: orange)
  - **SectionHeading:** Plain bold text headings with optional subtitle — no gradient text or decorative dividers
- **Animations:** Framer Motion scroll-triggered fade-ins
- **Icons:** Lucide React (installed as dependency)
- **No rainbow gradients, glow effects, or emoji icons are used in the codebase.**

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | page.tsx | Hero + Projects Grid + Methodology CTA + Skills + Experience |
| `/projects` | projects-grid.tsx | Full 8-project grid |
| `/projects/[slug]` | project-detail.tsx | Case study with metrics badges, tech tags, problem/solution/impact sections |
| `/skills` | skills-matrix.tsx | 6 categories with proficiency-based color coding |
| `/experience` | experience-timeline.tsx | Internship timeline + education |
| `/methodology` | methodology-content.tsx | 4-phase engineering framework + tool selection decision table |

## Build & Deploy

```bash
npm run build     # Static site generation
npm run dev       # Development server
```

## Important Notes

- Tailwind v4 uses `@import "tailwindcss"` and `@theme inline {}` — NOT the old `@tailwind` directives or `tailwind.config.ts`
- Color palette is defined via CSS custom properties with dark mode in `.dark` class
- The `projects-grid.tsx` component accepts a `showViewAll` prop to limit to 6 items with a "View All" link on the homepage
- All new components use the `"use client"` directive when using Framer Motion
- The `AICard` component accepts `hover` (boolean), `accent` ("blue"|"purple"|"emerald"), and `delay` props
- Projects now include an optional `metrics` field for displaying key performance indicators on cards and detail pages
