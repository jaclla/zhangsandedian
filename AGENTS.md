# Repository Guidelines

This repository hosts a VitePress documentation site. Keep changes small, reviewable, and consistent with the site’s structure and style.

## Project Structure & Module Organization
- `docs/`: Site content and config.
  - `docs/index.md`: Home page.
  - `docs/pages/`: Topic pages (e.g., `api.md`, `about.md`). Use lowercase names; hyphenate multi‑word files (e.g., `getting-started.md`).
  - `docs/public/`: Static assets served at root (e.g., `/logo.jpg`).
  - `docs/.vitepress/config.mts`: Site configuration (nav, theme, head, base).
- Root configs: `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`, `.editorconfig`.
- Deployment: `Dockerfile` (builds static site) and `nginx.conf` (serves built files).

## Build, Test, and Development Commands
- `npm run docs:dev` (or `pnpm docs:dev`): Start local dev server with HMR.
- `npm run docs:build` (or `pnpm docs:build`): Build static site to `docs/.vitepress/dist`.
- `npm run docs:preview` (or `pnpm docs:preview`): Preview the production build locally.
- Docker example: `docker build -t docs . && docker run -p 8080:80 docs`.

## Coding Style & Naming Conventions
- Markdown: Use `#`–`###` headings, sentence‑case titles, and descriptive front matter only if needed.
- Files: Lowercase, hyphen‑separated names in `docs/pages/`.
- Links/Assets: Prefer root‑relative paths (e.g., `/logo.jpg`).
- Formatting: Adhere to `.editorconfig` (UTF‑8, LF, tabs, size 2). No Prettier/ESLint is enforced.

## Testing Guidelines
- No unit test suite. Validate by building and previewing:
  - Run `npm run docs:build` and fix build warnings.
  - Run `npm run docs:preview`; click through nav, check images/links.
- Keep images optimized; place shared assets in `docs/public/`.

## Commit & Pull Request Guidelines
- Commits: Clear, scoped messages (e.g., `docs(api): add auth section`, `chore: update nginx.conf`).
- PRs: Include summary, scope (files/sections changed), before/after screenshots for visual updates, and linked issues.
- Keep PRs focused; avoid unrelated refactors. Ensure `docs:build` passes before requesting review.

## Security & Configuration Tips
- CDN usage is defined in `config.mts` `head` tags; avoid adding untrusted scripts.
- When changing `base` or nav in `config.mts`, verify all links and redirects in preview.
