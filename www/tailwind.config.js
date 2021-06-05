const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode:'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Whyte', ...fontFamily.sans]
    },
    extend: {
      boxShadow: ['active'],
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        cream: '#FCF7ED',
        green:'#485B55',
        lightGreen:'#c5cbcb',
        silver:'#C5CBCB',
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus']
    },
  },
  plugins: [],
}
