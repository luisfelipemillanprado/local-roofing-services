import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "node_modules/**", "scripts/**"],
  },
  /* must be last: turns off the rules that conflict with prettier */
  prettier,
];

export default eslintConfig;
