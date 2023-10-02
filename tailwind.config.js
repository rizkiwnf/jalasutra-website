/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue-jl': '#1f4dec',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

