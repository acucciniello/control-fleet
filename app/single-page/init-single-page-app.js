var url = require('url')
var singlePage = require('single-page')
var location = require('global/document').location

module.exports = InitSinglePageApp

function InitSinglePageApp (cb) {
  var show = singlePage(function (href) {
    var u = url.parse(url.resolve(location.href, href))
    cb(null, u.pathname)
  })

  return show
}
