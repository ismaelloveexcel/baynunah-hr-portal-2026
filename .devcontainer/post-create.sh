#!/bin/bash

# Post-create script for Baynunah HR Portal devcontainer
set -e

echo "🚀 Setting up Baynunah HR Portal development environment..."

# Install Node.js dependencies for the Next.js app
echo "📦 Installing Next.js app dependencies..."
cd workspace/HR-Portal-Final
npm install

# Install Azure Functions dependencies
echo "📦 Installing Azure Functions dependencies..."
cd api
npm install
cd ..

# Install Azure Functions Core Tools globally if not present
echo "🔧 Checking Azure Functions Core Tools..."
if ! command -v func &> /dev/null; then
    echo "Installing Azure Functions Core Tools..."
    npm install -g azure-functions-core-tools@4 --unsafe-perm true
fi

# Install Azure Static Web Apps CLI
echo "🔧 Installing Azure Static Web Apps CLI..."
npm install -g @azure/static-web-apps-cli

cd ../..

# Display helpful information
echo ""
echo "✅ Development environment setup complete!"
echo ""
echo "📝 Quick Start Commands:"
echo "  - Start Next.js dev server: cd workspace/HR-Portal-Final && npm run dev"
echo "  - Start Azure Functions: cd workspace/HR-Portal-Final/api && npm start"
echo "  - Build Next.js app: cd workspace/HR-Portal-Final && npm run build"
echo "  - Type check: cd workspace/HR-Portal-Final && npm run type-check"
echo "  - Lint: cd workspace/HR-Portal-Final && npm run lint"
echo ""
echo "🔐 Azure Configuration:"
echo "  - Login to Azure: az login"
echo "  - Set subscription: az account set --subscription <subscription-id>"
echo ""
echo "🤖 Multi-Agent System:"
echo "  - Agents configured in: /agents"
echo "  - Supervisor: /agents/supervisor"
echo "  - Specialized agents: 7 agents in /agents/*-agent"
echo ""
