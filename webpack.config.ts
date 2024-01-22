import path from "path";
import { IEnvVariables, buildWebpack } from "./config/webpack";
import { BuildOptions } from "./config/webpack/types";

export default function (env: IEnvVariables) {
  const options: BuildOptions = {
    mode: env.MODE,
    port: env.PORT,
    isDev: env.MODE === "development",
    isProd: env.MODE === "production",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
    },
  };
  return buildWebpack(options);
}