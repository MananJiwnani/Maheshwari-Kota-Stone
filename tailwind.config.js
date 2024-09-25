/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkBlue: '#1D3752',
        DirtyWhite: '#F4F5F6',
        LightGray: '#FBFBFB'
      }
    },
  },
  plugins: [],
}

