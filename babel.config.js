module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@locales': './src/assets/locales',
        },
      },
    ],
  ],
};
