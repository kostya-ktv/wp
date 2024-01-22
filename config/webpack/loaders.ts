import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export default function buildLoaders({
  isDev,
}: BuildOptions): ModuleOptions["rules"] {
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash: base64:8]",
      },
    },
  };
  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      /*     //ORDER IS IMPORTANT !
              styles from JS strings
              default loader without MiniCssExtractPlugin
                  -> "style-loader"
            
              MiniCssExtractPlugin extract styles to separate css file
             */
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      //css to js CommonJS
      cssLoaderWithModules,
      //sass to css
      "sass-loader",
    ],
  };
  const SVGRLoader = {
    test: /\.svg$/i,

    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          /* avoid type checking on build
            suggestion: use webpack forkPlugin ->
            fork-ts-checker-webpack-plugin
          */
          transpileOnly: true,
        },
      },
    ],
  };

  return [scssLoader, tsLoader, assetsLoader, SVGRLoader];
}
