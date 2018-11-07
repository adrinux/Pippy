
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    require('autoprefixer'),
    require('postcss-reporter')
  ]
}
