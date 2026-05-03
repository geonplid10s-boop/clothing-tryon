const createExpoWebpackConfig = require('@expo/webpack-config');

module.exports = function (env, argv) {
  const config = createExpoWebpackConfig(env, argv);
  return config;
};
