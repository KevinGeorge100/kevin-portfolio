# Kevin George | DevOps Portfolio

This is a modern, high-impact DevOps Engineer portfolio built with Next.js, Tailwind CSS, and Shadcn/UI.

## Deployment Instructions (GitHub Pages)

1. **Configure for Static Export**:
   The project is configured with `output: 'export'` and a `basePath` in `next.config.ts`.

2. **GitHub Actions**:
   A deployment workflow is located in `.github/workflows/deploy.yml`.

3. **Enable Pages on GitHub**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, change it to **GitHub Actions**.

4. **Push to Main**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

## Tech Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI
- **Deployment**: GitHub Pages (via Actions)
