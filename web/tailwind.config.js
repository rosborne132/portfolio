module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: ["night"],
  }
};
