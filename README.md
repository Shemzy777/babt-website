# Forvis Mazars Nigeria — Website Clone

A production-grade clone of [forvismazars.com/ng/en](https://www.forvismazars.com/ng/en) built with React 18 + Vite + Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Forms | React Hook Form |
| SEO | React Helmet Async |
| Date formatting | date-fns |
| Accessibility | Headless UI |
| Icons | Heroicons |

---

## Project Structure

```
forvis-mazars-ng/
├── public/
│   └── images/               # Static assets (favicons, OG images)
├── src/
│   ├── assets/               # Images, icons used in components
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx        # Root layout wrapper
│   │   │   ├── Header.jsx        # Sticky header with desktop + mobile nav
│   │   │   ├── MegaMenu.jsx      # Desktop mega dropdown
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   ├── LocationDropdown.jsx
│   │   │   ├── SearchOverlay.jsx
│   │   │   └── CookieBanner.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx          # NewsCard, ServiceCard
│   │   │   ├── HeroSlider.jsx
│   │   │   └── StatCounter.jsx
│   │   └── sections/
│   │       ├── PageBanner.jsx
│   │       ├── WhatWeDoSection.jsx
│   │       ├── WorldwideSection.jsx
│   │       ├── AboutNigeriaSection.jsx
│   │       ├── InsightsPreview.jsx
│   │       ├── JoinUsSection.jsx
│   │       ├── ContactSection.jsx
│   │       └── ListingSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Industries/
│   │   │   ├── index.jsx
│   │   │   └── IndustryDetail.jsx
│   │   ├── Services/
│   │   │   ├── index.jsx
│   │   │   └── ServiceDetail.jsx
│   │   ├── Insights/
│   │   │   ├── index.jsx
│   │   │   └── InsightDetail.jsx
│   │   ├── WhoWeAre/
│   │   │   ├── index.jsx
│   │   │   └── WhoWeAreDetail.jsx
│   │   ├── Contact/
│   │   │   ├── index.jsx
│   │   │   ├── EnquiryForm.jsx
│   │   │   ├── OurPeople.jsx
│   │   │   ├── Offices.jsx
│   │   │   └── OfficeDetail.jsx
│   │   └── Legals/
│   │       ├── LegalPage.jsx
│   │       └── Sitemap.jsx
│   ├── data/                  # Static JSON content
│   │   ├── navigation.json
│   │   ├── services.json
│   │   ├── industries.json
│   │   ├── news.json
│   │   ├── team.json
│   │   └── offices.json
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useSEO.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals/
│   │       ├── reset.css
│   │       ├── base.css        # CSS custom properties / design tokens
│   │       └── utilities.css
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── .env.example
└── package.json
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your actual values
```

### 3. Start development server
```bash
npm run dev
# Opens at http://localhost:3000/ng/en
```

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## Design Tokens

All brand colours, fonts, and spacing are defined as CSS custom properties in `src/styles/globals/base.css` and extended in `tailwind.config.js`.

| Token | Value |
|---|---|
| `--color-brand-blue` | `#0072CE` |
| `--color-brand-navy` | `#002A5C` |
| `--font-display` | Playfair Display (serif) |
| `--font-body` | Source Sans 3 (sans-serif) |
| `--header-height` | `80px` |
| `--section-padding-y` | `80px` |

---

## Connecting a CMS

Static JSON files in `src/data/` power all content. To connect a real CMS:

1. Install the CMS SDK (e.g. `npm install contentful`)
2. Create a `src/api/` folder with fetch functions
3. Replace JSON imports in each page with async data fetching
4. Add React Query or SWR for caching

---

## Customising

- **Colours**: update `tailwind.config.js` and `src/styles/globals/base.css`
- **Navigation**: edit `src/data/navigation.json`
- **Content**: edit the JSON files in `src/data/`
- **Hero slides**: edit the `slides` array in `src/components/ui/HeroSlider.jsx`
- **Contact form endpoint**: set `VITE_CONTACT_FORM_ENDPOINT` in `.env`

---

## Deployment

The built output is a static SPA. Deploy to:
- **Netlify**: `npm run build` → publish `dist/`, add redirect rule `/* /index.html 200`
- **Vercel**: zero-config, auto-detects Vite
- **AWS S3 + CloudFront**: upload `dist/`, configure error document to `index.html`

---

## License

Internal use only — Forvis Mazars Nigeria.
