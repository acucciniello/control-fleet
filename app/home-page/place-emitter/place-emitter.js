var EventEmitter = require('events').EventEmitter
var UpdatePlaceInput = require('./update-place-input/update-place-input.js')

module.exports = InitPlaceEmitter

function InitPlaceEmitter (AppState, EventSink, show) {
  var PlaceEmitter = new EventEmitter()
  PlaceEmitter.addListener('newInput', UpdatePlaceInput.bind(null, AppState))

  return PlaceEmitter
}

