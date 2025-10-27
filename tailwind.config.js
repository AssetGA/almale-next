/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      "gray-header": "#edf1f5",
      black: "#000000",
      purple: "#7e5bef",
      red: "#DC143C",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#143A23",
      "green-light": "#205D38",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-white": "#f0f2f5",
      azure: "#F8F8FF",
    },
    fontFamily: {
      geist: [
        "geistMonoVF",
        "geistVF",
        "Montserrat",
        "Montserrat-bold",
        "Montserrat-Black",
      ],
    },
    extend: {
      perspective: {
        1000: "1000px",
      },
      animation: {
        "gem-glow": "gem-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "gem-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(34, 197, 94, 0.6)",
          },
          "25%": {
            boxShadow:
              "0 0 15px rgba(34, 197, 94, 0.8), 0 0 25px rgba(34, 197, 94, 0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(245, 158, 11, 0.7), 0 0 20px rgba(34, 197, 94, 0.6)",
          },
          "75%": {
            boxShadow: "0 0 15px rgba(34, 197, 94, 0.9)",
          },
        },
      },
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      // rotate: {
      //   17: "17deg",
      // },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
      });
    },
  ],
};
