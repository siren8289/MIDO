/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        card: 'var(--card)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: 'var(--secondary-light)',
        },
        highlight: 'var(--highlight)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          disabled: 'var(--text-disabled)',
        },
        border: {
          DEFAULT: 'var(--border)',
          focus: 'var(--border-focus)',
        },
        // Severity colors
        critical: {
          DEFAULT: 'var(--critical)',
          bg: 'var(--critical-bg)',
          text: 'var(--critical-text)',
        },
        high: {
          DEFAULT: 'var(--high)',
          bg: 'var(--high-bg)',
          text: 'var(--high-text)',
        },
        medium: {
          DEFAULT: 'var(--medium)',
          bg: 'var(--medium-bg)',
          text: 'var(--medium-text)',
        },
        low: {
          DEFAULT: 'var(--low)',
          bg: 'var(--low-bg)',
          text: 'var(--low-text)',
        },
        // State colors
        success: {
          DEFAULT: 'var(--success)',
          bg: 'var(--success-bg)',
          text: 'var(--success-text)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          bg: 'var(--warning-bg)',
          text: 'var(--warning-text)',
        },
      },
    },
  },
  plugins: [],
}
