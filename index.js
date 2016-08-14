var loaderUtils = require('loader-utils')
var path = require('path')
var fs = require('fs')


module.exports = function (source) {
  if (this.cacheable) this.cacheable()
  var callback = this.async()

  var config = loaderUtils.getLoaderConfig(this, 'uikitLoader')

  // Only act on uikit less imports by default
  var testPattern = config.test || /node_modules\/uikit\/.+less$/
  if (!testPattern.test(this.resourcePath)) {
    return callback(null, source)
  }

  var themeName = config.theme
  if (!themeName) {
    return callback(new Error('No `theme` specified in the uikit-loader options! See: https://github.com/stipsan/uikit-loader#usage'))
  }

  var themePath = path.resolve(themeName)

  var themeExists = fs.existsSync(themePath)
  if (!themeExists) {
    return callback(new Error(`The path ${themePath} does not exist!`))
  }

  this.addDependency(themePath)

  fs.readFile(themePath, 'utf-8', function (err, theme) {
    if (err) return callback(err)
    callback(null, theme + '\n' + source)
  })
}
