module.exports = InitEventEmitters

// Initialize all of our apps event emitters in one place
function InitEventEmitters (AppState, EventSink, show) {
  var emitters = {
    place: require('../home-page/place-emitter/place-emitter.js')(AppState, EventSink, show)
  }

  AttachEmitters(AppState, emitters)
}

function AttachEmitters (AppState, emitters) {
  Object.keys(emitters).forEach(function (emitterName) {
    AppState.set('emitters.' + emitterName, emitters[emitterName])
  })
}
