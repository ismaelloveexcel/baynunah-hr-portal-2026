# 🚀 Quick Start Guide

## Option 1: GitHub Codespaces (Recommended)

### Steps:
1. Click the **"Open in GitHub Codespaces"** badge in the main README
2. Wait 2-3 minutes for automatic setup
3. Once ready, open a terminal and run:
   ```bash
   cd workspace/HR-Portal-Final
   npm run dev
   ```
4. Open another terminal and run:
   ```bash
   cd workspace/HR-Portal-Final/api
   npm start
   ```
5. View the app at the forwarded port (Codespaces will notify you)

### What Gets Installed Automatically:
- ✅ Node.js 20
- ✅ Azure CLI
- ✅ All npm dependencies
- ✅ Azure Functions Core Tools
- ✅ Azure Static Web Apps CLI

---

## Option 2: Local Development

### Prerequisites:
- Node.js 20+
- Git
- Azure CLI (optional, for deployment)

### Steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ismaelloveexcel/baynunah-hr-portal-2026.git
   cd baynunah-hr-portal-2026
   ```

2. **Install Next.js dependencies:**
   ```bash
   cd workspace/HR-Portal-Final
   npm install
   ```

3. **Install API dependencies:**
   ```bash
   cd api
   npm install
   cd ..
   ```

4. **Install Azure Functions Core Tools:**
   ```bash
   npm install -g azure-functions-core-tools@4 --unsafe-perm true
   ```

5. **Start the development servers:**

   Terminal 1 - Next.js:
   ```bash
   cd workspace/HR-Portal-Final
   npm run dev
   ```

   Terminal 2 - Azure Functions:
   ```bash
   cd workspace/HR-Portal-Final/api
   npm start
   ```

6. **Open your browser:**
   - Next.js App: http://localhost:3000
   - Azure Functions: http://localhost:7071

---

## Testing the API Endpoints

### Health Check (Ping):
```bash
curl http://localhost:7071/api/ping
```

Expected response:
```json
{
  "status": "ok",
  "message": "Pong! API is running.",
  "timestamp": "2026-02-03T20:00:00.000Z",
  "service": "Baynunah HR Portal API",
  "version": "1.0.0"
}
```

### Chat Endpoint (Placeholder):
```bash
curl -X POST http://localhost:7071/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "Hello, what can you help me with?"}
    ]
  }'
```

Expected response:
```json
{
  "id": "chatcmpl-...",
  "object": "chat.completion",
  "model": "gpt-4",
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "This is a placeholder response..."
    }
  }],
  "note": "PLACEHOLDER: Configure Azure OpenAI credentials"
}
```

---

## Code Quality Checks

### Type Checking:
```bash
cd workspace/HR-Portal-Final
npm run type-check
```

### Linting:
```bash
npm run lint
```

### Build:
```bash
npm run build
```

---

## Multi-Agent System

The agents are configured in the `/agents` directory:

```
agents/
├── supervisor/           # Central orchestrator
├── hr-agent/            # Employee information
├── payroll-agent/       # Salary & compensation
├── leave-agent/         # Leave management
├── recruitment-agent/   # Hiring & onboarding
├── training-agent/      # Learning & development
├── performance-agent/   # Performance reviews
└── reports-agent/       # Analytics & reporting
```

Each agent has:
- `config.json` - Configuration and capabilities
- `README.md` - Documentation
- `prompts.md` - System prompts (supervisor only)

To integrate with Azure OpenAI:
1. Create an Azure OpenAI resource
2. Deploy a GPT-4 model
3. Set environment variables in Azure Static Web Apps

---

## Troubleshooting

### Port already in use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 7071
lsof -ti:7071 | xargs kill -9
```

### Dependencies not installing:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors:
```bash
# Rebuild TypeScript
npm run type-check
```

### Azure Functions not starting:
```bash
# Check if Functions Core Tools is installed
func --version

# Install if missing
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

---

## Next Steps

1. ✅ **Development**: Start coding in the Next.js app
2. ✅ **Azure Setup**: Follow [AZURE_SETUP.md](AZURE_SETUP.md)
3. ✅ **Configure CI/CD**: Add GitHub secrets
4. ✅ **Deploy**: Create PR for preview, merge for staging
5. ✅ **Production**: Manually trigger production deployment

---

## Need Help?

- 📖 [Full README](README.md)
- 🔧 [Azure Setup Guide](AZURE_SETUP.md)
- 📋 [Verification Checklist](VERIFICATION.md)
- 🤖 [Multi-Agent System](agents/README.md)
- 💻 [Application Docs](workspace/HR-Portal-Final/README.md)
