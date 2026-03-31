# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 portfolio site for showcasing creative work across three categories: writing, photography, and marketing. Built with Vite and deployed to GitHub Pages.

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
- `marketing.json` - Marketing projects (videos, emails, PDFs)

When adding new projects, edit the appropriate JSON file. The components automatically render from this data.

### Component Organization

```
src/components/
├── Layout/          # Root layout, Header, Footer, Navigation (Desktop/Mobile)
├── Projects/        # Category-specific detail pages and list views
│   ├── ProjectDetailPage.jsx    # Router for detail pages by category
│   ├── WritingDetail.jsx        # Renders writing content
│   ├── PhotoDetail.jsx          # Renders photo galleries
│   └── MarketingDetail.jsx      # Renders videos/PDFs
├── UI/              # Reusable components (Button, Card, RadioButton)
└── UserFeedback/    # Error pages
```

**Key Pattern**: `ProjectDetailPage.jsx` acts as a dispatcher that routes to the correct detail component (Writing, Photo, or Marketing) based on the URL parameter.

### Styling

Uses CSS Modules exclusively. Each component has a corresponding `.module.css` file. Import styles as:
```javascript
import classes from './ComponentName.module.css';
```

### Third-Party Libraries

- **framer-motion**: Used for page transitions and animations. The ESLint config has special rules to allow Framer Motion props (`initial`, `animate`, `exit`, `transition`, etc.)
- **hamburger-react**: Mobile navigation hamburger menu
- **react-use**: React hooks utilities

## GitHub Pages Configuration

The site deploys to `https://mdowns1999.github.io/jami-downs-portfolio/`. Both the router basename and Vite base path are configured for this subdirectory structure. Do not change these values unless the repository name changes.

## Working with Images

Images are stored in `src/assets/images/` with a mapping file at `src/assets/imageMappings.js`. When adding new images:
1. Place image files in the images directory
2. Reference them in the appropriate JSON file by filename
3. Update `imageMappings.js` if needed

## React 19 Specifics

This project uses React 19.2. Be aware of React 19 changes:
- New JSX transform (no need to import React in component files)
- Updated hooks behavior
- PropTypes still used for runtime validation
