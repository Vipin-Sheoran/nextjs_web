module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset:{
        '18':'4.05rem',
        '1/8':'65%',
        '-2':'-1150%',
        '3.5/4':'30%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
