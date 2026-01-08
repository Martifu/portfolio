# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Martin Esparza, a web and mobile developer. The project is built with Next.js 16.1.1 and configured for **static export** (`output: "export"` in next.config.ts), meaning it generates static HTML files suitable for deployment on static hosting platforms.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Export static files (requires build first)
npm run export

# Build and export in one command
npm run build:static

# Start production server (for testing build, not used for static export)
npm start

# Run ESLint
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **React**: 19.2.3
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with CSS-first configuration (@tailwindcss/postcss)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Mix of Google Fonts (Outfit, Playfair Display, Dancing Script, Cormorant Garamond, Caveat) and local font (Garamond Nova Condensed)

## Architecture

### File Structure

```
/app                  - Next.js App Router pages
  /layout.tsx         - Root layout with font configuration
  /page.tsx           - Home page (main entry point)
  /globals.css        - Global styles with Tailwind v4 theme configuration
/components           - React components
  /Hero.tsx          - Main hero section with animated cards and clouds
  /AboutMe.tsx       - About section with video and image gallery
  /Testimonials.tsx  - Testimonials section
  /Navbar.tsx        - Fixed bottom navigation bar
  /TopBar.tsx        - Top bar with time and availability status
  /BlackButton.tsx   - Reusable styled button component
/lib
  /utils.ts          - Utility functions (cn for className merging)
/public
  /assets            - Static images, videos, fonts
```

### Component Architecture

All UI components are **client components** (`"use client"`) because they use:
- Framer Motion for animations
- React hooks (useState, useEffect)
- Interactive elements

The main page (`app/page.tsx`) assembles components in this order:
1. TopBar - Sticky header with location/time
2. Hero - Main landing section
3. Testimonials - Social proof
4. AboutMe - Personal story
5. Navbar - Fixed bottom navigation

### Styling Approach

- **Tailwind CSS v4** with CSS-first configuration (uses `@import "tailwindcss"` in globals.css)
- **No tailwind.config.ts** - Configuration is in `@theme` directive in globals.css
- Custom font families defined as CSS variables and referenced in Tailwind classes
- Path alias `@/*` maps to root directory
- Responsive design with mobile-first approach using sm/md/lg/xl breakpoints
- Heavy use of inline Tailwind classes for component-scoped styling
- Complex visual effects using backdrop-blur, gradients, shadows, and transforms

### Font System

Multiple font families are loaded and configured in `app/layout.tsx`:
- `--font-outfit` (sans): Default body font
- `--font-cormorant` (serif): Headings (also loaded as local Garamond variant)
- `--font-dancing` (script): Decorative script
- `--font-caveat`: Handwritten style for section labels
- `--font-playfair`: Serif display font
- `--font-garamond`: Local Garamond Nova Condensed font

Headings default to Garamond (serif) via global CSS rule.

### Static Export Configuration

- Images are **unoptimized** (`unoptimized: true`) because static export doesn't support Next.js Image Optimization
- Videos use native `<video>` tags with autoPlay, loop, muted, playsInline
- All dynamic features must be client-side only (no server-side data fetching at build time)

### Animation Patterns

Framer Motion is used extensively for:
- Page entrance animations (fade-in, slide-up)
- Scroll-based animations (`whileInView` with `viewport: { once: true }`)
- Continuous loops (cloud animations)
- Hover effects (`whileHover`)
- Complex card fan-out animations in Hero

### Utilities

The `cn()` utility in `lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional className composition, commonly used for component variants.

## Important Notes

- **All content is in Spanish** - This is a Spanish-language portfolio
- **Static site** - No server-side rendering, no API routes, no database
- **Image optimization is disabled** - Use Next.js Image component but with `unoptimized: true` set globally
- **Timezone**: Mexico City (GMT-6) - TopBar displays current Mexico time
- **Mobile-first design** - Heavy use of responsive scaling and conditional layouts
