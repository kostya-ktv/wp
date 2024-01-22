import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import * as Webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsChecker from "fork-ts-checker-webpack-plugin";
import { BuildOptions } from "./types";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

export default function buildPlugins({
  isDev,
  isProd,
  paths,
  withAnalyzer,
  platform,
}: BuildOptions): Webpack.Configuration["plugins"] {
  const plugins: Webpack.Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),

    new Webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isDev) {
    plugins.push(
      new Webpack.ProgressPlugin(),
      new ForkTsChecker(),
      new ReactRefreshPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.locales,
            to: path.resolve(paths.output, "locales"),
          },
        ],
      })
    );
  }
  if (withAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
}
