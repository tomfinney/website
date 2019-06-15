const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  target: "serverless"
});
