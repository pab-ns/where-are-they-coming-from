/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./js/**/*.js"],
    safelist:[
    // 'bg-blue-500',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pastelBlue: '#D2F3FF',
        pastelPink: '#F8D3C7',
      },
      fontFamily: {
        franklin: ['Libre Franklin'],
      },
      fontSize:{
        xxs: '0.625rem',
        md: '0.938rem'
      }

    },
  },
  plugins: [],
}

