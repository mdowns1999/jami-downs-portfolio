You are helping redesign a React 19 portfolio site for a creative professional. 
The goal is a clean, polished, professional look that feels warm and personal — 
not cold or corporate. The site showcases school/college projects across writing, 
photography, and marketing categories.

## Your Mission

Perform a full migration to Material UI (MUI). Install all necessary MUI packages, 
replace existing custom components with MUI equivalents, and redesign the UI to 
feel premium, minimal, and warm. Preserve all existing functionality exactly — 
nothing should break.

## Design Direction

- **Feel**: Minimal and clean with warm, personal accents. Think editorial portfolio, 
  not tech startup.
- **Color scheme**: The existing color scheme must be preserved. You may introduce 
  tasteful accent colors that complement it — subtle warm tones, soft shadows, 
  refined hover states.
- **Typography**: Use MUI's typography system. Choose a pairing that feels elevated 
  and readable — a serif or semi-serif display font for headings, clean sans-serif 
  for body text. Google Fonts is fine via MUI's theme.
- **Spacing & layout**: Generous whitespace. Let content breathe. No clutter.
- **Elevation & depth**: Use MUI's elevation/shadow system tastefully — cards 
  should feel tactile but not heavy.

## Priority Order (follow this if trade-offs arise)

1. Visual polish — the site should look impressive and professional
2. Ease of future maintenance — the owner adds projects infrequently; the system 
   must stay simple and data-driven
3. Speed of implementation — prefer clean solutions over fast hacks
4. Staying close to the original design — least important; a fresh look is welcome

## Current Architecture (do not break these)

- React 19 + Vite, deployed to GitHub Pages at basename `/jami-downs-portfolio`
- React Router v7 with nested routes: `/`, `/about`, `/projects`, 
  `/projects/:name`, `/projects/:name/:id`
- **Data-driven**: All project content lives in JSON files at 
  `src/assets/project-files/`. This pattern must be preserved — adding a new 
  project should only require editing a JSON file, never touching component code.
- CSS Modules are currently used — migrate styles into MUI's `sx` prop or 
  `theme` overrides. Remove `.module.css` files as you go.
- Framer Motion is installed for page transitions — keep it, integrate with MUI 
  components.
- Image mapping lives in `src/assets/imageMappings.js` — preserve this pattern.

## Component Migration Plan

Work through these in order:

### 1. Setup & Theme (do this first)
- Install: `@mui/material @emotion/react @emotion/styled @mui/icons-material`
- Create `src/theme.js` — define the MUI theme with:
  - The existing color palette as primary/secondary colors (inspect current CSS 
    variables or root styles to find them)
  - A warm, editorial font pairing
  - Custom component overrides for Card, Button, AppBar as needed
- Wrap the app in `<ThemeProvider>` in `main.jsx`

### 2. Layout & Navigation
- Replace the custom Header/Navigation with MUI `AppBar` + `Toolbar`
- Desktop nav: MUI `Button` components for links
- Mobile nav: MUI `Drawer` for the hamburger menu (you can remove 
  `hamburger-react` if MUI's `IconButton` + `MenuIcon` handles it cleanly)
- Replace Footer with MUI `Box`/`Typography` equivalents

### 3. Project Tiles (Category & Item Cards)
- The project flow is: topic tiles → sub-tiles → detail view
- Replace topic tiles with MUI `Card` + `CardActionArea` + `CardContent`
- Sub-tiles (individual projects) also use MUI `Card`
- Cards should have: consistent aspect ratios, subtle hover elevation change, 
  clean typography hierarchy (title, subtitle/category label)
- Use MUI `Grid2` for tile layouts (responsive: 1 col mobile, 2-3 col desktop)

### 4. Detail Pages
- **Story/Writing detail**: MUI `Container` + `Typography` with good reading width 
  (max ~680px) and line height
- **PDF detail**: Opens in new tab — just ensure the trigger button is a clean 
  MUI `Button` with an icon
- **Video detail**: YouTube embed — wrap in a responsive MUI `Box` with 16:9 
  aspect ratio maintained
- **Photo detail**: MUI `ImageList` or a simple responsive grid

### 5. Home & About Pages
- Home: Clean hero section using MUI `Box` + `Typography`. Keep it simple — 
  name, tagline, a subtle CTA button.
- About: MUI `Container` with clean text layout. If there's a photo, use MUI 
  `Avatar` or a styled `Box`.

### 6. Shared UI Components
- Replace any custom `Button` → MUI `Button`
- Replace any custom `Card` → MUI `Card`
- Replace `RadioButton` if used for filtering → MUI `ToggleButtonGroup`

## Maintainability Rules

These are non-negotiable — the owner needs to be able to add projects years from now:

1. **JSON is the only place content lives.** No project data hardcoded in components.
2. **Component code should not need editing to add new projects.** Adding a project 
   = add an entry to the JSON file only.
3. **Keep the existing JSON structure** unless you have a strong reason to change 
   it — and if you do change it, update all JSON files and document the new schema 
   clearly in CLAUDE.md.
4. **Update CLAUDE.md** at the end with any new setup steps, changed patterns, 
   or removed dependencies.

## What to Preserve Exactly

- All routes and URL structure
- GitHub Pages basename configuration in router and `vite.config.js`
- All project content and JSON data files
- Framer Motion page transition behavior
- The image mapping pattern in `imageMappings.js`

## Execution Approach

- Migrate one section at a time (theme → layout → tiles → detail pages → home/about)
- After each section, confirm the dev server runs without errors before moving on
- Remove old `.module.css` files only after the MUI replacement is confirmed working
- Do not leave commented-out dead code behind

Start by reading the current codebase — check `src/App.jsx` for routing, 
`src/components/` structure, existing CSS variables for the color scheme, and 
the JSON files to understand the data shape. Then begin with Step 1: Setup & Theme.

## Visual Reference Notes (from current site screenshots)

I have reviewed the current site. Here is what to preserve and what to improve:

### Exact Color Palette to Preserve
Extract the precise hex values from the existing CSS, but the approximate palette is:
- **Background**: warm cream/linen (~#e8e4c9) — keep as page background
- **Header & Footer**: dark forest green (~#3a5240) — keep exactly
- **Card fill**: muted tan/golden brown (~#a8895a) — keep as primary card color
- **Active nav link accent**: warm gold/tan — keep for the active state highlight

Feed these into the MUI theme as:
  - `palette.primary.main` = the forest green
  - `palette.secondary.main` = the tan/golden brown
  - `palette.background.default` = the cream
  - `palette.background.paper` = a slightly warmer white for card surfaces

### Logo — Do Not Touch
The top-left botanical wreath logo is a custom illustration and a core brand 
element. Preserve it exactly as-is in the AppBar. Do not resize, replace, 
or restyle it.

### Cards Need Visual Depth (biggest improvement opportunity)
Currently all cards are flat solid-color blocks with only a centered text label.
With MUI, elevate these significantly:
- Give cards a subtle background — either keep the tan or use a cream paper 
  surface with a tan left-border accent or top-color band
- Add a visible title with proper typographic hierarchy
- Add a subtle category label or type badge (e.g. "PDF", "Video", "Email") 
  using a MUI Chip component — this helps the viewer know what they're clicking into
- Hover state: raise elevation (shadow) + slight upward translate. This alone 
  will make the grid feel much more polished.
- The category tiles on the Projects page (Marketing, Photography, Writing) 
  should feel more substantial — consider taller cards with an icon or subtle 
  decorative element representing each category

### Home Page Hero
Currently very bare — large empty space above and below a centered text block.
Improve this without changing the content:
- Tighten the vertical spacing so the hero feels intentional, not empty
- Consider a thin decorative botanical divider line (SVG or CSS) below the 
  name, consistent with the wreath brand aesthetic
- The "See Projects" button should use MUI Button with the forest green color 
  and a gentle hover effect

### About Page — Fix the Inconsistent Section
The About page has two sections with mismatched backgrounds: the top is cream 
(matching the site), but the bottom "My Skills" section has a muted blue-gray 
background that looks like a mistake and clashes with the palette entirely.
- Unify the About page to use only the site's color palette
- The skills section should use the forest green background (like the footer) 
  OR stay cream with a subtle card/box to separate the content — either works, 
  but the blue-gray must go

### Typography Suggestion
Given the botanical/warm aesthetic, consider:
- Headings: "Playfair Display" (serif, elegant, warm)
- Body: "Lato" or "Inter" (clean, readable)
Both are available via Google Fonts and easy to configure in the MUI theme.