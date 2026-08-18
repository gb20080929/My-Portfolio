# System Architecture & Tech Stack (ARCHITECTURE.md)

## 1. Overview
This document outlines the architectural design, directory structure, component hierarchy, data flow, and deployment pipeline for the **Vasudevan Portfolio Website**.

---

## 2. Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), Geist Font (`@fontsource-variable/geist`) |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion) + `tw-animate-css` |
| **Component Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority`, `@base-ui/react` |
| **Hosting & Deployment** | [GitHub Pages](https://pages.github.com/) (`gh-pages`) / [Vercel](https://vercel.com/) |
| **Version Control** | Git & GitHub |

---

## 3. Directory Structure

```
vasudevan-portfolio/
├── public/
│   └── (Static assets, favicon, resume PDF)
├── src/
│   ├── components/
│   │   ├── animate-ui/        # Reusable motion & UI animation components
│   │   ├── About.jsx          # Personal background & introduction
│   │   ├── Contact.jsx        # Contact channels & interactive form UI
│   │   ├── FeaturedStack.jsx  # Highlighted core technical stack
│   │   ├── Footer.jsx         # Footer metadata & quick navigation links
│   │   ├── Hero.jsx           # Hero banner & intro tagline
│   │   ├── HeroBackground.jsx # Dynamic background visuals & particle effects
│   │   ├── Navbar.jsx         # Responsive navigation header & drawer
│   │   ├── Projects.jsx       # Interactive portfolio projects grid
│   │   └── Skills.jsx         # Categorized technical skill matrix
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility helpers (e.g., cn utility function)
│   ├── App.jsx                # Core application wrapper & section layout
│   ├── data.js                # Centralized project, skill, & experience data
│   ├── index.css              # Global styles & Tailwind CSS imports
│   └── main.jsx               # React DOM entry point
├── md files/
│   ├── ARCHITECTURE.md        # System architecture & tech stack (this file)
│   ├── DESIGN.md              # UI/UX design guidelines & styling rules
│   ├── MEMORY.md              # Persistent project context & progress state
│   ├── PHASES.md              # 4-phase development roadmap & task checklist
│   ├── PRD.md                 # Product Requirements Document
│   └── RULES.md               # Coding standards & git conventions
├── README.md                  # Project overview & quick start guide
├── components.json            # Shadcn UI configuration
├── index.html                 # HTML entry point
├── jsconfig.json              # JavaScript compiler & path alias configuration
├── package.json               # Dependencies & build scripts
└── vite.config.js             # Vite build & plugin configuration
```

---

## 4. System Data Flow

```
                     [ Visitor ]
                         │
                         ▼
        [ React 19 Single Page Application ]
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
[ Static Data ]  [ Motion Effects ]  [ External Links ]
(src/data.js)    (Framer Motion)    (GitHub / LinkedIn)
        │                                 │
        └───────────────┬─────────────────┘
                        │
                        ▼
               [ Contact Form UI ]
                        │
                        ▼
            [ Email Gateway / Service ]
```

---

## 5. Deployment & CI/CD Pipeline

* **Local Development:** Run `npm run dev` for Vite hot-module replacement (HMR).
* **Production Build:** Run `npm run build` to compile optimized assets into the `dist/` directory.
* **Preview Build:** Run `npm run preview` to locally serve the production bundle.
* **Deployment Trigger:** Deploy to GitHub Pages (`npm run build && npx gh-pages -d dist`) or automatically via Vercel GitHub integration upon pushing to the `main` branch.
