/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-preset-env': {
      browsers: [
        '> 0.2% and not dead',
      ],
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': false,
      },
    },
  },
};

module.exports = config;
