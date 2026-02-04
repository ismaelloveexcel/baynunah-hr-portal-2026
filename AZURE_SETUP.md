# Azure Configuration Guide

## Setting up Azure Resources

### 1. Azure Static Web Apps

Create three Static Web Apps instances for different environments:

```bash
# Login to Azure
az login

# Create resource group
az group create --name baynunah-hr-portal-rg --location eastus

# Create Static Web App for Preview
az staticwebapp create \
  --name baynunah-hr-portal-preview \
  --resource-group baynunah-hr-portal-rg \
  --location eastus

# Create Static Web App for Staging
az staticwebapp create \
  --name baynunah-hr-portal-staging \
  --resource-group baynunah-hr-portal-rg \
  --location eastus

# Create Static Web App for Production
az staticwebapp create \
  --name baynunah-hr-portal-production \
  --resource-group baynunah-hr-portal-rg \
  --location eastus
```

### 2. Get Deployment Tokens

```bash
# Preview
az staticwebapp secrets list \
  --name baynunah-hr-portal-preview \
  --resource-group baynunah-hr-portal-rg \
  --query "properties.apiKey" -o tsv

# Staging
az staticwebapp secrets list \
  --name baynunah-hr-portal-staging \
  --resource-group baynunah-hr-portal-rg \
  --query "properties.apiKey" -o tsv

# Production
az staticwebapp secrets list \
  --name baynunah-hr-portal-production \
  --resource-group baynunah-hr-portal-rg \
  --query "properties.apiKey" -o tsv
```

### 3. Configure GitHub Secrets

Add these secrets to your GitHub repository:

1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `AZURE_STATIC_WEB_APPS_API_TOKEN_PREVIEW` (from preview token)
   - `AZURE_STATIC_WEB_APPS_API_TOKEN_STAGING` (from staging token)
   - `AZURE_STATIC_WEB_APPS_API_TOKEN_PRODUCTION` (from production token)

### 4. Azure OpenAI Setup

```bash
# Create Azure OpenAI resource
az cognitiveservices account create \
  --name baynunah-hr-portal-openai \
  --resource-group baynunah-hr-portal-rg \
  --kind OpenAI \
  --sku S0 \
  --location eastus

# Get API key
az cognitiveservices account keys list \
  --name baynunah-hr-portal-openai \
  --resource-group baynunah-hr-portal-rg

# Get endpoint
az cognitiveservices account show \
  --name baynunah-hr-portal-openai \
  --resource-group baynunah-hr-portal-rg \
  --query properties.endpoint -o tsv
```

### 5. Configure Application Settings

For each Static Web App, add environment variables:

```bash
az staticwebapp appsettings set \
  --name baynunah-hr-portal-production \
  --resource-group baynunah-hr-portal-rg \
  --setting-names \
    AZURE_OPENAI_API_KEY="<your-key>" \
    AZURE_OPENAI_ENDPOINT="<your-endpoint>" \
    AZURE_OPENAI_DEPLOYMENT_NAME="gpt-4"
```

## Estimated Costs

- Azure Static Web Apps (Standard): ~$9/month per app
- Azure OpenAI (Pay-as-you-go): Based on usage
- Total estimated monthly cost: ~$30-50 (3 environments + OpenAI)

## Security Best Practices

1. Never commit API keys or secrets to the repository
2. Use Azure Key Vault for production secrets
3. Enable Azure AD authentication for production
4. Configure CORS properly in Azure Functions
5. Use managed identities where possible

## Monitoring

Configure Application Insights:

```bash
az monitor app-insights component create \
  --app baynunah-hr-portal-insights \
  --location eastus \
  --resource-group baynunah-hr-portal-rg
```

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs
- Verify API tokens are correct
- Ensure resource group exists

### Azure Functions not working
- Check function logs in Azure Portal
- Verify environment variables are set
- Check API permissions

### Build errors
- Run `npm run type-check` locally
- Run `npm run lint` locally
- Check Node.js version (must be 20)
