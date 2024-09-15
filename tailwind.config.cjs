/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: '#07484a',
        secondary: '#70908b',
        accent: '#c4c4c4',
        textPrimary: "#07484a",
        textSecondary: "#ffffff",
        border: '#70908b',
        buttonHover: '#07484a',
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
