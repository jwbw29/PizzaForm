/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#F05365",
      secondaryColor: "#FABC2A",
      tertiaryColor: "#F2EDEB",
      dark: "#171717",
    },
    fontFamily: {
      logo: ["Qwitcher Grypen", "cursive"],
      modal: ["Caprasimo", "cursive"],
      comicSans: ["Comic Sans MS", "Comic Sans", "cursive"],
    },
  },
  plugins: [],
};
