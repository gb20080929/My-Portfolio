# Development Phases & Roadmap (PHASES.md)

## 1. Overview
This document breaks down the development lifecycle of the Personal Portfolio Website into clear, actionable phases.

---

## 2. Project Roadmap & Phases

### Phase 1: Planning & Setup
* **Goal:** Define requirements, select tech stack, and set up project repository.
* **Tasks:**
  * Define project goals and features (`PRD.md`, `ARCHITECTURE.md`, `RULES.md`).
  * Initialize repository with directory structure and build tools (e.g., Vite/Next.js).
  * Configure ESLint, Prettier, and Tailwind CSS.

---

### Phase 2: Core Components & Layout Development
* **Goal:** Build key UI sections and responsive layout structure.
* **Tasks:**
  * Implement Navbar with navigation links and mobile drawer.
  * Create Hero section with call-to-action buttons.
  * Construct About Me, Skills, and Experience sections.
  * Build dynamic Projects grid with interactive project cards.
  * Implement Contact Form UI with input validation.

---

### Phase 3: Functionality & Integration
* **Goal:** Wire up interactivity, contact form handler, and theme switching.
* **Tasks:**
  * Integrate form submission service (e.g., Formspree, EmailJS, or Web3Forms).
  * Implement Light/Dark mode state management.
  * Connect project filter controls to filter projects dynamically.
  * Add resume download capability and verified external social links.

---

### Phase 4: Testing, Optimization & Deployment
* **Goal:** Ensure cross-device compatibility, accessibility, performance, and go live.
* **Tasks:**
  * Audit performance and accessibility using Google Lighthouse (Target > 90).
  * Test responsive behavior on Mobile, Tablet, and Desktop screen widths.
  * Configure production build scripts and deploy to Vercel/Netlify.
  * Verify domain setup, SSL certification, and live contact form testing.
