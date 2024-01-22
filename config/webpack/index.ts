import * as Webpack from "webpack";
import buildDevServer from "./devServer";
import buildLoaders from "./loaders";
import buildPlugins from "./plugins";
import buildResolvers from "./resolvers";
import { BuildOptions } from "./types";

export enum EnvVariables {
  PORT,
  MODE,
}
export type IEnvVariables = Record<keyof typeof EnvVariables, any>;

export function buildWebpack(options: BuildOptions) {
  const config: Webpack.Configuration = {
    entry: options.paths.entry,
    mode: options.mode ?? "development",
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js", // generic bundle name
      clean: true, //on each build - clean cache files
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),
    devtool: options.isDev && "inline-source-map",
    devServer: buildDevServer(options),
  };
  return config;
}
