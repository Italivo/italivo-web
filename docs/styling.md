# Styling

## Legacy CSS

Styles applied via `app/italivo-legacy.css` are LEGACY. These styles MUST be migrated to Tailwind CSS v5.

## Tailwind CSS v5

Tailwind CSS v5 is configured but not yet actively used. When migrating from legacy CSS, use Tailwind utility classes to implement styles. The Tailwind configuration includes custom theme tokens and CSS variables defined in `app/globals.css`.

## Typography

The project uses Google Fonts for typography. Typography styles should be composed using first the typography variants defined in `lib/variants.ts` and then the Tailwind's font utilities if needed.

## Color System

The color system is defined using CSS variables in `app/globals.css`. Use these variables to ensure consistency across the application—for example, `var(--color-primary)` for primary color elements.

Prefer theme-aware Tailwind utilities (like `bg-primary`, `text-muted-foreground`) over specific color values (like `bg-blue-500`). This avoids having to define separate colors for light and dark themes.

## Responsive CSS

Tha application uses a mobile-first responsive design approach. Use Tailwind's responsive utilities (e.g., `sm:`, `md:`, `lg:`, `xl:`) to apply styles at different breakpoints. The application should support only mobile and desktop views (initial breakpoint at tailwind's `md` size). Designs should adapt fluidly between these sizes. Do not work with additional breakpoints unless absolutely necessary.
