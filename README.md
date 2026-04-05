# Portfolio

Personal portfolio and blog at [eneascaccabarozzi.xyz](https://eneascaccabarozzi.xyz).

## Philosophy

Built with the [Swiss/International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style) in mind — clean grids, clear hierarchy, and typography that ages well. No parallax, no scroll-triggered animations, no trends.

The site compiles to static HTML and can be served from any CDN at near-zero cost. This is also why there's no comment section or feedback system in blog articles — no server runtime, no backend.

## Blog

The blog doesn't follow a regular publication schedule. It's a collection of technical knowledge accumulated over the years — things I've learned, built, or found useful enough to write down.

## Stack

| Layer      | Technology                             |
| ---------- | -------------------------------------- |
| Framework  | Next.js 16 (App Router, static export) |
| Content    | Velite + MDX                           |
| Styling    | Tailwind CSS v4                        |
| Animations | Framer Motion                          |
| Runtime    | Bun                                    |
| Tooling    | Biome, Lefthook, commitlint            |

## Features

- Internationalization (Italian / English)
- Static export (no server runtime)
- SEO (sitemap, robots.txt, Open Graph)
- Syntax highlighting (Shiki)
- Table of contents for blog posts
- Page transitions

## Project Structure

```
content/blog/          # MDX blog posts
src/
├── app/
│   ├── [locale]/      # Route-based i18n
│   │   ├── blog/      # Blog index + post pages
│   │   ├── experience/
│   │   └── projects/
│   └── ...            # Root layout, sitemap, robots
├── components/        # UI components + MDX components
└── lib/               # Data, i18n, utilities
```

## Getting Started

```bash
bun install
bun run dev
```

Or use the [devcontainer](.devcontainer/devcontainer.json) for a pre-configured environment.

## Deploy

### Docker

```bash
docker pull ghcr.io/enea-scaccabarozzi/portfolio:latest
docker run -p 8080:80 ghcr.io/enea-scaccabarozzi/portfolio:latest
```

### Static Files

Download the `.tar.gz` archive from [GitHub Releases](https://github.com/enea-scaccabarozzi/portfolio/releases) and serve with any HTTP server.

> **Note:** This project is not designed to be redeployed by others. If something goes wrong, it's not our responsibility — but feel free to [open an issue](https://github.com/enea-scaccabarozzi/portfolio/issues) or submit a PR.

## AI Disclaimer

Almost all the code in this repository is AI-generated, using the workflow defined in [enea-scaccabarozzi/coding-agents](https://github.com/enea-scaccabarozzi/coding-agents). The entire development process — from research to implementation to review — follows the agent-based workflow documented there.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[GPL-3.0](LICENSE)
