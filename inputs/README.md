# Input Configuration Files

This directory contains templates for configuring the multi-agent system.

## Files

- `requirements.json` - Project requirements and features specification
- `model-config.json` - Azure OpenAI model configuration
- `azure-settings.json` - Azure resource settings and credentials
- `repositories.json` - List of HR repositories to analyze

## Usage

1. Copy the template files and update with your specific values
2. Never commit sensitive data (credentials, keys) to version control
3. Use GitHub Secrets for sensitive configuration in CI/CD
