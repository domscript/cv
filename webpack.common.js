const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        type: "asset/resource",
      },
    ],
  },
  stats: {
    children: true,
  },
};
