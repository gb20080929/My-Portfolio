# UI/UX & Design Guidelines (DESIGN.md)

## 1. Design Philosophy
The design philosophy for the **Vasudevan Portfolio Website** focuses on modern minimalism, sleek dark-mode aesthetic, vibrant accent lighting, typography contrast, fluid motion, and responsive navigation. The visual hierarchy ensures core skills, featured projects, experience, and contact channels are immediately accessible.

---

## 2. Color Palette & Aesthetic

### Dark Mode Aesthetic (Default)
* **Canvas Background:** `#090d16` / `#0f172a` (Deep Slate / Dark Mesh)
* **Surface / Cards:** `#1e293b` (Slate 800) with subtle glassmorphism (`backdrop-blur-md`, `border-white/10`)
* **Text Primary:** `#f8fafc` (Slate 50)
* **Text Secondary:** `#94a3b8` (Slate 400)
* **Primary Accent:** `#38bdf8` (Sky 400)
* **Secondary Accent:** `#6366f1` / `#818cf8` (Indigo 500/400)
* **Glow & Gradient Accents:** Cyan-to-Indigo radial gradients for hero background particle visuals

### Light Mode Adaptation (Optional)
* **Canvas Background:** `#f8fafc` (Slate 50)
* **Surface / Cards:** `#ffffff` (White Card with subtle shadow `shadow-sm`)
* **Text Primary:** `#0f172a` (Slate 900)
* **Text Secondary:** `#64748b` (Slate 500)
* **Primary Accent:** `#0284c7` (Sky 600)
* **Secondary Accent:** `#4f46e5` (Indigo 600)

---

## 3. Typography & Visual Hierarchy

* **Primary Font:** Geist Variable (`@fontsource-variable/geist`) / Inter (`font-sans`)
* **Code / Tech Stack Tags:** JetBrains Mono / Fira Code (`font-mono`)

### Typography Scale:
* **Hero Headline (H1):** `text-4xl` to `text-6xl` (`font-bold`, `tracking-tight`)
* **Section Header (H2):** `text-3xl` to `text-4xl` (`font-bold`, accent gradient underline)
* **Card Header (H3):** `text-xl` (`font-semibold`)
* **Body Text:** `text-base` / `text-sm` (`font-normal`, `leading-relaxed`)
* **Badges & Micro-copy:** `text-xs` (`font-medium`, `uppercase`, `tracking-wider`)

---

## 4. UI Components & Interaction Guidelines

1. **Header & Navigation Bar (`Navbar.jsx`):**
   * Fixed top navigation with frosted glass blur backdrop (`backdrop-blur-md bg-slate-950/80`).
   * Smooth active indicator on link hover and mobile drawer animation.

2. **Hero & Interactive Background (`Hero.jsx` & `HeroBackground.jsx`):**
   * Particle visuals and animated glowing background gradient.
   * Call to Action (CTA) buttons: "View Work", "Get in Touch", and quick social links.

3. **Featured Tech Stack (`FeaturedStack.jsx`):**
   * Highlighted badge icons powered by Lucide & React Icons.
   * Responsive layout with subtle hover scaling (`hover:scale-105 transition-transform`).

4. **Project Grid (`Projects.jsx`):**
   * Multi-column grid (1 column on mobile, 2–3 on desktop).
   * Project cards featuring tech stack badges, GitHub source repository link, and live demo buttons.

5. **Contact Channel & Form (`Contact.jsx`):**
   * Clean input fields with clear focus rings (`focus:ring-2 focus:ring-sky-400`).
   * Direct access buttons for email, LinkedIn, and GitHub profiles.

6. **Animations & Micro-interactions (`Motion`):**
   * Smooth entry reveal animations on section scroll.
   * Responsive touch targets (minimum 44x44px target area for mobile usability).
