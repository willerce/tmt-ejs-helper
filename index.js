var helpers = require('./lib/helpers.js')
var lodash = require('lodash')

var defaults = {
    cdnUrl: 'http://wximg.gtimg.com/tmt',
    projectName: 'workflow-next',
    cssDir: 'css',
    jsDir: 'js'
}

var run

module.exports = run =  function (opts) {
    opts = lodash.extend(defaults, opts)
    return helpers(opts)
}


run()