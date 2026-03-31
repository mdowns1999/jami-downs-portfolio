# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 portfolio site for showcasing creative work across three categories: writing, photography, and marketing. Built with Vite and deployed to GitHub Pages. Styled with Material UI (MUI) v5.

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (default: http://localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build locally

# Code Quality
npm run lint            # Run ESLint on all files

# Deployment
npm run deploy          # Build and deploy to GitHub Pages
```

## Architecture

### Routing Structure

The app uses React Router v7 with nested routes defined in `src/App.jsx`:

- `/` - Home page
- `/about` - About page
- `/projects` - Projects landing page
  - `/projects/:name` - Category list (writing, photography, marketing)
  - `/projects/:name/:id` - Individual project detail page

**Important**: The router uses `basename: "/jami-downs-portfolio"` for GitHub Pages deployment. This basename is also set in `vite.config.js`.

### Data-Driven Content

All project content lives in JSON files at `src/assets/project-files/`:
- `writing.json` - Writing samples with content arrays
- `photo.json` - Photography projects with image arrays
- `projects.json` - Combined data for all project types

When adding new projects, edit the appropriate JSON file. The components automatically render from this data. **Never hardcode project data in component files.**

### Component Organization

```
src/components/
├── Layout/          # Root layout, Header, Footer, Navigation (Desktop/Mobile)
├── Projects/        # Category-specific detail pages and list views
│   ├── ProjectDetailPage.jsx    # Router for detail pages by category
│   ├── WritingDetail.jsx        # Renders writing content
│   ├── PhotoDetail.jsx          # Renders photo galleries
│   └── MarketingDetail.jsx      # Renders videos/PDFs
├── Home/            # Home page hero
├── About/           # About page
└── UserFeedback/    # Error pages
```

Note: `src/components/UI/` no longer contains custom primitives — Button, Card, and RadioButton have been replaced by MUI components used directly.

**Key Pattern**: `ProjectDetailPage.jsx` acts as a dispatcher that routes to the correct detail component (Writing, Photo, or Marketing) based on the URL parameter.

### Styling

Uses **Material UI (MUI) v5** with the `sx` prop for all component-level styles. There are no `.module.css` files.

- **Theme file**: `src/theme.js` — all colors, fonts, and global component overrides are defined here. To change a color site-wide, edit `theme.js` only.
- **Adding styles**: Use the `sx` prop on MUI components. Do NOT create `.module.css` files.
- **Theme is applied via**: `<ThemeProvider>` + `<CssBaseline>` wrapping the app in `src/main.jsx`.

### MUI Theme Quick Reference

| Token | Hex | Usage |
|---|---|---|
| `primary.main` | `#395144` | AppBar, Footer, primary buttons |
| `primary.light` | `#5a7e5d` | Hover states |
| `secondary.main` | `#aa8b56` | Card accents, Chips, dividers |
| `background.default` | `#f0ebce` | Page background (cream) |
| `background.paper` | `#faf7ef` | Cards, Drawer |
| Active nav link | `#f7d497` | Applied inline via NavLink `isActive` callback |

Fonts: **Playfair Display** (headings, serif) + **Lato** (body, sans-serif) — loaded from Google Fonts via `index.html`.

### Third-Party Libraries

- **@mui/material**: UI component library. Theme in `src/theme.js`.
- **@mui/icons-material**: Icon set used in Footer (LinkedIn/Instagram), NavMobile (menu icon), ProjectCard (category icons).
- **@emotion/react** + **@emotion/styled**: Required MUI styling engine (peer dependencies).
- **framer-motion**: Used for nav item spring animations and home page hero fade-in.

## GitHub Pages Configuration

The site deploys to `https://mdowns1999.github.io/jami-downs-portfolio/`. Both the router basename and Vite base path are configured for this subdirectory structure. Do not change these values unless the repository name changes.

## Working with Images

Images are stored in `src/assets/images/` with a mapping file at `src/assets/imageMappings.js`. When adding new images:
1. Place image files in the images directory
2. Reference them in the appropriate JSON file by filename
3. Add the import and mapping entry to `imageMappings.js`

## React 19 Specifics

This project uses React 19.2. Be aware of React 19 changes:
- New JSX transform (no need to import React in component files)
- Updated hooks behavior
- PropTypes still used for runtime validation
