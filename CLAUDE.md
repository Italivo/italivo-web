# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 application using React 19 that integrates with a headless Strapi CMS. Frontend built with TypeScript, TailwindCSS v4, and openapi-fetch for type-safe API calls.

## Development Commands

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate Strapi TypeScript types (requires Strapi running at localhost:1337)
npm run strapi:types
```

## Environment Variables

Required env vars (see `.env.example`):
- `STRAPI_URL` - Strapi backend URL
- `STRAPI_MEDIA_URL` - Strapi media CDN URL
- `PREVIEW_SECRET` - Secret token for draft preview mode

Environment validation uses `@t3-oss/env-nextjs` with Zod schemas in `env.ts`.

## Architecture

### Strapi Integration

**Type Generation**: Run `npm run strapi:types` to generate TypeScript types from Strapi's OpenAPI spec at `lib/strapi/types.ts`.

**API Client** (`lib/strapi/client.ts`):
- Uses `openapi-fetch` for type-safe requests
- Custom `qs` query serializer for Strapi's array format
- Draft mode middleware: automatically adds `?status=draft` to requests when Next.js draft mode enabled

**Data Fetching** (`lib/strapi/queries.ts`):
- Server-only queries (uses `server-only` package)
- Populate parameters must specify deeply nested relations
- Complex populate params have TypeScript ignore comments due to OpenAPI/Strapi type mismatches

**Preview Mode** (`app/api/preview/route.ts`):
- GET endpoint at `/api/preview?secret=XXX&url=/path&status=published|draft`
- Enables/disables Next.js draft mode based on status param
- Middleware in client automatically adds `?status=draft` query param for draft requests

### Dynamic Block System

**Block Renderer** (`components/blocks/blocks-renderer.tsx`):
- Maps Strapi `__component` strings to React components via `componentsMap`
- Each block must be registered in `componentsMap` object
- Validates blocks have `id` and `__component` properties
- Falls back gracefully for unknown block types (dev warning only)

**Adding New Blocks**:
1. Create component in `components/blocks/`
2. Register in `componentsMap` with Strapi component name (e.g., `"blocks.hero"`)
3. Update populate params in `lib/strapi/queries.ts` for nested data
4. Optionally add TypeScript types in `lib/strapi/block-types.ts`

### Component Structure

```
components/
  blocks/        - Page sections fetched from Strapi
  layout/        - Navbar, Footer
  shared/        - Reusable components (cta, link, icon-card)
  ui/            - Base UI components (button, card) - shadcn/ui style
```

### Styling

- TailwindCSS v4 with Tailwind Animate plugin
- Utility classes use `tailwind-merge` via `lib/utils.ts` `cn()` helper
- Component variants managed with `class-variance-authority` (see `lib/variants.ts`)

### Path Aliases

Uses `@/*` alias mapping to project root (configured in `tsconfig.json`).

## Key Files

- `lib/strapi/client.ts` - API client with draft mode middleware
- `lib/strapi/queries.ts` - Strapi data fetching functions
- `lib/strapi/utils.ts` - `getStrapiMedia()` helper for absolute URLs
- `components/blocks/blocks-renderer.tsx` - Dynamic block component mapper
- `env.ts` - Environment variable validation
- `next.config.ts` - Image config for Strapi media, CSP headers for preview

## Notes

- All Strapi queries use deeply nested populate params - shallow population doesn't work
- Draft mode persists in cookies until explicitly disabled
- Media URLs are transformed via `getStrapiMedia()` to handle relative/absolute/data URLs
- TypeScript strict mode enabled
