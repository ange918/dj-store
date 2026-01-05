# replit.md

## Overview

This is a Next.js e-commerce landing page for a modern, premium clothing store called "djangoun". The project is built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. It features a minimalist, elegant design with a focus on fashion retail, including product listings, hero sections, and brand showcases.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 16 with App Router (uses `/app` directory structure)
- **UI Library**: React 19 with TypeScript for type safety
- **Styling**: Tailwind CSS v4 with PostCSS integration
  - Custom theme variables defined in `globals.css` using `@theme` directive
  - Design system uses black/white/gray color palette for premium aesthetic
- **Fonts**: Google Fonts (Geist and Geist Mono) loaded via `next/font`

### Component Structure
- Server-side rendered pages by default (Next.js App Router)
- Components are currently defined inline in page files
- Image optimization via Next.js `Image` component with local asset imports

### Routing
- Uses Next.js App Router with file-based routing
- Single page application currently (`/app/page.tsx` as main landing page)
- TypeScript route typing enabled via Next.js plugin

### Build Configuration
- Development origins configured for Replit environments (`*.replit.dev`, `*.repl.co`)
- ESLint configured with Next.js recommended rules
- TypeScript strict mode enabled with path aliases (`@/*` maps to root)

## External Dependencies

### Core Dependencies
- **next** (16.1.1): React framework for production
- **react** (19.2.3): UI component library
- **react-dom** (19.2.3): React DOM renderer

### Development Dependencies
- **tailwindcss** (v4): Utility-first CSS framework
- **@tailwindcss/postcss**: PostCSS integration for Tailwind
- **typescript** (v5): Type checking
- **eslint** + **eslint-config-next**: Code linting

### Static Assets
- Product images stored in `/attached_assets/stock_images/`
- Generated hero images in `/attached_assets/generated_images/`

### External Services
- None currently configured
- No database integration yet
- No authentication system implemented