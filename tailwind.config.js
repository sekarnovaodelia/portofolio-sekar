/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#5c6bc0",
        "primary-content": "#ffffff",
        "primary-dark": "#4955a0",
        "primary-light": "#e8eaf6",
        "background-light": "#f2f4f7",
        "background-dark": "#1a202c",
        "surface-light": "#ffffff",
        "surface-dark": "#2d3748",
        "text-main": "#2c3e50",
        "text-muted": "#7f8c8d",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
