var extend = require('xtend')

var PlaceInputStyle = {}
PlaceInputStyle.base = {
}

PlaceInputStyle.wrist = extend(PlaceInputStyle.base, {
})

PlaceInputStyle.palm = extend(PlaceInputStyle.wrist, {
})

PlaceInputStyle.lap = extend(PlaceInputStyle.palm, {
})

PlaceInputStyle.desk = extend(PlaceInputStyle.lap, {
})

PlaceInputStyle.wall = extend(PlaceInputStyle.desk, {
})

module.exports = PlaceInputStyle