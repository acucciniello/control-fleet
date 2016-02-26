var document = require('global/document')
var google = require('google')

module.exports = InjectScripts

function InjectScripts (cb) {
  // Inject google maps script
  var googleMapsScript = document.createElement('script')
  googleMapsScript.onload = function () {
    delete google.temporary
    cb()
  }
  googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?libraries=places'
  document.body.appendChild(googleMapsScript)
}
