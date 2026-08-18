# Project Context & Memory (MEMORY.md)

## 1. Overview
This document serves as persistent memory and context tracking across development sessions for the **Vasudevan Portfolio Website**.

---

## 2. Key Technical Context & Decisions
* **Primary Objective:** Build a clean, high-performance, responsive React 19 + Vite personal portfolio site.
* **Core Documentation Inventory:**
  * `README.md` – Project overview, tech stack highlights, installation, and deployment commands.
  * `PRD.md` – Product Requirements Document defining target audience, user stories, and feature requirements.
  * `ARCHITECTURE.md` – System architecture, project structure, component breakdown, data flow, and CI/CD pipeline.
  * `RULES.md` – Coding standards, Git conventions, accessibility benchmarks, and quality requirements.
  * `PHASES.md` – 4-phase development roadmap and completion tracking.
  * `DESIGN.md` – UI/UX design philosophy, color system, typography scale, and component guidelines.
  * `MEMORY.md` – Project state tracking and context memory (this file).

---

## 3. Current Project State
* **Phase 1 (Planning & Documentation):** **Complete**
* **Phase 2 (Core Components & Layout Development):** **Complete**
  * `Navbar.jsx` with mobile navigation drawer.
  * `Hero.jsx` & `HeroBackground.jsx` with interactive particle background and motion effects.
  * `FeaturedStack.jsx` showcasing core technical skills.
  * `About.jsx` presenting background details and personal bio.
  * `Skills.jsx` listing technical proficiency categories.
  * `Projects.jsx` featuring dynamic project cards with live links and repository tags.
  * `Contact.jsx` & `Footer.jsx` providing direct contact channels and footer navigation.
* **Phase 3 (Functionality & Integration):** **In Progress**
  * Data centralization in `src/data.js`.
  * Motion animation integration (`motion`).
  * Contact form handling setup.
* **Phase 4 (Optimization & Deployment):** **Next Steps**
  * Deployment verification on GitHub Pages (`gh-pages`) / Vercel.
  * Accessibility and Lighthouse performance audits.

---

## 4. Environment & Build Configuration
* `npm run dev` – Launch Vite local development server.
* `npm run build` – Compile production bundle to `dist/`.
* `npm run preview` – Serve production preview locally.