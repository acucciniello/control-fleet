var style = require('./map_style.js')
var google = require('google')
var cuid = require('cuid')
var mapId = cuid()

module.exports = {
  render: RenderMap
}

function MapHook (waypoints) {
  this.waypoints = waypoints || {}
}

// TODO: Only load the map once instead of anytime state changes
// TODO: This is a big mess. Clean up
MapHook.prototype.hook = function (node, propertyName, previousValue) {
  var maps = google.maps
  var waypoints = this.waypoints
  if (maps) {
    var bounds = new maps.LatLngBounds()
    var map = new maps.Map(document.getElementById(mapId), {
      center: {lat: 40.278433, lng: -74.779445},
      zoom: 19
    })
    Object.keys(waypoints).forEach(function (waypointKey) {
      var waypoint = waypoints[waypointKey]
      var geoLocation = waypoint.geometry.location
      var marker = new maps.Marker({
        position: {lat: geoLocation.lat(), lng: geoLocation.lng()}
      })
      marker.setMap(map)
      bounds.extend(marker.position)
    })
    map.fitBounds(bounds)
  }
}

function RenderMap (h, state) {
  var waypoints = state.places && state.places.waypoints
  var mapStyle = style[state.viewport] || style.base

  var renderedMap = h('div', {
    attributes: { filepath: __filename },
    id: mapId,
    mapHook: new MapHook(waypoints),
    style: mapStyle
  }, [
  ])

  return renderedMap
}
