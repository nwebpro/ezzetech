/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1170px'
    },
    extend: {
      colors: {
        'ezze-theme': '#178BE9',
        'ezze-theme-light': '#3498DB',
        'body-text': '#3C3C3C',
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'footer-bg': "url('../src/assets/images/footer_bg.png')",
        'counter-bg': "url('../src/assets/images/cunter.jpg')",
      },
      boxShadow: {
        '3xl': '0 4px 80px rgba(0,0,0,.1)',
        'navbar': '0 8px 20px 0 rgb(0 0 0 / 10%)',
      },
    },
  },
  plugins: [],
}