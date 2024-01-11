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
        dm: ['"DM Sans"', 'sans'],
        rub: ['"Rubik"', 'sans'],
        sg: ['"Space Grotesk"', 'sans'],
        ibm: ['"IBM Plex Sans"', 'sans']
      },
      fontSize:{
        'sen-sm': '16px',
        'sen-h6': '20px',
        'sen-h5': '24px',
        'sen-h4': '32px',
        'sen-h3': '40px',
        'sen-h2': '48px',
        'sen-h1': '56px',
        'dm-xs': '10px',
        'dm-sm': '12px',
        'dm-base': '14px',
        'dm-md': '16px',
        'dm-lg': '20px',
        'dm-xl': '24px',
        'dm-2xl': '32px',
        'dm-sb': '14px',
        'dm-lb': '16px',
        'rub-xxs': '14px',
        'rub-xs': '16px',
        'rub-sm': '24px',
        'rub-base': '28px',
        'rub-lg': '32px',
        'rub-xl': '36px',
        'rub-2xl': '44px',
        'sg-base': '16px',
        'ibm-base': '16px',
      },
      colors:{
        primary:{"theme":"#131319"},
        secondary:{
          "theme":"#D82E2E",
          "100": "#FEFAFA"
        },
        grayTheme:{
          "100":"#F5F8FA",
          "200":"#CBD5E1",
          "300":"#94A3B8",
          "400":"#64748B",
          "500":"#4F627D",
          "gray-600":"#384860",
          "gray-700":"#202B3C"
        },
        txAmber:{"100":"#F5841F"},
        txBlue:{"100":"#00C4FF"},
        txInfo:{"100":"#2F80ED"},
        warning:{"100":"#F9CC59"},
        uvp:{
          "1":"#E2EDF9",
          "2":"#E0F0F0",
          "3":"#F8F3E3",
          "4":"#E7E6EF",
          "5":"#FBE9F3",
        }
      },
      boxShadow: {
        'pricing': '0px 4px 8px 0px rgba(3, 47, 60, 0.05), 1px -4px 8px 0px rgba(3, 47, 60, 0.05);',
      },
    },
  },
  plugins: [],
}