var document = require('global/document')

module.exports = InjectScripts

function InjectScripts () {
  // Inject google maps script
  var googleMapsScript = document.createElement('script')
  googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?libraries=places'
  document.body.appendChild(googleMapsScript)
}
