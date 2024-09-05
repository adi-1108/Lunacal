/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#191B1F",
        lightGrey: "#373E44",
        cardGrey: "#363C43",
        tabGrey: "#28292F",
      },
      borderRadius: {
        custom: "18.89px",
        "custom-sm": "16px",
        "custom-md": "23px",
      },

      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
        custom: "10px 25px 46px 8px rgba(26, 32, 44, 1)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
