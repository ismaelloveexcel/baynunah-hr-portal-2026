# Multi-Agent System for Baynunah HR Portal

This directory contains the AI-supervised multi-agent architecture for the HR Portal.

## Architecture Overview

The system consists of:
- **1 Supervisor Agent**: Orchestrates and coordinates all specialized agents
- **7 Specialized Agents**: Each handling specific HR domain tasks

## Agents

### Supervisor Agent (`/agents/supervisor`)
- Coordinates all agent activities
- Routes requests to appropriate specialized agents
- Monitors agent performance and health
- Manages agent workflow and dependencies

### Specialized Agents

1. **HR Agent** (`/agents/hr-agent`)
   - Employee information management
   - HR policies and procedures
   - General HR inquiries

2. **Payroll Agent** (`/agents/payroll-agent`)
   - Salary processing
   - Payroll inquiries
   - Tax and deduction management

3. **Leave Agent** (`/agents/leave-agent`)
   - Leave requests and approvals
   - Leave balance tracking
   - Absence management

4. **Recruitment Agent** (`/agents/recruitment-agent`)
   - Job posting and candidate management
   - Interview scheduling
   - Onboarding processes

5. **Training Agent** (`/agents/training-agent`)
   - Training program management
   - Course enrollment
   - Skills development tracking

6. **Performance Agent** (`/agents/performance-agent`)
   - Performance reviews
   - Goal setting and tracking
   - Feedback management

7. **Reports Agent** (`/agents/reports-agent`)
   - Data analytics and reporting
   - Dashboard generation
   - Custom report creation

## Configuration

Each agent has:
- `config.json`: Agent configuration and capabilities
- `prompts.md`: System prompts and instructions
- `README.md`: Agent-specific documentation

## Usage

Agents communicate through the Supervisor using a standardized message protocol defined in the Azure Functions API.
