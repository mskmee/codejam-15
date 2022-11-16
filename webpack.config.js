const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ghpages = require('gh-pages');

let mode;
mode = process.env.NODE_ENV === "production" ? "production" : "development";

console.log("mode " + mode);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: mode,
    entry: path.resolve(__dirname, '/index.js'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '/index.html',
            favicon: "./fav.ico"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),

],
    resolve: {
        extensions: ['.js', '.json', '.xml', '.css'],
    alias: {
        "@models": path.resolve(__dirname, "src/models"),
        "@": path.resolve(__dirname, "src"),
    }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|mp3|wav)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ]
    }
}