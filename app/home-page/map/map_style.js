var extend = require('xtend')

var MapStyle = {}
MapStyle.base = {
  height: '500px',
  width: '500px'
}

MapStyle.wrist = extend(MapStyle.base, {
})

MapStyle.palm = extend(MapStyle.wrist, {
})

MapStyle.lap = extend(MapStyle.palm, {
})

MapStyle.desk = extend(MapStyle.lap, {
})

MapStyle.wall = extend(MapStyle.desk, {
})

module.exports = MapStyle
