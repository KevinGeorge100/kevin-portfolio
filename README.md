# Kevin George | DevOps Portfolio

[![Live Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://KevinGeorge100.github.io/kevin-portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **🌐 Live Website**: [https://KevinGeorge100.github.io/kevin-portfolio/](https://KevinGeorge100.github.io/kevin-portfolio/)

A modern, high-impact DevOps Engineer portfolio built with Next.js, Tailwind CSS, and Shadcn/UI. Features a custom AI assistant, glassmorphic UI design, and automated deployment pipeline.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **AI DevOps Assistant**: Interactive chatbot powered by Google Gemini 2.0 Flash, trained on Kevin's professional profile and expertise
- **Glassmorphic UI**: Modern design with high-fidelity "clay" and glass aesthetics using Shadcn/UI components
- **Interactive Projects Showcase**: Real-time infrastructure status and metrics visualization
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Automated CI/CD**: Continuous deployment to GitHub Pages via GitHub Actions
- **Static Export**: Optimized Next.js static site generation for fast loading
- **Custom Animations**: Smooth transitions using Framer Motion and interactive cursor effects

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (Static Export)
- **Language**: TypeScript/JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Interactions**: Splash Cursor

### AI & Backend
- **AI SDK**: [Google Genkit](https://github.com/firebase/genkit)
- **LLM**: Google Gemini 2.0 Flash

### DevOps & Deployment
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Version Control**: Git & GitHub

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KevinGeorge100/kevin-portfolio.git
   cd kevin-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if applicable):
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and configuration
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at **`http://localhost:9000`**.

### Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

---

## 📦 Deployment

### Automated Deployment to GitHub Pages

The project is configured with GitHub Actions for automatic deployment when you push to the `main` branch.

#### Deployment Workflow

1. **Stage your changes**:
   ```bash
   git add .
   ```

2. **Commit your changes**:
   ```bash
   git commit -m "Your descriptive commit message"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

4. **Monitor deployment**:
   - Go to the **Actions** tab in your repository
   - Watch the build process (typically completes in < 2 minutes)
   - Once complete, your site will be live at: **[https://KevinGeorge100.github.io/kevin-portfolio/](https://KevinGeorge100.github.io/kevin-portfolio/)**

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
npm run export
# Deploy the 'out' directory to your hosting provider
```

---

## 📁 Project Structure

```
kevin-portfolio/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── lib/               # Utility functions and helpers
│   ├── api/               # API routes
│   └── page.tsx           # Main page component
├── public/                # Static assets (images, fonts, etc.)
├── styles/                # Global styles
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

---

## ⚙ Configuration

### Next.js Configuration

The project uses static export configuration in `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  basePath: '/kevin-portfolio',
  images: {
    unoptimized: true
  }
}
```

### Tailwind CSS

Custom theme configuration can be found in `tailwind.config.js`. The project uses Shadcn/UI components which are configured for easy customization.

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:9000
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KevinGeorge100/kevin-portfolio/issues).

### Development Workflow

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Kevin George**

- Portfolio: [https://KevinGeorge100.github.io/kevin-portfolio/](https://KevinGeorge100.github.io/kevin-portfolio/)
- GitHub: [@KevinGeorge100](https://github.com/KevinGeorge100)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Google Gemini AI](https://deepmind.google/technologies/gemini/)

---

<div align="center">
  <p>Made with ❤️ by Kevin George</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>