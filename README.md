
# Kevin George | DevOps Portfolio

This is a modern, high-impact DevOps Engineer portfolio built with Next.js, Tailwind CSS, and Shadcn/UI. It features a custom AI assistant, glassmorphic UI, and automated deployment.

## Tech Stack
- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS + Shadcn UI
- **Components**: Lucide Icons, Framer Motion (visual patterns), Splash Cursor
- **AI**: Google Genkit + Gemini 2.0 Flash
- **Deployment**: GitHub Pages (via GitHub Actions)

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:9000`.

## Deployment to GitHub Pages

The project is configured to automatically deploy when you push to the `main` branch.

### Commands to Update GitHub

Run these commands in your terminal to save your changes and trigger the live deployment:

```bash
# 1. Stage all changes
git add .

# 2. Commit the changes
git commit -m "Enhance UI, fix hydration issues, and link resume"

# 3. Push to GitHub
git push origin main
```

### Verification
- **GitHub Action**: Go to your repository's "Actions" tab to monitor the build.
- **Live Site**: Once the action completes (usually < 2 mins), your site will be live at `https://KevinGeorge100.github.io/kevin-portfolio/`.

## Features
- **AI DevOps Assistant**: Interactive bot trained on Kevin's professional profile.
- **Glassmorphic UI**: High-fidelity "clay" and glass aesthetics.
- **Interactive Projects**: Real-time infrastructure status and metrics visualization.
- **Responsive Design**: Optimized for all devices with specific hydration error fixes.
