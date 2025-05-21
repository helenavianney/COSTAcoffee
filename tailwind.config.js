/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'millbrook': {
          200: '#DFD6A9',
          800: '#65482E',
          900: '#553C2A',
          950: '#322016',
        },
      },
      fontFamily: {
        'poppins': "Poppins",
        'sigmar-one': 'Sigmar One',
      },
    },
  },
  plugins: [],
}

