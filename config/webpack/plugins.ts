import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import * as Webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export default function buildPlugins({
  isDev,
  isProd,
  paths,
  withAnalyzer,
}: BuildOptions): Webpack.Configuration["plugins"] {
  const plugins: Webpack.Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    //slowly plugin
    plugins.push(new Webpack.ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }
  if (withAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
}
