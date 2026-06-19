/** @type {import("prettier").Config} */
const config = {
  printWidth: 110,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;
