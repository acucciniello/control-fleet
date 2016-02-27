var DestinationDisplay = require('./destination-display/destination-display.js')

module.exports = CreateDestinationDisplay

function CreateDestinationDisplay (h, state, waypoints) {
  waypoints = waypoints || []
  var renderedDisplayList = []
  Object.keys(waypoints).forEach(function (key) {
    renderedDisplayList.push(DestinationDisplay.render(h, state, waypoints[key]))
  })
  return renderedDisplayList
}
