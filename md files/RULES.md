# Development Rules & Coding Standards (RULES.md)

## 1. Overview
This document establishes coding standards, Git workflows, component conventions, accessibility standards, and quality requirements for the **Vasudevan Portfolio Website**.

---

## 2. Coding Standards & Best Practices

### Code Style & React Standards:
* **React 19 & JSX:** Use functional React components with hooks (`useState`, `useEffect`, `useMemo`). Keep component code clean and modular.
* **Semantic HTML:** Use proper semantic container tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **Styling (Tailwind CSS v4):** Utilize utility classes effectively; extract complex inline styles into reusable components or Tailwind helper classes.
* **Component Organization:** Keep components located in `src/components/` and centralize shared data inside `src/data.js`.

---

## 3. Git Workflow & Commit Rules

### Branch Strategy:
* `main`: Production-ready code only.
* `feature/<feature-name>`: New feature implementations (e.g., `feature/contact-form`, `feature/hero-background`).
* `fix/<bug-description>`: Bug fixes and performance adjustments.

### Commit Conventions:
Follow Conventional Commits guidelines:
* `feat: implement interactive project cards component`
* `fix: correct navbar blur layout on mobile screens`
* `docs: update ARCHITECTURE.md and README.md`
* `style: refine background particle glow color palette`

---

## 4. Accessibility & Performance Guidelines

1. **Accessibility (a11y):**
   * All images and icons must have appropriate `alt` attributes or `aria-label` tags.
   * Form inputs must be correctly linked with corresponding labels.
   * Interactive buttons and links must maintain visible focus outlines for keyboard navigation.

2. **Responsive Standards:**
   * Verify UI across 320px (Mobile Small), 768px (Tablet), 1024px (Desktop), and 1440px+ (Ultra-wide).

3. **Performance Optimization:**
   * Optimize image sizes and lazy-load visual assets.
   * Tree-shake unused icons and library imports.
