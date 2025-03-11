/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earth tones that complement Jade and Oak
        jade: {
          light: '#A3C9A8',
          DEFAULT: '#69A297',
          dark: '#386641',
        },
        oak: {
          light: '#DDA15E',
          DEFAULT: '#BC6C25',
          dark: '#774936',
        },
        earth: {
          light: '#E9EDC9',
          DEFAULT: '#CCD5AE',
          dark: '#606C38',
        },
        stone: {
          light: '#D6CCC2',
          DEFAULT: '#A4AC86',
          dark: '#5F6F52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}