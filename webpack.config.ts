import path from "path";
import { buildWebpack } from "./config/webpack";
import { BuildOptions } from "./config/webpack/types";
import { IEnvVariablesKeys } from "config/env/types";

export default function (env: IEnvVariablesKeys) {
  const options: BuildOptions = {
    mode: env.MODE,
    port: env.PORT,
    isDev: env.MODE === "development",
    isProd: env.MODE === "production",
    withAnalyzer: env.ANALYZER === "on",
    platform: env.PLATFORM ?? "mobile",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
    },
  };
  return buildWebpack(options);
}
