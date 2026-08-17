# System Architecture & Tech Stack (ARCHITECTURE.md)

## 1. Overview
This document outlines the architectural design, directory structure, data flow, and deployment pipeline for the Personal Portfolio Website.

---

## 2. Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React / Next.js or Vanilla HTML5/CSS3/JS |
| **Styling** | Tailwind CSS / CSS Modules |
| **Hosting & Deployment** | Vercel / Netlify / GitHub Pages |
| **Form Handling** | Formspree / Web3Forms / EmailJS |
| **Version Control** | Git & GitHub |

---

## 3. Directory Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.json
│   │   └── skills.json
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── ARCHITECTURE.md
├── PRD.md
├── README.md
└── package.json
```

---

## 4. System Data Flow

```
[ Visitor ]
    │
    ▼
[ Static/SSR Frontend ] ───(Fetch Static Data)───► [ Local JSON / CMS ]
    │
    ├─────► [ Project / Resume Download Links ]
    │
    └─────► [ Contact Form ] ───(API Request)───► [ Form Service / Email Gateway ]
```

---

## 5. Deployment & CI/CD Pipeline
* **Trigger:** Push to `main` branch on GitHub.
* **Build System:** Vercel / Netlify automatically runs `npm run build`.
* **CDN Distribution:** Assets are cached and served globally via edge network nodes.
