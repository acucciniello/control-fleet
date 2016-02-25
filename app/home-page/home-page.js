var style = require('./home-page_style.js')

module.exports = {
  render: RenderHomePage
}

function RenderHomePage (h, state) {
  var homePageStyle = style[state.viewport] || style.base

  var renderedHomePage = h('div', {
    attributes: { filepath: __filename },
    style: homePageStyle
  }, [
    'islang gang 2018.'
  ])

  return renderedHomePage
}
