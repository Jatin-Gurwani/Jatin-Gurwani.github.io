import { defineConfig, presetWind3, presetIcons } from 'unocss';
import { portfolio } from './src/config/portfolio';
import { generateShades } from './src/utils/colors';

const primaryShades = generateShades(portfolio.theme.primaryColor);
const accentShades = generateShades(portfolio.theme.accentColor);

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  // Dark mode via class strategy
  // (controlled by ThemeToggle component)

  theme: {
    colors: {
      primary: primaryShades,
      accent: accentShades,
      surface: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
    },
  },

  shortcuts: {
    // Layout
    'section-container': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    'section-padding': 'py-20 lg:py-28',

    // Cards
    'glass-card': 'bg-white/80 dark:bg-surface-800/60 backdrop-blur-xl border border-surface-200/60 dark:border-surface-700/40 rounded-2xl shadow-lg shadow-surface-900/5 dark:shadow-black/20',
    'glass-card-hover': 'glass-card hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 hover:border-primary-300/40 dark:hover:border-primary-500/30 transition-all duration-300',

    // Buttons
    'btn-primary': 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5',
    'btn-secondary': 'inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500/30 dark:border-primary-400/30 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-300 hover:-translate-y-0.5',
    'btn-ghost': 'inline-flex items-center gap-2 px-4 py-2 text-surface-600 dark:text-surface-400 font-medium rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-200',

    // Text styles
    'text-gradient': 'bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent',
    'heading-xl': 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
    'heading-lg': 'text-3xl sm:text-4xl font-bold tracking-tight',
    'heading-md': 'text-xl sm:text-2xl font-semibold',
    'body-lg': 'text-lg text-surface-600 dark:text-surface-400 leading-relaxed',
    'body-md': 'text-base text-surface-600 dark:text-surface-400 leading-relaxed',

    // Tags / Badges
    'tag': 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300',
    'tag-sm': 'inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400',
  },

  // Safelist classes used in dynamic rendering
  safelist: [
    'animate-fade-in',
    'animate-slide-up',
    'animate-scale-in',
  ],
});
