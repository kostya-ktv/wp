export default function buildBabelLoader() {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      // [options] in babel.config.json
    },
  };
}
