import { clearTestHTML } from "./plugins/clearTestHTML.plugin";

export function buildBabelLoader(isProd: boolean) {
  const plugins = [];
  if (isProd) {
    plugins.push([
      clearTestHTML,
      {
        props: ["data-testid"],
      },
    ]);
  }
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      // [options] in babel.config.json
      options: {
        plugins,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "defaults",
            },
          ],
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
      },
    },
  };
}
