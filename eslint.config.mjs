import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "node_modules/**", "scripts/**"],
  },
  // Must be last: turns off ESLint rules that conflict with Prettier.
  prettier,
];

export default eslintConfig;
