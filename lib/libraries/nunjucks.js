const Nunjucks = require('nunjucks')

module.exports = (() => {
  const parser = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(
      [
        'app/_components',
        'app/_layouts'
      ], {
        noCache: true,
        watch: process.env.NODE_ENV === 'development'
      }
    ), {
      lstripBlocks: true,
      trimBlocks: true
    }
  )

  // makes a template variable 'env' available, defaults to local if environment variable not found
  parser.addGlobal('env', process.env.NODE_ENV ? process.env.NODE_ENV : 'local')

  return parser
})()
