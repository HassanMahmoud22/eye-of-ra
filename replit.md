# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Forms**: react-hook-form + @hookform/resolvers

## Project: Eye of Ra

Premium corporate website for **Eye of Ra** — an Egyptian Textile Sourcing & Brand Consulting Agency founded in 2021. B2B business that acts as a strategic bridge between brands and trusted Egyptian factories.

### Brand Identity
- Primary dark: #1a1a1a (near black)
- Primary gold: #d7c27e (warm gold accents)
- Display font: Cinzel (classical serif, Egyptian luxury feel)
- Body font: Inter (clean sans-serif)
- 21 unique images integrated across all pages (both original and new batches)

### Pages
- **Home** (`/`) - Premium storytelling with hero, stats, services, advantages, export programs, founder preview, process
- **About** (`/about`) - Company story, mission, vision, values
- **Services** (`/services`) - Overview of consulting and sourcing pillars
- **Consulting** (`/services/consulting`) - Detailed consulting services (tech design, production monitoring, QA)
- **Sourcing** (`/services/sourcing`) - Material sourcing, factory matching, trims
- **Egypt Advantage** (`/egypt-advantage`) - Why source from Egypt (vertical integration, duty-free, location, sustainability)
- **Founder** (`/founder`) - Eissa Mohamed's career timeline and story
- **Contact** (`/contact`) - Contact form with lead capture
- **Start a Project** (`/start-project`) - Detailed project inquiry form

### API Endpoints
- `GET /api/healthz` - Health check
- `POST /api/leads` - Lead capture (contact & project forms)
- `GET /api/content/stats` - Company statistics

### Database Schema
- `leads` table - Stores all form submissions with type, company, contact info, message, status

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── eye-of-ra/          # React + Vite frontend (Eye of Ra website)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly`

## Packages

### `artifacts/eye-of-ra` (`@workspace/eye-of-ra`)

React + Vite frontend for Eye of Ra corporate website. Premium dark theme with gold accents, Framer Motion animations, and multi-page B2B lead generation site.

- Uses wouter for client-side routing
- Framer Motion for premium scroll animations
- react-hook-form for contact/project inquiry forms
- @workspace/api-client-react for API integration

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server with routes for health, leads, and content.

- Entry: `src/index.ts`
- Routes: health (`/api/healthz`), leads (`/api/leads`), content (`/api/content/stats`)
- Depends on: `@workspace/db`, `@workspace/api-zod`

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

- Schema: `src/schema/leads.ts` - leads table for form submissions
- `drizzle.config.ts` — Drizzle Kit config
- Push schema: `pnpm --filter @workspace/db run push`

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec and Orval codegen config.

- Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas: HealthCheckResponse, CreateLeadBody, GetStatsResponse

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from OpenAPI spec.
