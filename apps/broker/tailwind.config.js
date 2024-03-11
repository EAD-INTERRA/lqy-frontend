/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  theme: {
    extend: {
       fontFamily: {
        sen: ['"Sen"', 'sans'],
        ox: ['"Oxygen"', 'sans'],
      },
      fontSize:{
        'sen-sm': '16px',
        'sen-h6': '20px',
        'sen-h5': '24px',
        'sen-h4': '32px',
        'sen-h3': '40px',
        'sen-h2': '48px',
        'sen-h1': '56px',
        'ox-xs': '14px',
        'ox-sm': '16px',
        'ox-base': '20px',
        'ox-md': '24px',
        'ox-lg': '30px',
        'ox-xl': '40px',
        'ox-2xl': '60px',
        'ox-3xl': '80px',
      },
      colors:{
        theme:{
          "primary":"#1E87F0",
          "bc":'#10356D',
          "as":'#39D3EC',
          "secondary":"#F34444",
          "bcs":"#EE2E2E",
          "bcs":"#EE2E2E",
          "dg": "rgba(225, 229, 235, 0.55)",
          "vt": "#1f263e",
          "tb": "#10356D1A"

        },
      },
      boxShadow: {
        'pricing': '0px 4px 8px 0px rgba(3, 47, 60, 0.05), 1px -4px 8px 0px rgba(3, 47, 60, 0.05);',
      },
    },
  },
  plugins: [],
}