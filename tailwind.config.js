/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D89A16',
          bright: '#F0B52B',
          light: '#F6D477',
          soft: '#FFF1C7',
          deep: '#A96B08',
          dark: '#7D4E05',
        },
        secondary: {
          DEFAULT: '#681725',
          burgundy: '#7B2030',
          light: '#963044',
          deep: '#42101A',
          pale: '#F3E1E5',
        },
        pitch: {
          DEFAULT: '#58712B',
          deep: '#3F541D',
          medium: '#718A38',
          light: '#A2B56D',
          soft: '#E8EDDA',
        },
        dark: {
          DEFAULT: '#171512',
          soft: '#29251F',
          gray: '#454139',
          muted: '#6D675C',
        },
        neutral: {
          background: '#F8F6EF',
          warm: '#E6E1D5',
          white: '#FFFFFF',
        },
      },
    },
  },
}
