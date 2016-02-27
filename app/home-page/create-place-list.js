var PlaceButton = require('./place-button/place-button.js')

module.exports = CreatePlaceList

function CreatePlaceList (h, state, places) {
  places = places || {}
  var renderedPlaceList = []
  Object.keys(places).forEach(function (key) {
    var placeButton = PlaceButton.render(h, state, places[key])
    renderedPlaceList.push(placeButton)
  })
  return renderedPlaceList
}
