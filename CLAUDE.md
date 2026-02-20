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

**Type Generation**: Run `npm run strapi:types` to generate TypeScript types from Strapi's OpenAPI spec at `lib/strapi/types.generated.ts`.

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

- `proxy.ts` - Next.js edge middleware (JWT cookie check, route protection)
- `lib/strapi/client.ts` - Public API client with draft mode middleware
- `lib/strapi/auth-client.ts` - Authenticated API client (auto-injects JWT header)
- `lib/strapi/require-auth.ts` - Server helper: fetch user, redirect to `/signin` on failure
- `data/queries.ts` - Strapi data fetching functions (server-only)
- `lib/strapi/utils.ts` - `getStrapiMedia()` helper for absolute URLs
- `components/blocks/blocks-renderer.tsx` - Dynamic block component mapper
- `env.ts` - Environment variable validation
- `next.config.ts` - Image config for Strapi media, CSP headers for preview

## Notes

- All Strapi queries use deeply nested populate params - shallow population doesn't work
- Draft mode persists in cookies until explicitly disabled
- Media URLs are transformed via `getStrapiMedia()` to handle relative/absolute/data URLs
- TypeScript strict mode enabled

## Authentication

### Architecture (4-layer separation)

```
proxy.ts (middleware)  → cookie exists? fast edge check, no Strapi call
authClient             → attach JWT header only, no redirect logic
getUserMe() (query)    → fetch + normalize, returns { data, error }
page/layout            → check error → redirect (one place per route group)
```

### JWT Cookie

- Name: `jwt`, stored as HTTP-only cookie (`maxAge: 7 days`, `sameSite: "lax"`, `secure` in prod)
- Set by `registerUser` server action after successful Strapi registration/login
- Cleared by `logout` server action

### Two API Clients

- `lib/strapi/client.ts` — public endpoints (pages, blocks, registration). Has draft mode middleware.
- `lib/strapi/auth-client.ts` — authenticated endpoints. Middleware reads `jwt` cookie and injects `Authorization: Bearer {token}` on every request. **No redirect logic here.**

### Middleware (`proxy.ts`)

- Runs at edge, protects `/profile` and `/profile/*`
- Only checks cookie existence (`request.cookies.get("jwt")`) — no Strapi call
- Missing cookie → redirect to `/signin`; present → `NextResponse.next()`
- Real token validation happens at the page level

### Protected Pages Pattern

```ts
// In any protected server component:
const user = await requireAuth(); // redirects to /signin on error
```

`requireAuth()` (`lib/strapi/require-auth.ts`) calls `getUserMe()`, which uses `authClient.GET("/users/me")`. On error or missing data it calls `redirect(routes.signin)`.

### Server Actions

- `features/auth/actions/register-user.ts` — accepts `FormData`, validates with Zod, POSTs to Strapi `/auth/local/register`, sets cookie, redirects home
- `features/auth/actions/logout.tsx` — deletes `jwt` cookie

### Feature Folder Structure

```text
features/auth/
  actions/
    register-user.ts   - signup server action
    logout.tsx         - logout server action
  queries/
    get-user-me.ts     - fetch current user via authClient
  components/
    signup-form.tsx    - client form (useActionState + react-hook-form)
  hooks/
    use-signup-form.ts - RHF + Zod resolver setup
  schema.ts            - Zod validation (username 3-20, email, password 6-100)
```

### Form Pattern

Client form components use both `useActionState` (for server action state) and `react-hook-form` (for client-side validation). The form manually converts field values to `FormData` before invoking the server action.
