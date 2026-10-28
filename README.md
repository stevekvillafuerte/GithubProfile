# GitHub Profile

A React app built with Vite that displays a GitHub user's profile and repositories using the GitHub API.

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL to open in your browser. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy from GitHub

This repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages whenever changes are pushed to `main`.

1. In the repository on GitHub, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push a commit to `main` (or manually run the **Deploy to GitHub Pages** workflow from the **Actions** tab).

After the workflow succeeds, the site is available at `https://stevekvillafuerte.github.io/GithubProfile/`.
