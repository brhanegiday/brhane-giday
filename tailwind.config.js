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
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        lochmara: {
          50: "#f2f9fc",
          100: "#e6f2f9",
          200: "#bfdfef",
          300: "#99cce6",
          400: "#4da6d3",
          500: "#0080c0",
          600: "#0073ad",
          700: "#006090",
          800: "#004d73",
          900: "#003f5e",
        },
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
