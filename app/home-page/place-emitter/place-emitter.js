var EventEmitter = require('events').EventEmitter
var UpdatePlaceInput = require('./update-place-input/update-place-input.js')

var google = require('google')
var Places = require('google-places-browser/places')

module.exports = InitPlaceEmitter

function InitPlaceEmitter (AppState, EventSink, show) {
  var PlaceEmitter = new EventEmitter()
  PlaceEmitter.addListener('newInput', UpdatePlaceInput.bind(null, AppState))
  PlaceEmitter.addListener('selectPlace', SelectPlace.bind(null, AppState))

  return PlaceEmitter
}

function SelectPlace (AppState, placeId) {
  var place = Places(google)
  place.details({placeId: placeId}, function (err, place) {
    if (err) {
      // TODO: Handle error with finding place
      console.log(err)
    } else {
      // TODO: What should happen when you select a place?
      // place.geometry.location.lat()
      AppState.set('places.selectedPlace', place)
      var waypoints = AppState.get().places.waypoints || {}
      waypoints[place.place_id] = place
      AppState.set('places.waypoints', waypoints)
    }
  })
}
