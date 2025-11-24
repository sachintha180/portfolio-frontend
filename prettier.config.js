/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  arrowParens: "always",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
};
