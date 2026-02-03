# baynunah-hr-portal-2026 – GitHub Copilot Instructions

## Project Overview
This is an internal HR command center / dashboard application (Employee Self-Service (ESS) / HR Portal Orchestrator) for managing employee data, leave requests, attendance tracking, payroll summaries, performance reviews, onboarding workflows, and admin tools.  
Goal: Provide HR staff and managers with real-time insights, approvals, and automation while ensuring data privacy and compliance (e.g. GDPR-like rules in UAE context).

Target users: HR admins, department managers, employees (self-service portal).  
Deployment: Azure Static Web Apps (SWA) for frontend hosting, Azure Functions for backend API layer.  
Architecture: AI-driven multi-agent system with 8 specialized agents managed by a Supervisor Agent.

### Workspace Layout
```
/workspace/
  HR-Portal-Final/       ← Next.js + SWA + Functions (final app)
/agents/                 ← Supervisor + 7 sub-agents
/inputs/                 ← requirements, model config, azure settings
/outputs/                ← agent reports, proposals, build logs
.github/workflows/       ← CI/CD pipelines
```

## Core Technologies & Stack
- Frontend: Next.js 14 (App Router) with TypeScript (strict mode enabled)
- Build tool: Next.js built-in (Turbopack for dev)
- Styling: Tailwind CSS v3+ (with PostCSS & autoprefixer)
- State management: Zustand (lightweight) or React Context + useReducer
- Data fetching: TanStack Query (React Query) + fetch or Axios
- UI components: shadcn/ui or Radix UI primitives + custom components in /components/ui
- Forms: React Hook Form + Zod for validation
- Icons: Lucide React
- Routing: Next.js App Router
- Backend: Azure Functions (Node.js v4)
- Database: Azure-compatible (e.g., Azure Cosmos DB, Azure SQL, or PostgreSQL)
- Authentication: Azure AD / Entra ID or NextAuth.js with Azure providers
- AI: Azure OpenAI for AI Supervisor + workflow agents
- Hosting: Azure Static Web Apps (SWA)
- Testing: Vitest + React Testing Library (unit/integration), Playwright (E2E if present)
- Linting/Formatting: ESLint + Prettier
- Other key deps: date-fns, clsx/tailwind-merge

## Build, Run & Test Commands
Always use these exact commands — do NOT invent alternatives:

- `npm install` — install dependencies
- `npm run dev` — start development server (localhost:3000)
- `npm run build` — create production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint
- `npm run format` — run Prettier
- `npm test` or `npm run test:watch` — run unit/integration tests
- `npm run test:e2e` — run end-to-end tests (if configured)

Before any commit or PR: run lint + format + all tests pass.

## Deployment Strategy
- Every pull request → Live Preview URL (SWA preview environments)
- `main` branch → Staging environment
- Manual Promote → Production

This allows immediate visual validation of every feature as soon as PRs are generated.

## AI Multi-Agent Architecture
This repo manages 8 specialized agents:

1. **Supervisor Agent** — Orchestrates everything, assigns tasks, enforces early deployment
2. **Discovery Agent** — Deep-scan all repos and build the Feature Inventory
3. **Solution Architect** — Creates 2–3 ESS proposals and final architecture
4. **Builder Agent** — Rebuilds/merges PRs into the Final App
5. **UI Excellence Agent** — Enforces visual quality
6. **UX Reviewer Agent** — Enforces experience quality
7. **Product Gap Analyst** — Identifies missing features
8. **Azure Deploy Assist + Autopilot** — Provision, configure, and deploy to Azure

## Coding Standards & Style Rules
- Always use TypeScript — no .js or // @ts-ignore unless truly unavoidable (explain why in comment)
- Prefer functional components + hooks over class components
- Use named exports for components/utils (not default unless it's the main file)
- Component files: PascalCase (UserProfile.tsx), utils/hooks: camelCase (useAuth.ts)
- Folder structure: Follow existing conventions (e.g. /components, /features, /app, /lib, /hooks, /types)
- Tailwind: Use clsx or cn helper for conditional classes; prefer utility-first, avoid inline styles
- Imports: Group them (React → third-party → internal aliases → relative)
- No console.log in production code — use proper logging if needed
- Error handling: Use try/catch + toast notifications (react-hot-toast or sonner) for UX
- Accessibility: Add aria-labels, roles, keyboard navigation where relevant (especially forms/tables)
- Security: Never commit secrets, use environment variables, sanitize inputs, follow OWASP basics
- Performance: Memoize expensive computations (useMemo/useCallback), virtualize long lists (react-window if needed)

## Git & PR Workflow
- Branch naming: feature/hr-123-login-page, bugfix/attendance-bug, refactor/remove-old-auth
- Commit messages: Conventional Commits (feat:, fix:, refactor:, chore:, docs:, test:)
- PR titles/descriptions: Clear, link to issue, include screenshots if UI change
- Keep PRs small and focused (ideally <400 lines)
- After merge: delete branch

## Testing Expectations
- Write or update tests for **new features** and **bug fixes**
- Aim for >80% coverage on business logic
- Test edge cases (empty states, loading, errors, permissions)
- Use MSW for API mocking in tests if backend involved

## Security & Compliance (Critical – UAE/Abu Dhabi context)
- Handle personal data carefully — minimize logging of PII
- Role-based access: Admins see everything, managers see department only, employees see own data
- Use HTTPS, secure cookies, no hard-coded credentials
- Audit logging for sensitive actions (leave approval, payroll view)
- Never expose raw database queries or full user objects in frontend

### Required GitHub Secrets
- `SWA_STAGING_TOKEN` — Azure SWA deployment token for staging
- `SWA_PROD_TOKEN` — Azure SWA deployment token for production

## How to Validate Changes
After implementing:
1. Run dev server → manually test the feature
2. Run lint/format/tests
3. Check responsive design (mobile + desktop)
4. Verify no console errors/warnings
5. If API involved: check network tab for correct endpoints/statuses
6. Verify PR preview deployment on Azure SWA

## Preferred Patterns & Anti-Patterns
Preferred:
- Custom hooks for logic extraction (useEmployeeData, useLeaveRequest)
- Server components for data fetching (Next.js App Router)
- Colocation: Keep component + styles + tests together when small
- Use Next.js App Router conventions (layout.tsx, page.tsx, loading.tsx, error.tsx)

Avoid:
- Prop drilling > 2 levels (use context or Zustand)
- Over-nesting folders
- Inline functions in render
- Large god-components (>300 lines)
- Client components when server components would suffice

## Additional Resources
- Main README.md — always respect setup instructions there
- Azure Static Web Apps documentation: https://docs.microsoft.com/azure/static-web-apps/
- Next.js App Router documentation: https://nextjs.org/docs/app

Follow these instructions precisely when working on any issue in this repository.
