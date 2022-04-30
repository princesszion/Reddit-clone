module.exports = {
  purge: ['./src/*{.js}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        
        reddit_dark: {
          DEFAULT: '#030303',

        
        },
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
