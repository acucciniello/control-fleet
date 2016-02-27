var getGeolocation = require('./get-geolocation.js')

module.exports = InitGelocation

function InitGelocation () {
  var AppState = this
  getGeolocation(function (err, position) {
    if (err) {
      // TODO: Handle what happens if geolocation didn't work
      console.log('handle error')
      return
    }
    AppState.set('user.position', position)
  })
}
