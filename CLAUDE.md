# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Author website for Veronica Larsen Books — a React SPA showcasing romance novels with links to retail platforms (Kindle, Kobo, Nook, iBooks, Google Play).

## Commands

All commands run from the `front-end/` directory:

```bash
cd front-end
npm install        # install dependencies
npm run dev        # start Vite dev server with HMR
npm run build      # production build
npm run lint       # ESLint
npm run preview    # preview production build
```

## Architecture

- **React 19 + Vite** — JavaScript (JSX, no TypeScript), ES modules
- **Routing**: react-router-dom v7 with BrowserRouter. Routes defined in `src/App.jsx`: `/`, `/books`, `/about`, `/contact`
- **Styling**: Bootstrap 5 (imported in `main.jsx`) + custom CSS (`App.css`, `index.css`, `HomePage.css`)
- **Contact form**: uses emailjs-com for client-side email sending
- **Static assets**: `public/assets/` — book covers, retailer logos, social media icons (mostly `.avif` format)

## Source Structure

- `src/App.jsx` — Router and route definitions
- `src/pages/` — Page components (HomePage, Books, About, Contact)
- `src/components/` — Shared components (NavBar, BookSection, ReviewSection)
- `src/components/retailerButtons/` — Individual retailer link buttons (Kindle, Kobo, etc.)
- `src/components/socialMediaButtons/` — Social media link buttons

## Git Workflow

- `main` branch for production, `develop` for active work
- PRs go from `develop` → `main`
