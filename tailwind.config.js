/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      },
    },
    fontFamily: {
      'sans': ['Roboto'],
      'body': ['"Roboto"'],
    },
  },
  plugins: [],
}
