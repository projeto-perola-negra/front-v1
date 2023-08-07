import defaultTheme from "tailwindcss/defaultTheme";

const rem = 16;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: [`${32 / rem}rem`],
        h2: [`${28 / rem}rem`],
        h3: [`${22 / rem}rem`],

        paragraph: [`${16 / rem}rem`],
        small: [`${14 / rem}rem`],
        xs: [`${12 / rem}rem`],
        "2xs": [`${10 / rem}rem`],
      },
      colors: {
        "primary-black-1": "#000",
        "primary-black-2": "#000000BF",
        "primary-black-3": "#00000080",
        "primary-black-4": "#00000040",

        "primary-white-1": "#FFFFFF",
        "primary-white-2": "#FFFFFFBF",
        "primary-white-3": "#FFFFFF80",
        "primary-white-4": "#FFFFFF40",

        "primary-red-1": "#FF2200",
        "primary-red-2": "#FF2200BF",
        "primary-red-3": "#FF220080",
        "primary-red-4": "#FF220040",

        "primary-green-1": "#00A500",
        "primary-green-2": "#00A500BF",
        "primary-green-3": "#00A50080",
        "primary-green-4": "#00A50040",
      },
    },
  },
  plugins: [],
};
