# Baynunah HR Portal - Next.js 15 with Multi-Agent AI System

## 🚀 Overview

This is an AI-supervised Employee Self-Service (ESS) and HR Portal built with Next.js 15, React 19, Azure Static Web Apps, and Azure Functions. The system features a sophisticated multi-agent architecture with 1 Supervisor Agent coordinating 7 specialized agents.

## 🤖 Multi-Agent Architecture

### Supervisor Agent
Central orchestrator that:
- Routes requests to appropriate specialized agents
- Coordinates multi-agent workflows
- Aggregates and synthesizes responses
- Monitors system health
- Handles escalations

### 7 Specialized Agents

1. **HR Agent** - Employee information and HR policies
2. **Payroll Agent** - Salary processing and tax management
3. **Leave Agent** - Leave requests and absence management
4. **Recruitment Agent** - Job posting and candidate management
5. **Training Agent** - Training programs and skill development
6. **Performance Agent** - Performance reviews and goal tracking
7. **Reports Agent** - Analytics and reporting

## 🛠 Technology Stack

- **Framework:** Next.js 15 with App Router
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **API:** Azure Functions (Node.js 20)
- **Hosting:** Azure Static Web Apps
- **AI:** Azure OpenAI (placeholder configured)
- **Code Quality:** ESLint with strict TypeScript rules

## 📁 Project Structure

```
/workspace/HR-Portal-Final/
├── src/
│   ├── app/                 # Next.js 14 app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/          # React components
├── api/                     # Azure Functions
│   ├── ping/                # Health check endpoint
│   │   ├── index.ts
│   │   └── function.json
│   ├── chat/                # AI chat endpoint (Azure OpenAI placeholder)
│   │   ├── index.ts
│   │   └── function.json
│   ├── host.json
│   ├── package.json
│   └── tsconfig.json
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── staticwebapp.config.json

/agents/                     # Multi-agent system
├── supervisor/              # Supervisor agent
│   ├── config.json
│   ├── prompts.md
│   └── README.md
├── hr-agent/
├── payroll-agent/
├── leave-agent/
├── recruitment-agent/
├── training-agent/
├── performance-agent/
└── reports-agent/

/.devcontainer/              # Dev container configuration
└── devcontainer.json        # Node 20 + Azure CLI
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20
- Azure CLI
- Azure Functions Core Tools

### Installation

```bash
cd workspace/HR-Portal-Final

# Install dependencies
npm install

# Install API dependencies
cd api
npm install
cd ..
```

### Development

```bash
# Start Next.js development server
npm run dev

# Start Azure Functions (in a separate terminal)
cd api
npm start
```

The application will be available at:
- **Next.js App:** http://localhost:3000
- **Azure Functions:** http://localhost:7071

### API Endpoints

- **GET /api/ping** - Health check endpoint
- **POST /api/chat** - AI chat endpoint (Azure OpenAI placeholder)

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

## 🔐 Environment Variables

Create a `.env.local` file for local development:

```env
# Azure OpenAI Configuration
AZURE_OPENAI_API_KEY=your_api_key
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
```

## 🌐 Deployment

### CI/CD Workflows

Three deployment workflows are configured:

1. **PR Preview** - Automatic preview deployments for pull requests
2. **Staging** - Automatic deployment to staging when merging to `main`
3. **Production** - Manual deployment with confirmation

### Required Secrets

Configure these secrets in your GitHub repository:

- `AZURE_STATIC_WEB_APPS_API_TOKEN_PREVIEW`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_STAGING`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_PRODUCTION`

### Deploy to Production

1. Go to Actions tab
2. Select "Deploy to Production" workflow
3. Click "Run workflow"
4. Type "deploy-production" to confirm
5. Click "Run workflow"

## 🐳 GitHub Codespaces

This repository is configured for GitHub Codespaces with:

- Node.js 20
- Azure CLI
- Azure Functions Core Tools
- All necessary VS Code extensions
- Automatic port forwarding

**To use Codespaces:**

1. Click the "Code" button on GitHub
2. Select "Codespaces" tab
3. Click "Create codespace on [branch]"

The development environment will be automatically configured.

## 📊 Multi-Agent System Configuration

Each agent is configured in `/agents/[agent-name]/`:

- `config.json` - Agent capabilities and Azure OpenAI settings
- `prompts.md` - System prompts and instructions
- `README.md` - Agent documentation

## 🔧 Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Strict TypeScript rules enforced
- **Type Checking:** Required before deployment
- **Linting:** Required before deployment

## 📝 License

Proprietary - Baynunah HR Portal 2026

## 🤝 Support

For support and questions, please contact the development team.
