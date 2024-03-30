import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily :{ 
       "open-sans" : ["open-sans"],
       "cmg-sans-bold" : ["cmg-sans-bold"],
       "cmg-sans-medium" : ["cmg-sans-medium"],
       "cmg-sans-regular" : ["cmg-sans-regular"],
      } ,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
