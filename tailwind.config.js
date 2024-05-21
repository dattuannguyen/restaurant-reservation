/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabinet-grotesk': ['Cabinet Grotesk', 'sans-serif'],
        'plein':['Plein' , 'sans-serif'],
        'telma':['Telma', 'cursive'],
        'body':['Supreme','sans-serif']
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 2s ease-out forwards',
      },

    },
  },
  plugins: [],
}

