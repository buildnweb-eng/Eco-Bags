# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EcoBagsFactory is a Next.js 16 marketing website for an eco-friendly paper bags manufacturer based in Hyderabad, India. The site showcases products, handles custom order inquiries via email, and is optimized for SEO.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (React 19)
- **Styling**: Tailwind CSS v4 with tailwindcss-animate
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: react-hook-form with zod validation
- **Email**: nodemailer (Gmail SMTP)

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (send-order, send-contact)
│   ├── about/
│   ├── contact/
│   ├── custom-orders/
│   ├── gallery/
│   ├── products/
│   ├── layout.tsx         # Root layout with Organization schema
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── HeroSection.tsx
├── hooks/                 # Custom React hooks
└── lib/
    └── utils.ts           # cn() utility for Tailwind class merging
```

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### API Routes
- `POST /api/send-order` - Handles custom order form submissions, sends email via Gmail SMTP
- `POST /api/send-contact` - Handles contact form submissions

### Environment Variables
Required for email functionality:
```
EMAIL_USER=<gmail_address>
EMAIL_APP_PASSWORD=<gmail_app_password>
EMAIL_RECIPIENT=<recipient_email>
```

### SEO Implementation
- Each page exports its own `metadata` object with OpenGraph and Twitter cards
- Root layout includes Organization schema (JSON-LD)
- Dynamic sitemap at `/sitemap.xml`
- robots.ts protects API routes from crawling
- All images use descriptive alt tags with keywords

### UI Patterns
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Toast notifications via both `@/components/ui/toaster` and `sonner`
- Forms use `react-hook-form` with `zodResolver` for validation
