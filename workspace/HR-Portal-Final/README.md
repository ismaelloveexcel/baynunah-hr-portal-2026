# Baynunah HR Portal - Final Application

Modern Employee Self-Service (ESS) / HR Portal built with Next.js 14 and Azure.

## Overview

This is the main application workspace for the Baynunah HR Portal, built and maintained by the AI multi-agent system.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React 18
- **Styling**: Custom CSS with modern design system
- **API**: Azure Functions (Node.js 18)
- **Hosting**: Azure Static Web Apps
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
├── api/                  # Azure Functions
│   ├── host.json         # Functions configuration
│   └── healthcheck.js    # Health check endpoint
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── staticwebapp.config.json  # Azure SWA configuration
```

## Features

### Current Implementation

- Modern, responsive UI
- Azure Static Web Apps integration
- Azure Functions API backend
- TypeScript support
- ESLint and Prettier configuration
- Health check endpoint

### Planned Features

The AI agents will progressively build out:

- Employee self-service features
- Manager approval workflows
- HR admin capabilities
- Real-time notifications
- Advanced reporting
- Mobile optimization

## API Endpoints

### Health Check

```
GET /api/healthcheck
```

Returns the health status of the API.

## Deployment

This application is deployed using Azure Static Web Apps with three environments:

- **Preview**: Automatic per-PR deployments
- **Staging**: Automatic deployment from `main` branch
- **Production**: Manual promotion

See `.github/workflows/` for CI/CD configuration.

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=http://localhost:7071
```

### Azure Static Web Apps

Configuration is in `staticwebapp.config.json`.

## Code Quality

### Linting

This project uses ESLint with Next.js configuration. Run:

```bash
npm run lint
```

### Formatting

Code is formatted with Prettier. Run:

```bash
npm run format
```

## Contributing

This application is primarily built and maintained by AI agents. However, manual contributions are welcome:

1. Create a feature branch
2. Make your changes
3. Ensure lint and build pass
4. Submit a pull request
5. Wait for agent review

## License

ISC

## Support

For issues or questions, check:
- `/outputs/reports/` for agent analysis
- GitHub Actions logs for deployment issues
- Azure portal for runtime issues
