module.exports = {
  mode: "jit",
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      // xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "background-image": "url('/home/bg.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
