var style = require('./destination-display_style.js')

module.exports = {
  render: RenderDestionationDisplay
}

function RenderDestionationDisplay (h, state, waypoint) {
  var destionationDisplayStyle = style[state.viewport] || style.base

  var renderedDestionationDisplay = h('div', {
    attributes: { filepath: __filename },
    style: destionationDisplayStyle
  }, [
    waypoint.formatted_address
  ])

  return renderedDestionationDisplay
}
