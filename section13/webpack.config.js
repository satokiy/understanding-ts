const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist",
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
      },
      {
        directory: __dirname,
        publicPath: "/",
      },
    ],
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
  ],
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      stream: require.resolve("stream-browserify"),
      https: require.resolve("https-browserify"),
      zlib: require.resolve("browserify-zlib"),
      //      stream: false,
      buffer: require.resolve("buffer/"),
    },
  },
};
