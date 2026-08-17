# UI/UX & Design Guidelines (DESIGN.md)

## 1. Design Philosophy
The design philosophy for this portfolio focuses on minimalism, high typography contrast, fluid responsiveness, and intuitive navigation. The visual hierarchy ensures that key information—such as core skills, featured projects, and contact channels—is immediately accessible to visitors.

---

## 2. Color Palette & Theming

### Dark Mode (Default)
* **Background:** `#0f172a` (Slate 900)
* **Surface / Cards:** `#1e293b` (Slate 800)
* **Text Primary:** `#f8fafc` (Slate 50)
* **Text Secondary:** `#94a3b8` (Slate 400)
* **Primary Accent:** `#38bdf8` (Sky 400)
* **Secondary Accent:** `#6366f1` (Indigo 500)

### Light Mode
* **Background:** `#f8fafc` (Slate 50)
* **Surface / Cards:** `#ffffff` (White)
* **Text Primary:** `#0f172a` (Slate 900)
* **Text Secondary:** `#64748b` (Slate 500)
* **Primary Accent:** `#0284c7` (Sky 600)
* **Secondary Accent:** `#4f46e5` (Indigo 600)

---

## 3. Typography & Hierarchy

* **Primary Font:** Inter / System Sans-Serif (`font-sans`)
* **Code / Tech Stack Tags:** JetBrains Mono / Fira Code (`font-mono`)

### Scale:
* **Hero Headline (H1):** `text-4xl` to `text-6xl` (`bold`)
* **Section Title (H2):** `text-2xl` to `text-3xl` (`semibold`)
* **Card Title (H3):** `text-xl` (`medium`)
* **Body Text:** `text-base` / `text-sm` (`normal`, line-height: `1.6`)

---

## 4. UI Components & Layout Guidelines

1. **Navigation:**
   * Fixed/Sticky navbar with blur background backdrop (`backdrop-blur-md`).
   * Subtle active link indicator and hover animations.

2. **Project Cards:**
   * Grid layout (1 column on mobile, 2–3 columns on desktop).
   * Hover effects: Slight vertical elevation (`-translate-y-1`) and border accent highlight.
   * Prominent tag styling for tech stack badges and quick links (GitHub, Live Demo).

3. **Buttons & Interactivity:**
   * Clear primary CTA buttons with filled accent colors.
   * Secondary outline buttons with subtle hover transitions.
   * Touch-friendly hit targets (minimum 44x44px for touch devices).

4. **Animations & Micro-interactions:**
   * Smooth scrolling enabled (`scroll-behavior: smooth`).
   * Subtle entry animations on page load / scroll reveal (Framer Motion / CSS transitions).
