var style = require('./home-page_style.js')

var PlaceInput = require('./place-input/place-input.js')

module.exports = {
  render: RenderHomePage
}

function RenderHomePage (h, state) {
  var homePageStyle = style[state.viewport] || style.base

  var renderedHomePage = h('div', {
    attributes: { filepath: __filename },
    style: homePageStyle
  }, [
    'islang gang 2018.',
    // TODO: this input doesn't belong here. just thrown in randomly for prototype
    PlaceInput.render(h, state)
  ])

  return renderedHomePage
}
