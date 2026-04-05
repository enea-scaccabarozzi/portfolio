# AI Agent Workflow

This project uses the [coding-agents](https://github.com/enea-scaccabarozzi/coding-agents) framework for AI-assisted development.

## Workflow

The development workflow follows a phase-based pattern with specialized agents:

```
Explorer (research) → Builder (implement) → Reviewer (verify) → Committer (commit)
```

For multi-phase tasks, the **Conductor** agent orchestrates the full pipeline with pause points for human approval.

## Setup

Use the [devcontainer](.devcontainer/devcontainer.json) for a pre-configured development environment, or follow the manual setup in [CONTRIBUTING.md](CONTRIBUTING.md).

## Task State

Plans and progress are tracked in the `.tasks/` directory. Each task gets a numbered folder (e.g., `.tasks/001-feature-name/`) containing research, plans, and status tracking.

## Learn More

See the [coding-agents README](https://github.com/enea-scaccabarozzi/coding-agents) for the full framework documentation.
