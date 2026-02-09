
# Kevin George | DevOps Portfolio

This is a modern, high-impact DevOps Engineer portfolio built with Next.js, Tailwind CSS, and Shadcn/UI.

## Deployment Instructions (GitHub Pages)

1. **GitHub Actions Configuration**:
   The project is configured for static export in `next.config.ts`. The deployment workflow in `.github/workflows/deploy.yml` handles the build and upload.

2. **Enable Pages on GitHub**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, set it to **GitHub Actions**.

3. **Push to Main**:
   ```bash
   git add .
   git commit -m "Fix deployment routing and add .nojekyll"
   git push origin main
   ```

## Tech Stack
- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI
- **Deployment**: GitHub Pages
- **AI**: Google Genkit + Gemini
