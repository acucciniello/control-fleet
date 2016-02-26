var style = require('./place-button_style.js')

module.exports = {
  render: RenderPlaceButton
}

function RenderPlaceButton (h, state, place) {
  var PlaceEmitter = state.emitters.place
  var placeButtonStyle = style[state.viewport] || style.base

  var renderedPlaceButton = h('button', {
    attributes: { filepath: __filename },
    onclick: function () {
      PlaceEmitter.emit('selectPlace', place.place_id)
    },
    style: placeButtonStyle
  }, place.description)

  return renderedPlaceButton
}
