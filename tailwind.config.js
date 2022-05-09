const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "black-5": "#0000000d",
      "black-10": "#0000001a",
      "black-20": "#00000033",
      "black-30": "#0000004d",
      "black-40": "#00000066",
      "black-50": "#00000080",
      "black-60": "#00000099",
      "black-70": "#000000b3",
      "black-80": "#000000cc",
      "black-90": "#000000e6",
      "white-10": "#ffffff33",
      "white-5": "#ffffff0d",
      "white-20": "#ffffff1a",
      "white-30": "#ffffff4d",
      "white-40": "#ffffff66",
      "white-50": "#ffffff80",
      "white-60": "#ffffff99",
      "white-70": "#ffffffb3",
      "white-80": "#ffffffcc",
      "white-90": "#ffffffe6",
      "border-1": "#E2E2E2",
      "border-2": "#DBDBDB",
      "border-3": "#EFEFEF",
      "bg-color": "#FAFAFA",
      text: "#262626",
      "text-opacity": "#8E8E8E",
      indigo: "#0095F6",
      "tag-color": "#00376B",
      "hashtag-color": "#184978",
      danger: "#ED4956",
      white: "#ffffff",
    },
    spacing: {
      "header-height": "60px",
      "header-mobile-height": "44px",
      "nav-bottom-height": "44px",
    },
    screens: {
      xs: "360px",
      sm: "576px",
      ...defaultTheme.screens,
    },

    extend: {
      boxShadow: {
        1: "0 0 5px 1px rgba(0,0,0,.0975)",
      },
      gridTemplateColumns: {
        100: "100px 1fr",
        200: "200px 1fr",
        250: "250px 1fr",
      },
      animation: {
        fade: "fade 0.2s linear",
        modal: "modal 0.1s linear",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0, visibility: "invisible" },
          "100%": { opacity: 1, visibility: "visible" },
        },
        modal: {
          "0%": {
            opacity: 0,
            visibility: "invisible",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: 1,
            visibility: "visible",
            transform: "scale(1)",
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
