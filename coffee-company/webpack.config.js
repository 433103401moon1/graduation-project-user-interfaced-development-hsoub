const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const loader = require("sass-loader");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

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
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: "asset/resource",
        exclude: /images/,
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact-us.html",
      template: "./src/contact-us.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about-company.html",
      template: "./src/about-company.html",
    }),
    new HtmlWebpackPlugin({
      filename: "distributors.html",
      template: "./src/distributors.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product-1.html",
      template: "./src/product-1.html",
    }),
        new HtmlWebpackPlugin({
      filename: "product-2.html",
      template: "./src/product-2.html",
    }),
        new HtmlWebpackPlugin({
      filename: "product-3.html",
      template: "./src/product-3.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new HtmlWebpackPlugin({
      filename: "components/header.html",
      template: "./src/components/header.html",
    }),
    new HtmlWebpackPlugin({
      filename: "components/footer.html",
      template: "./src/components/footer.html",
    }),
    new HtmlWebpackPlugin({
      filename: "components/contact.html",
      template: "./src/components/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "components/about-company.html",
      template: "./src/components/about-company.html",
    }),
    new HtmlWebpackPlugin({
      filename: "components/distributors.html",
      template: "./src/components/distributors.html",
    }),
    new HtmlWebpackPlugin({
      filename: "components/product-1.html",
      template: "./src/components/product-1.html",
    }),
        new HtmlWebpackPlugin({
      filename: "components/product-2.html",
      template: "./src/components/product-2.html",
    }),
        new HtmlWebpackPlugin({
      filename: "components/product-3.html",
      template: "./src/components/product-3.html",
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/header.html"),
        location: "c-header",
        template_filename: [
          "index.html",
          "contact-us.html",
          "about-company.html",
          "distributors.html",
          "product-1.html",
          "product-2.html",
          "product-3.html",
        ],
      },
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/footer.html"),
        location: "c-footer",
        template_filename: [
          "index.html",
          "contact-us.html",
          "about-company.html",
          "distributors.html",
          "product-1.html",
          "product-2.html",
          "product-3.html",
        ],
      },
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/contact.html"),
        location: "c-contact",
        template_filename: ["contact-us.html"],
      },
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/about-company.html"),
        location: "c-about-company",
        template_filename: ["about-company.html"],
      },
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/distributors.html"),
        location: "c-distributors",
        template_filename: ["distributors.html"],
      },
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/product-1.html"),
        location: "c-product-1",
        template_filename: ["product-1.html"],
      },
    ]),
        new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/product-2.html"),
        location: "c-product-2",
        template_filename: ["product-2.html"],
      },
    ]),
        new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/components/product-3.html"),
        location: "c-product-3",
        template_filename: ["product-3.html"],
      },
    ]),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
