var extend = require('xtend')

var PlaceButtonStyle = {}
PlaceButtonStyle.base = {
}

PlaceButtonStyle.wrist = extend(PlaceButtonStyle.base, {
})

PlaceButtonStyle.palm = extend(PlaceButtonStyle.wrist, {
})

PlaceButtonStyle.lap = extend(PlaceButtonStyle.palm, {
})

PlaceButtonStyle.desk = extend(PlaceButtonStyle.lap, {
})

PlaceButtonStyle.wall = extend(PlaceButtonStyle.desk, {
})

module.exports = PlaceButtonStyle