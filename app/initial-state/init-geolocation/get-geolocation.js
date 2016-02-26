var navigator = require('global/window').navigator
var geolocation = navigator && navigator.geolocation

module.exports = GetGelocation

function GetGelocation (cb) {
  if (geolocation.getCurrentPosition) {
    geolocation.getCurrentPosition(function (position) {
      cb(null, position)
    }, function (err) {
      cb(err)
    })
  }
}
