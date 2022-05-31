const path = require('path');
module.exports = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.ttf$/,
      use: ['url-loader'],
      include: require('path').resolve(
        __dirname,
        '../node_modules/react-native-vector-icons',
      ),
    });
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};
