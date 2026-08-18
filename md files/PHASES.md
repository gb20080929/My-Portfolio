# Development Phases & Roadmap (PHASES.md)

## 1. Overview
This document breaks down the development lifecycle of the **Vasudevan Portfolio Website** into 4 actionable phases.

---

## 2. Project Roadmap & Phases

### Phase 1: Planning & Setup [Status: Completed]
* **Goal:** Define requirements, select tech stack, and set up project repository.
* **Tasks:**
  * [x] Define project goals and features (`PRD.md`, `ARCHITECTURE.md`, `RULES.md`).
  * [x] Initialize repository with React 19 + Vite 6 and Tailwind CSS v4.
  * [x] Configure icon packages (`lucide-react`, `react-icons`) and motion support (`motion`).
  * [x] Establish documentation directory (`md files/`).

---

### Phase 2: Core Components & Layout Development [Status: Completed]
* **Goal:** Build key UI sections and responsive layout structure.
* **Tasks:**
  * [x] Implement `Navbar.jsx` with navigation links and mobile drawer.
  * [x] Create `Hero.jsx` and `HeroBackground.jsx` with particle animations and CTA buttons.
  * [x] Build `FeaturedStack.jsx` to showcase core technical tools.
  * [x] Construct `About.jsx` for personal bio and background details.
  * [x] Build `Skills.jsx` for categorized skill matrix display.
  * [x] Construct `Projects.jsx` grid with project cards and quick links.
  * [x] Build `Contact.jsx` form UI and direct social channel buttons.
  * [x] Add `Footer.jsx` with copyright notice and navigation links.

---

### Phase 3: Functionality & Data Integration [Status: In Progress]
* **Goal:** Wire up interactivity, centralize data, and refine smooth scrolling.
* **Tasks:**
  * [x] Centralize component data inside `src/data.js`.
  * [ ] Connect contact form submission handler (Formspree / Web3Forms / EmailJS).
  * [x] Add smooth scrolling and active nav link indicators.
  * [ ] Add resume PDF download link in public assets.

---

### Phase 4: Testing, Optimization & Deployment [Status: Next Steps]
* **Goal:** Ensure cross-device compatibility, accessibility, performance, and go live.
* **Tasks:**
  * [ ] Audit performance and accessibility using Google Lighthouse (Target > 90).
  * [ ] Test responsive behavior across Mobile (320px+), Tablet (768px+), and Desktop (1280px+).
  * [ ] Build production assets via `npm run build`.
  * [ ] Deploy to GitHub Pages (`gh-pages`) or Vercel edge network.
  * [ ] Verify live domain, SSL, and contact form functionality.
