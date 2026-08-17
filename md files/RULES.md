# Development Rules & Coding Standards (RULES.md)

## 1. Overview
This document establishes coding standards, Git workflows, accessibility standards, and contribution guidelines for the portfolio project.

---

## 2. Coding Standards & Best Practices

### Code Style & Formatting:
* **JS/JSX:** Use ES6+ syntax, clear variable naming (camelCase), and functional React components with hooks.
* **HTML/JSX Markup:** Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
* **CSS/Tailwind:** Keep utility classes organized logically; extract repetitive component styles using `@apply` or dedicated components when applicable.
* **Formatting:** Enforce code styling using Prettier and linting using ESLint.

---

## 3. Git Workflow & Commit Rules

### Branch Strategy:
* `main`: Production-ready code only.
* `feature/<feature-name>`: Individual features or updates (e.g., `feature/contact-form`, `feature/dark-mode`).
* `fix/<bug-description>`: Bug fixes and performance patches.

### Commit Conventions:
Follow Conventional Commits structure:
* `feat: add interactive project filter`
* `fix: correct layout glitch on mobile view`
* `docs: update RULES.md and ARCHITECTURE.md`
* `style: tweak theme accent colors`

---

## 4. Accessibility & Quality Rules

1. **Images:** All `<img>` tags must include meaningful `alt` text.
2. **Keyboard Navigation:** All interactive elements (`<button>`, `<a>`, forms) must be accessible via keyboard navigation with visible focus indicators.
3. **Responsive Testing:** Verify layout and functionality on screen widths: 320px (Mobile), 768px (Tablet), and 1280px+ (Desktop).
4. **Performance:** Images must be optimized (WebP format preferred) and lazy-loaded where necessary.
