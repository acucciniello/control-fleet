var makeResponsive = require('./responsive/make-responsive.js')
var initializeState = require('./initial-state/initialize-state.js')
var initSinglePageApp = require('./single-page/init-single-page-app.js')
var initEventEmitters = require('./event-emitters/init-event-emitters.js')
var initRenderLoop = require('./render/init-render-loop.js')
var EventSink = require('./event-sink/event-sink.js')
var injectScripts = require('./inject-scripts/inject-scripts.js')

module.exports = InitApp

function InitApp (initialState, onStateChange) {
  var AppState = initializeState(initialState)
  var loop = initRenderLoop(AppState.get())
  var appElement = loop.target
  AppState.addListener(loop.update)

  makeResponsive(function (_, viewport) {
    AppState.set('viewport', viewport)
  })
  var show = initSinglePageApp(function (_, path) {
    AppState.set('path', path)
    loop.update(AppState.get())
  })
  initEventEmitters(AppState, EventSink, show)

  require('catch-links')(appElement, show)
  injectScripts()

  return {
    element: appElement
  }
}
