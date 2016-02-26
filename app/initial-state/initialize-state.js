var extend = require('xtend')
var SS = require('solid-state')
var initGeolocation = require('./init-geolocation/init-geolocation.js')

module.exports = InitializeState

var defaultState = {
  path: require('global/document').location.pathname,
  emitters: {}
}

function InitializeState (initialState) {
  initialState = extend(defaultState, initialState)
  var AppState = new SS(initialState)
  initGeolocation.call(AppState)

  return AppState
}
