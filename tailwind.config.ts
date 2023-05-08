/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./src/assets/site-bg.jpg')"
      },
    },
    fontFamily: {
      primary: 'Ubuntu',
      secondary: 'Ubuntu',
      tertiary: 'Ubuntu Mono',
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      }
    },
  },
  plugins: [],
}

