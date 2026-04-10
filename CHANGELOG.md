# Changelog

## [1.2.1](https://github.com/enea-scaccabarozzi/portfolio/compare/v1.2.0...v1.2.1) (2026-04-10)


### Bug Fixes

* update page transition logic to avoid UI stutterings ([8128223](https://github.com/enea-scaccabarozzi/portfolio/commit/81282233475b36659741db0f2a1921681dbb9731))

## [1.2.0](https://github.com/enea-scaccabarozzi/portfolio/compare/v1.1.0...v1.2.0) (2026-04-07)


### Features

* **seo:** add structured data, OG images, RSS feeds, favicon, and sitemap improvements ([0ab711c](https://github.com/enea-scaccabarozzi/portfolio/commit/0ab711cfac3d32ad3b98fc6a3e5286dd7494b861))

## [Unreleased]

### Added

* Favicon set (SVG with light/dark theme support, ICO, PNG 16×16/32×32, apple-touch-icon)
* Default and per-post Open Graph images (1200×630) generated at build time via satori
* Web app manifest (`site.webmanifest`)
* Theme-color meta tags for light and dark modes
* Build-time asset generation scripts (`scripts/generate-favicons.ts`, `scripts/generate-og.ts`)
* JSON-LD structured data on all pages (Person, BlogPosting, CollectionPage, BreadcrumbList)
* RSS 2.0 feeds per locale (`/en/feed.xml`, `/it/feed.xml`) with RSS link in footer
* Blog post keywords and article:tag metadata from existing tags
* Sitemap improvements: real post dates and change frequency hints

### Fixed

* Canonical URLs now include trailing slashes for consistency with site configuration

## [1.1.0](https://github.com/enea-scaccabarozzi/portfolio/compare/v1.0.1...v1.1.0) (2026-04-07)


### Features

* **blog:** add locale-aware blog with neverthrow-rop and thinking-in-nx articles ([ea428ca](https://github.com/enea-scaccabarozzi/portfolio/commit/ea428ca34480a5376df2a0aa706d27f14ad848f9))

## [1.0.1](https://github.com/enea-scaccabarozzi/portfolio/compare/v1.0.0...v1.0.1) (2026-04-05)


### Bug Fixes

* resolve deploy 404 issues ([7caf7f2](https://github.com/enea-scaccabarozzi/portfolio/commit/7caf7f21fe466fe9bf2ef8e42e35eeb2aa5fc767))

## 1.0.0 (2026-04-05)


### Features

* inital version ([caa053d](https://github.com/enea-scaccabarozzi/portfolio/commit/caa053d34a9ab8c615510359abe3a618d3df1190))


### Bug Fixes

* ensure velite builds before next.js in build script ([d5d2109](https://github.com/enea-scaccabarozzi/portfolio/commit/d5d2109529ab8c066659cf20c5529b56f42f4239))
* ensure velite builds cleanly in CI ([7c43f90](https://github.com/enea-scaccabarozzi/portfolio/commit/7c43f90b5262032d62e06e7b7b2cc73b8d6c563e))
