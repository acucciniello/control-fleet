var style = require('./map_style.js')
var google = require('google')
var cuid = require('cuid')
var mapId = cuid()

module.exports = {
  render: RenderMap
}

function MapHook () {
}

MapHook.prototype.hook = function (node, propertyName, previousValue) {
  if (google.maps) {
    var map = new google.maps.Map(document.getElementById(mapId), {
      center: {lat: 40.278433, lng: -74.779445},
      zoom: 19
    })
    // Standard requires var to be used
    // TODO: Figure out a better way to do this
    map.unusedvar
  }
}

function RenderMap (h, state) {
  var mapStyle = style[state.viewport] || style.base

  var renderedMap = h('div', {
    attributes: { filepath: __filename },
    id: mapId,
    mapHook: new MapHook(),
    style: mapStyle
  }, [
  ])

  return renderedMap
}
