/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'dark-blue': '#1F4DFC',
      'admin-blue': '#2C54EC',
      'light-blue': '#839CFF',
      'gray-admin': '#F1F1F1',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

