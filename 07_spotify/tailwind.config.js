/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src**/*.{html,js}"],
  theme: {
    extend: {
      // spacing: {
      //   '125px': '125px' 
      // },
      colors : {
        'spot-color-hover': '#18D760',
        'spot-color-main-purple':  '#2D46B9',
        'spot-color-main-green':  '#1ED760'
      }, 
      backgroundImage: theme => ({
        'spot-image-theme': "url('/src/img/bursts.svg')",
        'spot-image-theme-mobile': "url('/src/img/bursts-mobile.svg')",
        
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'spot-position-banner': '46% 4%',
        'spot-position-banner-mobile': 'top 25% center',
      }
    },
  },
  plugins: [],
}

