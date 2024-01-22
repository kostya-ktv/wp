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

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
}
