# Tomás Toloza — Software Engineer Portfolio

Personal profile website built with **Next.js 19**, **React 19**, **Tailwind CSS v3**, and **shadcn/ui** components. Showcases experience, education, and professional profile for Tomás Toloza, Software Engineer at MuleSoft and Computer Science student at Universidad Nacional de Hurlingham.

## 📝 Overview

This is a personal portfolio/landing page that displays:

- **Profile/header** with name, badges (available for collaboration, Buenos Aires, AR), and main tagline
- **Experience section** with cards for each work experience, expandable to show details
- **Education section** with university degrees
- **About me** section with background information
- **Resume download** functionality (generates PDF via pdfmake)
- **Structured data** (Schema.org JSON-LD) for search engine optimization

## 🛠 Tech Stack

| Technology                | Version | Purpose                         |
|---------------------------|---------|---------------------------------|
| **Next.js**               | 19      | React framework with App Router |
| **React**                 | 19      | UI library                      |
| **Tailwind CSS**          | v3      | Utility-first styling           |
| **shadcn/ui**             | Latest  | UI component library            |
| **pdfmake**               | Latest  | PDF resume generator            |
| **lucide-react**          | Latest  | Icon set                        |
| **clsx / tailwind-merge** | Latest  | Class name composition          |

### Design System

- **Background**: OLED Black `#000000`
- **Primary Accent**: Electric Naranja `#ff5500`
- **Borders**: `#262626`
- **Text**: `white` for headings, `neutral-400`/`neutral-500` for secondary
- **Border Radius**: `0px` (flat brutalism)
- **Box Shadows**: `none !important`
- **Typography**: Headings bold uppercase with wide tracking; metadata in Monospace

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # shadcn/ui components (button, card, dialog, avatar, badge, etc.)
│   ├── Card/         # Experience item cards
│   └── index.ts      # Component re-exports
├── Views/            # Page sections (AboutMe, Experience, Education, Projects, ContactInfo, Profile)
├── models/           # TypeScript interfaces (ExperienceItem)
├── resources/        # JSON data (experience.json, education.json)
├── lib/              # Utilities (cn helper)
├── styles/           # Global CSS
└── pages/            # Legacy pages (index, _app, _document)
```

## 📦 Key Components

### `ProfileLanding`

Main profile header with:
- Avatar with GitHub profile image
- Name heading with badges (AVAILABLE FOR COLLABORATION, BUENOS AIRES, AR)
- Tagline: "Software Engineer @ MuleSoft • CS Student @ UNAHUR"

### `ItemCard`

Experience card component that:
- Displays title, company, date range
- Shows first 4 skills as outline badges
- Has expandable footer with Dialog showing full description and all skills
- Uses shadcn/ui Card, Badge, and Dialog

### `Resume`

Button that generates a PDF resume using pdfmake from the experience and education JSON data.

### `ScrolledCardsSection`

Horizontal scroll section for displaying cards (experience or education).

### `AboutMe`

Card-based section with biography and background information.

## 📊 Data Sources

### `src/resources/experience.json`

Array of `ExperienceItem` objects with:
- `title`: Job title at company
- `place`: Company name
- `from` / `to`: Employment dates
- `info.descriptionItems`: Array of responsibility/achievement descriptions
- `info.skills`: Array of technical skills

### `src/resources/education.json`

Array of education entries with:
- `title`: Degree name
- `place`: University name
- `from` / `to`: Study dates
- `link`: University course link (optional)

### Type Definitions

`src/models/ExperienceItem.ts` — defines the `ExperienceItem` interface.

## 🚀 Running the Project

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Or using the monorepo launcher
npm run dev
```

The site will be available at `http://localhost:5173` (or port 5174/5175 if conflict).

## 🌐 Deployment

This project is configured for **Vercel** deployment. The `.vercel` directory contains deployment configuration.

## 🎨 Design Compliance

Follows the **Idem Design System**:

- ✅ Background: `#000000` (OLED Black)
- ✅ Primary accent: `#ff5500` (Electric Naranja)
- ✅ Borders: `#262626`
- ✅ Cards: `#000000`/`#0a0a0a` with `#262626` border
- ✅ Border radius: `0px`
- ✅ No box shadows
- ✅ Custom scrollbars (5px, `#000000` track, `#333333` thumb)
- ✅ Headings: bold uppercase, wide letter tracking
- ✅ Metadata: Monospace, text-xs, neutral-400/neutral-500

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Run all apps (dashboard, gym-tracker, fin-tracker) |
| `npm run dev:dashboard` | Run Dashboard only |
| `npm run dev:gym` | Run Gym Tracker Frontend |
| `npm run dev:fin` | Run Fin Tracker Frontend |
| `npm run build` | Build for production |

## 📄 License

Personal portfolio — © Tomás Toloza 2025