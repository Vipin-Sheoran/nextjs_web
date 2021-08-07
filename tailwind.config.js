module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset:{
        '18':'4.05rem',
        '1/8':'65%',
        '-2':'-1150%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
