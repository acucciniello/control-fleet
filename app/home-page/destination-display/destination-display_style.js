var extend = require('xtend')

var DestionationDisplayStyle = {}
DestionationDisplayStyle.base = {
}

DestionationDisplayStyle.wrist = extend(DestionationDisplayStyle.base, {
})

DestionationDisplayStyle.palm = extend(DestionationDisplayStyle.wrist, {
})

DestionationDisplayStyle.lap = extend(DestionationDisplayStyle.palm, {
})

DestionationDisplayStyle.desk = extend(DestionationDisplayStyle.lap, {
})

DestionationDisplayStyle.wall = extend(DestionationDisplayStyle.desk, {
})

module.exports = DestionationDisplayStyle