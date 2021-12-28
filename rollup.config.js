const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [
  {
    input: 'app/_assets/javascripts/application.js',
    output: {
      file: 'public/assets/javascripts/application.js',
      format: 'iife'
    },
    plugins: [nodeResolve(), commonjs()]
  }
]
