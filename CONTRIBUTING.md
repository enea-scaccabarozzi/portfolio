# Contributing

Thanks for your interest in contributing! This is a personal portfolio and blog — open source mainly for transparency. PRs and issues that alter content are welcome but not encouraged.

## Expected Contributions

The main contributions we expect are:

- Security fixes
- Blog article corrections (typos, factual errors)
- Bug reports

## Getting Started

### Using the Devcontainer (recommended)

Open this repo in VS Code and select "Reopen in Container" — everything is pre-configured.

### Manual Setup

```bash
git clone https://github.com/enea-scaccabarozzi/portfolio.git
cd portfolio
bun install
bun run dev
```

Requires [Bun](https://bun.sh) and Node.js 22.

## Code Standards

- **Linting & formatting:** [Biome](https://biomejs.dev) — run `bun run check`
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org) — enforced by [commitlint](https://commitlint.js.org)
- **Git hooks:** [Lefthook](https://github.com/evilmartians/lefthook) — auto-installed via `bun run prepare`

All checks run automatically on pre-commit and pre-push hooks.

## Making Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b fix/typo-in-blog-post`)
3. Make your changes using semantic commits
4. Ensure `bun run check` and `bun run build` pass
5. Open a Pull Request

## AI Workflow

This project uses an AI-assisted development workflow. See [AGENTS.md](AGENTS.md) for details.

## What We Accept

| Type                   | Likely to merge? |
| ---------------------- | ---------------- |
| Security fixes         | Yes              |
| Blog corrections/typos | Yes              |
| Bug fixes              | Yes              |
| New features           | Unlikely         |
| Design changes         | Unlikely         |
| Content additions      | Unlikely         |
