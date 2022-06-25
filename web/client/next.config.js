/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./src/utils/withFrameworkConfig");

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
