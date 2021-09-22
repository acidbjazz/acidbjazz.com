/** @type {import('next').NextConfig} */

const path = require(`path`);

module.exports = {
  reactStrictMode: true,
  //begin loader for pdf files
  output: { path: path.resolve(__dirname, "static") },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[name][ext]",
      },
    });
    return config;
  },
  //end loader for pdf files
};
