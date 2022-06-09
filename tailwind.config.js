module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#21325E",
          secondary: "#3E497A",
          accent: "#F1D00A",
          neutral: "#F0F0F0",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
