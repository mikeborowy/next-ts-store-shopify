const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");
const prettier = require("prettier");

//shopify_local check .env.local
const ALLOWED_FW = ["shopify", "big-commerce", "shopify_local"];
const FALLBACK_FW = "shopify";

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework.name;

  if (!framework) {
    throw new Error(
      "The api framework is missing, please add a valid provider!"
    );
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found, please use one of ${ALLOWED_LIB.join(
        ", "
      )}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW;
  }

  const frameworkNextConfig = require(path.join(
    "../framework/",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`src/framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [
    `src/framework/${framework}/*`,
  ];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  );

  return config;
}

module.exports = { withFrameworkConfig };
