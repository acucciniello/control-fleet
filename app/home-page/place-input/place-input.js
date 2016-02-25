var style = require('./place-input_style.js')

module.exports = {
  render: RenderPlaceInput
}

function RenderPlaceInput (h, state) {
  var placeInputStyle = style[state.viewport] || style.base

  var renderedPlaceInput = h('input', {
    attributes: { filepath: __filename },
    oninput: function (e) {
      state.emitters.place.emit('newInput', {e: e})
    },
    style: placeInputStyle
  }, [
  ])

  return renderedPlaceInput
}
