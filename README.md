# Baynunah HR Portal 2026

AI‑Driven Orchestration Hub for automating the consolidation, rebuilding, and Azure deployment of Employee Self‑Service (ESS) / HR Portal. Includes Supervisor AI agent, multi‑agent pipeline, continuous preview deployments, and Next.js + SWA + Functions + Azure OpenAI starter app.

## 🚀 Quick Start with GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=ismaelloveexcel/baynunah-hr-portal-2026)

**👉 Click the badge above to open this project in GitHub Codespaces!**

The development environment will be automatically configured with:
- ✅ Node.js 20
- ✅ Azure CLI
- ✅ Azure Functions Core Tools
- ✅ All dependencies installed
- ✅ Ports forwarded automatically

## 🏗 Project Structure

```
baynunah-hr-portal-2026/
├── workspace/
│   └── HR-Portal-Final/         # Next.js 14 Application
│       ├── src/                 # Source code
│       ├── api/                 # Azure Functions
│       ├── package.json
│       └── README.md
├── agents/                      # Multi-Agent System
│   ├── supervisor/              # Supervisor Agent
│   ├── hr-agent/                # HR Agent
│   ├── payroll-agent/           # Payroll Agent
│   ├── leave-agent/             # Leave Agent
│   ├── recruitment-agent/       # Recruitment Agent
│   ├── training-agent/          # Training Agent
│   ├── performance-agent/       # Performance Agent
│   └── reports-agent/           # Reports Agent
├── .devcontainer/               # Dev container config
├── .github/workflows/           # CI/CD pipelines
└── README.md
```

## 🤖 Multi-Agent Architecture

### System Overview

The portal is powered by an **AI-supervised multi-agent system**:

- **1 Supervisor Agent**: Central orchestrator coordinating all agents
- **7 Specialized Agents**: Domain experts for specific HR functions

### Agents

1. **Supervisor Agent** - Orchestrates requests and coordinates agents
2. **HR Agent** - Employee information and policies
3. **Payroll Agent** - Salary and compensation
4. **Leave Agent** - Leave management
5. **Recruitment Agent** - Hiring and onboarding
6. **Training Agent** - Learning and development
7. **Performance Agent** - Reviews and goals
8. **Reports Agent** - Analytics and reporting

See [agents/README.md](agents/README.md) for detailed agent documentation.

## 🛠 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **API**: Azure Functions (Node.js 20)
- **Hosting**: Azure Static Web Apps
- **AI**: Azure OpenAI integration (placeholders configured)
- **Dev Environment**: GitHub Codespaces / Dev Containers
- **CI/CD**: GitHub Actions

## 📖 Application Documentation

For detailed application documentation, see [workspace/HR-Portal-Final/README.md](workspace/HR-Portal-Final/README.md)

## 🚀 Local Development

### Prerequisites

- Node.js 20
- Azure CLI
- Azure Functions Core Tools

### Setup

```bash
# Navigate to the application
cd workspace/HR-Portal-Final

# Install dependencies
npm install
cd api && npm install && cd ..

# Start development servers
npm run dev              # Next.js (port 3000)
cd api && npm start      # Azure Functions (port 7071)
```

## 🌐 CI/CD Workflows

### Three-Stage Deployment

1. **PR Preview** (`.github/workflows/pr-preview.yml`)
   - Automatic preview for each pull request
   - Comment with preview URL on PR

2. **Staging** (`.github/workflows/deploy-staging.yml`)
   - Automatic deployment when merging to `main`
   - Full build validation

3. **Production** (`.github/workflows/deploy-production.yml`)
   - Manual trigger with confirmation
   - Type "deploy-production" to confirm

### Required GitHub Secrets

```
AZURE_STATIC_WEB_APPS_API_TOKEN_PREVIEW
AZURE_STATIC_WEB_APPS_API_TOKEN_STAGING
AZURE_STATIC_WEB_APPS_API_TOKEN_PRODUCTION
```

## 🔐 Azure Configuration

### Environment Variables

Configure in Azure Static Web Apps:

```env
AZURE_OPENAI_API_KEY=<your-key>
AZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
```

## 📊 Features

### Next.js 14 Application

- ✅ App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS
- ✅ Server components
- ✅ API routes via Azure Functions

### Azure Functions API

- ✅ `/api/ping` - Health check endpoint
- ✅ `/api/chat` - AI chat with Azure OpenAI (placeholder)

### Code Quality

- ✅ Strict TypeScript configuration
- ✅ ESLint with TypeScript rules
- ✅ Type checking in CI/CD
- ✅ Linting enforcement

### DevOps

- ✅ GitHub Codespaces ready
- ✅ Dev containers configured
- ✅ Automatic PR previews
- ✅ Staging and production pipelines
- ✅ Node 20 + Azure CLI included

## 🐳 Using GitHub Codespaces

### Option 1: Via Badge (Recommended)

Click the "Open in GitHub Codespaces" badge at the top of this README.

### Option 2: Via GitHub UI

1. Navigate to the repository on GitHub
2. Click the **Code** button
3. Select **Codespaces** tab
4. Click **Create codespace on main**

### Option 3: Via GitHub CLI

```bash
gh codespace create -r ismaelloveexcel/baynunah-hr-portal-2026
```

The environment will automatically:
- Install all dependencies
- Set up Node.js 20
- Configure Azure CLI
- Forward ports 3000 and 7071

## 🏃 Quick Commands

```bash
# In Codespaces or local environment

# Start Next.js app
cd workspace/HR-Portal-Final && npm run dev

# Start Azure Functions
cd workspace/HR-Portal-Final/api && npm start

# Build for production
cd workspace/HR-Portal-Final && npm run build

# Type check
cd workspace/HR-Portal-Final && npm run type-check

# Lint
cd workspace/HR-Portal-Final && npm run lint
```

## 📝 Development Workflow

1. Open in **GitHub Codespaces**
2. Wait for automatic setup (2-3 minutes)
3. Start development servers
4. Make changes
5. Create PR → Get preview deployment
6. Merge to main → Auto-deploy to staging
7. Manual production deployment when ready

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Ensure tests pass and linting is clean
4. Open a pull request
5. Review preview deployment
6. Merge after approval

## 🔒 Security

### Dependency Management
- Next.js updated to **14.2.35** (addresses CVE-2024 vulnerabilities)
- All dependencies regularly audited for vulnerabilities
- See [SECURITY_UPDATES.md](SECURITY_UPDATES.md) for details

### Best Practices
- Run `npm audit` before deployment
- Keep dependencies up to date
- Use environment variables for secrets
- Enable Azure AD authentication in production
- Configure CORS properly
- Review security advisories regularly

### Reporting Security Issues
Please report security vulnerabilities to the security team, not via public issues.

## 📄 License

Proprietary - Baynunah HR Portal 2026

## 💬 Support

For questions or support, contact the development team or open an issue.

---

**Ready to start? Click the Codespaces badge above! 👆**
