# Baynunah HR Portal - Setup Guide

This guide will help you set up and run the AI-supervised multi-agent HR Portal system.

## Prerequisites

Before you begin, ensure you have:

1. **Azure Subscription** - Active Azure subscription with appropriate permissions
2. **Azure OpenAI Access** - Approved access to Azure OpenAI service
3. **GitHub Account** - Repository access and ability to configure secrets
4. **Node.js 18+** - For local development
5. **Azure CLI** - For resource provisioning (optional)

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ismaelloveexcel/baynunah-hr-portal-2026.git
cd baynunah-hr-portal-2026
```

### 2. Configure Azure Resources

Update the configuration files in `/inputs/`:

#### a. Azure Settings (`inputs/azure-settings.json`)

Replace placeholder values with your Azure resource details:
- Subscription ID
- Resource group name
- Azure region
- Static Web App names

#### b. Model Configuration (`inputs/model-config.json`)

Configure Azure OpenAI settings:
- API endpoint
- API key (use environment variables)
- Model deployments

#### c. Requirements (`inputs/requirements.json`)

Review and customize:
- Core features needed
- Technical requirements
- Quality standards

### 3. Set Up GitHub Secrets

Add the following secrets to your GitHub repository:

```
Settings → Secrets and variables → Actions → New repository secret
```

Required secrets:
- `SWA_STAGING_TOKEN` - Azure Static Web Apps deployment token for staging
- `SWA_PROD_TOKEN` - Azure Static Web Apps deployment token for production
- `AZURE_OPENAI_KEY` - Azure OpenAI API key
- `AZURE_OPENAI_ENDPOINT` - Azure OpenAI endpoint URL

### 4. Initialize the Application

```bash
cd workspace/HR-Portal-Final
npm install
```

## Local Development

### Run the Next.js App

```bash
cd workspace/HR-Portal-Final
npm run dev
```

Visit http://localhost:3000 to see the application.

### Run the API Functions Locally

```bash
cd workspace/HR-Portal-Final/api
npm install
npm start
```

The API will be available at http://localhost:7071

## AI Agent Workflow

### Starting the Supervisor

The Supervisor Agent orchestrates all other agents. To start the workflow:

1. Ensure all configuration files in `/inputs/` are updated
2. The supervisor will automatically trigger:
   - Discovery Agent to scan repositories
   - Solution Architect to create proposals
   - Azure Deploy Assist to provision resources
   - Builder Agent to implement features

### Agent Execution Order

```
Supervisor Agent (Start)
    ↓
Discovery Agent (Scan repos)
    ↓
Solution Architect (Create proposals)
    ↓
Builder Agent (Implement features)
    ↓
UI Excellence + UX Reviewer (Quality gates)
    ↓
Product Gap Analyst (Identify gaps)
    ↓
Azure Deploy Assist (Deploy)
```

## Deployment Workflow

### PR Preview Environments

When you create a pull request:
1. GitHub Actions automatically builds the app
2. Deploys to a preview environment
3. Comments on the PR with the preview URL

### Staging Deployment

When code is merged to `main`:
1. Automatically triggers staging deployment
2. Runs linting and builds
3. Deploys to staging environment

### Production Deployment

Manual process:
1. Go to Actions → Deploy to Production
2. Click "Run workflow"
3. Type "deploy" to confirm
4. Production deployment starts

## Monitoring

### View Deployment Status

Check the Actions tab in GitHub to see:
- Workflow runs
- Build logs
- Deployment status

### Agent Outputs

Review agent outputs in `/outputs/`:
- Reports in `/outputs/reports/`
- Proposals in `/outputs/proposals/`
- Build logs in `/outputs/build-logs/`

## Troubleshooting

### Build Failures

1. Check Node.js version (must be 18+)
2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Deployment Failures

1. Verify GitHub secrets are set correctly
2. Check Azure resource status
3. Review workflow logs in GitHub Actions

### Agent Configuration Issues

1. Validate JSON syntax in `/inputs/` files
2. Ensure Azure OpenAI credentials are correct
3. Check agent configuration files in `/agents/`

## Next Steps

1. **Configure Repositories** - Update `inputs/repositories.json` with actual HR repos to scan
2. **Customize Requirements** - Adjust `inputs/requirements.json` to match your needs
3. **Start Discovery** - Trigger the Supervisor Agent to begin the workflow
4. **Monitor Progress** - Review agent outputs and reports
5. **Deploy** - Use the CI/CD workflows to deploy to staging and production

## Support

For issues or questions:
1. Check the `/outputs/reports/` directory for agent error logs
2. Review GitHub Actions workflow logs
3. Consult the Azure portal for resource status

## License

ISC
