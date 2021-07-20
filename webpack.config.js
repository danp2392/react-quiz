console.log(__dirname);

const path = require("path");
console.log(path.join(__dirname, "public"));

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: "css-loader",
        test: /\.css$/,
      },
    ],
  },
};
