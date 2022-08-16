const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "typescript/src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.wasm$/,
        type: "webassembly/experimental"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".wasm"]
    // alias: { util: false } // webpack 5
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist
  },
  plugins: [new CopyPlugin([path.resolve(__dirname, "static")])]
  // experiments: { asyncWebAssembly: true, importAsync: true } // webpack 5
};
