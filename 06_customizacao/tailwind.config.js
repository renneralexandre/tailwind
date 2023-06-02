/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // 'iphone-xr': {'min': '414px','max': '414px'},
        'iphone-xr-p': {raw: '(device-width: 414px) and (device-height: 896px) and (orientation: portrait)'},
        'iphone-xr-l': {raw: '(device-width: 896px) and (device-height: 414px) and (orientation: landscape)'},
        // 'iphone-13-pro': {'min': '390px','max': '390px'},
        'iphone-13-pro-p': {raw: '(device-width: 390px) and (device-height: 844px) and (orientation: portrait)'},
        'iphone-13-pro-l': {raw: '((device-width: 844px) and (device-height: 390px) and (orientation: landscape)) or ((device-width: 390px) and (device-height: 844px) and (orientation: landscape))'},
      }
   
    },
  },
  plugins: [],
}

