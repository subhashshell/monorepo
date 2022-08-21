const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const deps = require("./package.json").dependencies;

const port = 3030;

module.exports = (env, argv) => {
  console.log({ mode: argv.mode });
  return {
    entry: "./src/index.ts",
    mode: argv.mode,
    devServer: {
      port,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ APP_PORT: port }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
