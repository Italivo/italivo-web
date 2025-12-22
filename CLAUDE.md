# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Italivo-web is an Italian language learning school website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site features a single-page marketing layout with sections for courses, packages, testimonials, and contact.

## Development Commands

```bash
# Start development server (default: http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Styling System

The project uses a dual-styling approach:

1. **Legacy CSS**: Currently active styling via `app/italivo-legacy.css` with custom classes (.navbar, .hero, .package-card, etc.). Applied through `italivo-legacy` class on `<html>` element. These styles will be migrated to Tailwind CSS.

2. **Tailwind CSS v5**: Configured but not actively used. When migrating, replace legacy CSS with Tailwind utilities. Import via `app/globals.css` which includes custom theme tokens and CSS variables for design system.

### Layout Structure

- **Root Layout** (`app/layout.tsx`): Contains static navigation and footer. Uses Google Fonts (Playfair Display for headings, Inter for body). Loads legacy JavaScript via Next.js Script component.

- **Page** (`app/page.tsx`): Single-page marketing site with sections: mobile menu, hero, about, method, paths (8 course types), features, packages (Light/Premium/VIP), testimonials, CTA.

### Path Aliases

TypeScript paths configured with `@/*` mapping to repository root. Import like:

```typescript
import { cn } from "@/lib/utils";
```

### Utilities

`lib/utils.ts`: Contains `cn()` helper for merging Tailwind classes using clsx and tailwind-merge.

## Key Dependencies

- Next.js 16 with App Router
- React 19
- TypeScript 5
- Tailwind CSS 4 with tw-animate-css
- class-variance-authority, clsx, tailwind-merge for component variants
- lucide-react for icons (not yet implemented in current markup)

## Development Notes

- Legacy JavaScript in `public/legacy-italivo.js` handles mobile menu interactions
- ESLint configured with Next.js core-web-vitals and TypeScript presets
- PostCSS Tailwind plugin currently commented out
- No testing framework currently configured
- No environment variables or API integrations yet

## Detailed guidelines

For detailed guidelines, see:

- [Styling & Tailwind](docs/styling.md)
