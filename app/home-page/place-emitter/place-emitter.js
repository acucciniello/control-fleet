var EventEmitter = require('events').EventEmitter

module.exports = InitPlaceEmitter

function InitPlaceEmitter (AppState, EventSink, show) {
  var PlaceEmitter = new EventEmitter()
  PlaceEmitter.addListener('newInput', UpdatePlaceInput.bind(null, AppState))

  return PlaceEmitter
}

/*
 * @param inputObj
 * {e: theInputEvent}
 */
function UpdatePlaceInput (AppState, inputObj) {
  var newInput = inputObj.e.target.value
  AppState.set('places.currentPlaceInput', newInput)
}
