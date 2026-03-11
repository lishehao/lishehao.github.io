# Personal Website

This repository contains the source for `https://lishehao.github.io/`.

## Stack

- Static site generator: `Hugo`
- Theme: `PaperMod`
- Deploy target: `GitHub Pages`
- Generated output: `docs/`

## Important Paths

- `hugo.toml` — site configuration, menu, homepage profile block
- `content/about/index.md` — About page content
- `content/projects/` — project pages shown on the site
- `static/images/` — images served as-is
- `themes/PaperMod/` — vendored theme files
- `docs/` — generated site output for GitHub Pages

## Local Development

Preview locally:

```bash
hugo server -D
```

Build production output:

```bash
hugo --gc --minify
```

## Content Workflow

This site is bilingual: English stays at the root URL, and Chinese is generated under `/zh/`.

For translated pages, use sibling files in the same bundle, for example `index.md` and `index.zh.md`.

### Update homepage profile

Edit `hugo.toml` per language:

- `[languages.en.params.profileMode].title`
- `[languages.en.params.profileMode].subtitle`
- `[languages.zh.params.profileMode].title`
- `[languages.zh.params.profileMode].subtitle`
- shared image path in `imageUrl`

### Update About page

Edit both `content/about/index.md` and `content/about/index.zh.md`.

### Add a new project

Create a new project page with Hugo:

```bash
hugo new content/projects/my-project/index.md
```

Then fill in the generated English file and add a sibling `index.zh.md` if you want the page to be switchable in Chinese.

Recommended fields:

- `title`
- `summary`
- `tags`
- `weight`
- `draft`

Keep project pages focused on:

- what problem the project solves
- what you built
- technical choices / architecture
- outcome, limitations, and links

## Deployment

This site publishes from `docs/`, so the normal deploy flow is:

1. Edit source files under `content/`, `static/`, or `hugo.toml`
2. Rebuild with `hugo --gc --minify`
3. Commit both source changes and updated `docs/`
4. Push to `main`

GitHub Pages then serves the updated files from this repository.

## Maintenance Notes

- Do not edit files inside `docs/` by hand; they are generated.
- `themes/PaperMod/` is tracked directly in this repository, not as a submodule.
- If you change URLs or custom metadata, update `hugo.toml` first.
