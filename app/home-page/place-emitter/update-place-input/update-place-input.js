var Autocomplete = require('google-places-browser/autocomplete')

module.exports = UpdatePlaceInput

/*
 * @param inputObj
 * {e: theInputEvent}
 */
var searchPlaceTimer
function UpdatePlaceInput (AppState, inputObj) {
  var newInput = inputObj.e.target.value
  AppState.set('places.currentPlaceInput', newInput)

  clearTimeout(searchPlaceTimer)
  searchPlaceTimer = setTimeout(searchPlace.bind(null, newInput), 500)

  function searchPlace (input) {
    // TODO: We shouldn't have any knowledge of the window here
    // should also work if google is undefined (i.e. script didn't load)
    Autocomplete(window.google).place({input: input}, function (err, results) {
      if (err) {
        // TODO: Proper error handling
        console.log(err)
      } else {
        AppState.set('places.suggestedPlaces', results)
      }
    })
  }
}
