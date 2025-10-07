import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js + TypeScript recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Example: disable annoying rules
      "no-console": "warn", // show warning instead of error
      "react/prop-types": "off", // TS users don’t need prop-types
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@next/next/no-img-element": "off",
      // Add other rules as needed
    },
  },
];

export default eslintConfig;
