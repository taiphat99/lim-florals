/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#F8EDE3',
        'second': '#BDD2B6',
        'third': '#A2B29F',
        'fourth': '#798777',
        'fifth': '#338873',
        'sixth': '#5f765c'

      },
      transitionDuration: {
        '400': '400ms',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontFamily: {
        Roboto: ["Roboto", "san-serif"]
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.gray.100'), 0 0 20px theme('colors.gray.500')"
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [

  ],

}


