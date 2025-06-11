const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/app"),
    filename: "app.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: false,
    compress: true,
    devMiddleware: {
      writeToDisk: true,
    },
    port: 8081,
    // open: true,
    open: {
      target: ["http://localhost:8081"],
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /images/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "components/button.html",
    //   template: "./src/components/button.html",
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
