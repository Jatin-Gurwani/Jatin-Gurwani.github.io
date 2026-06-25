# Jatin Gurwani — AI Engineer Portfolio

A modern, minimalist, and production-ready personal portfolio website built with **Astro**, **UnoCSS**, and **TypeScript**. Designed for AI Engineers and GenAI Specialists. Deploys directly to GitHub Pages.

![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-Atomic_CSS-333333?style=for-the-badge&logo=unocss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Features

- 🎨 **Modern & Minimalist** — Clean design with glassmorphism cards and smooth animations
- 🌗 **Dark / Light Mode** — System preference detection + manual toggle + localStorage persistence
- 📱 **Mobile-First Responsive** — Looks great on phones, tablets, and desktops
- ⚡ **Blazing Fast** — Static site generation, minimal JS, lazy loading (Lighthouse > 90)
- 🔍 **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- ♿ **Accessible** — WCAG-friendly, focus-visible, reduced-motion support
- 🧩 **Single Config File** — Update all content from `src/config/portfolio.ts`
- 🚀 **Auto Deploy** — GitHub Actions workflow for automatic deployment

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, tagline, CTA buttons, social links |
| **About** | Professional summary, stats, specializations |
| **Skills** | 11 categorized technology groups with modern cards |
| **Experience** | Interactive timeline with companies, roles, tech |
| **Projects** | Filterable project showcase with tags |
| **Certifications** | Professional credentials cards |
| **Achievements** | Awards, publications, open source, hackathons |
| **GitHub Stats** | Contribution graph, stats, top languages |
| **Testimonials** | Quotes from colleagues and clients |
| **Contact** | Contact info + frontend contact form |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v22.12.0 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Jatin-Gurwani/Jatin-Gurwani.github.io.git
cd Jatin-Gurwani.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## ✏️ Customization

### Update Your Content

**All content is managed from a single file:** `src/config/portfolio.ts`

Edit this file to update:

| Field | Description |
|-------|-------------|
| `theme` | Primary and Accent brand colors (hex color codes) |
| `name`, `title`, `tagline` | Your personal info |
| `profilePhoto` | Path to your photo (place in `public/`) |
| `resumeUrl` | Path to your resume (place in `public/`) |
| `email`, `phone`, `location` | Contact details |
| `socialLinks` | GitHub, LinkedIn, Twitter, Blog URLs |
| `skills` | Categorized technology groups |
| `experience` | Work history entries |
| `education` | Academic background |
| `projects` | Portfolio projects with tags |
| `certifications` | Professional certifications |
| `achievements` | Awards, publications, etc. |
| `testimonials` | Quotes from colleagues |
| `githubUsername` | Your GitHub username (for stats) |
| `seo` | SEO metadata (title, description, etc.) |

### Add Your Assets

Place your files in the `public/` directory:

```
public/
├── profile.jpg        # Your profile photo
├── resume.pdf         # Your resume
├── og-image.png       # Open Graph preview image (1200x630)
├── favicon.svg        # Site favicon
└── projects/          # Project screenshots
    ├── project1.png
    └── project2.png
```

### Update Site URL

In `astro.config.mjs`, change the `site` value to your GitHub Pages URL:

```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  // ...
});
```

---

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically builds and deploys on every push to `main`.

1. **Push your code** to the `main` branch of your `<username>.github.io` repository
2. Go to your repository **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically build and deploy your site

Your portfolio will be live at `https://<username>.github.io`

### Manual Deployment

```bash
# Build the site
npm run build

# The built files are in the dist/ directory
# You can deploy this to any static hosting provider
```

---

## 🏗️ Project Structure

```
├── astro.config.mjs          # Astro configuration
├── uno.config.ts             # UnoCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/
│   ├── favicon.svg           # Site favicon
│   └── robots.txt            # Crawler instructions
└── src/
    ├── config/
    │   └── portfolio.ts      # ⭐ All content lives here
    ├── components/
    │   ├── Hero.astro
    │   ├── About.astro
    │   ├── Skills.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   ├── Certifications.astro
    │   ├── Achievements.astro
    │   ├── GitHubStats.astro
    │   ├── Testimonials.astro
    │   ├── Contact.astro
    │   ├── Footer.astro
    │   ├── ThemeToggle.astro
    │   └── SectionHeading.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Astro](https://astro.build) | Static site framework |
| [UnoCSS](https://unocss.dev) | Atomic CSS engine |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [GitHub Actions](https://github.com/features/actions) | CI/CD deployment |
| [GitHub Pages](https://pages.github.com) | Static hosting |

---

## 📊 Performance Targets

- ⚡ Lighthouse Performance: **> 90**
- ♿ Lighthouse Accessibility: **> 90**
- 🔍 Lighthouse SEO: **> 90**
- ✅ Lighthouse Best Practices: **> 90**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using <a href="https://astro.build">Astro</a>
</p>
