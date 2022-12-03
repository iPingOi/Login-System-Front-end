/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    colors: {
      transparent: 'transparent',
      black: '#010100',
      white: '#FEFFFE',

      'gray-900': '#2A2A2A',
      'gray-200': '#D8D9D8',

      'blue-500': '#253EB7',

      'green-500': '#00CB94'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}