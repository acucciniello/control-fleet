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

    // Create waypoints
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

    // Draw route
    if (Object.keys(waypoints).length > 2) {
      var directionsDisplay = new google.maps.DirectionsRenderer()
      var southOrange = {lat: 40.7488889, lng: -74.2616667}
      var directionWaypoints = []
      Object.keys(waypoints).forEach(function (waypointKey) {
        var geoLocation = waypoints[waypointKey].geometry.location
        directionWaypoints.push({
          location: {lat: geoLocation.lat(), lng: geoLocation.lng()},
          stopover: false
        })
      })
      var directionRequest = {
        origin: southOrange,
        destination: southOrange,
        waypoints: directionWaypoints,
        travelMode: maps.TravelMode.DRIVING
      }
      var directionsService = new google.maps.DirectionsService()
      directionsDisplay.setMap(map)
      directionsService.route(directionRequest, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result)
        }
      })
    }
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
