var EventEmitter = require('events').EventEmitter
var UpdatePlaceInput = require('./update-place-input/update-place-input.js')

var google = require('google')
var Places = require('google-places-browser/places')(google)

module.exports = InitPlaceEmitter

function InitPlaceEmitter (AppState, EventSink, show) {
  var PlaceEmitter = new EventEmitter()
  PlaceEmitter.addListener('newInput', UpdatePlaceInput.bind(null, AppState))
  PlaceEmitter.addListener('selectPlace', SelectPlace.bind(null, AppState))

  return PlaceEmitter
}

function SelectPlace (AppState, placeId) {
  console.log(Places)
  // Load the place from google and save in state
  // state.places.selectedPlace
}
