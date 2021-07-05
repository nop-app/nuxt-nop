const { resolve } = require('path')

function nopModule (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.nop,
  }

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nop.js',
    options,
  })
}

module.exports = nopModule
module.exports.meta = require('../package.json')
