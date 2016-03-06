var style = require('./home-page_style.js')

var PlaceInput = require('./place-input/place-input.js')
var GoogleMap = require('./map/map.js')
var createPlaceList = require('./create-place-list.js')
var createDestinationList = require('./create-destination-list.js')

module.exports = {
  render: RenderHomePage
}

function RenderHomePage (h, state) {
  var homePageStyle = style[state.viewport] || style.base

  var suggestedPlaces = state.places && state.places.suggestedPlaces
  var renderedPlaceList = createPlaceList(h, state, suggestedPlaces)
  var waypoints = state.places && state.places.waypoints
  var renderedDestinationList = createDestinationList(h, state, waypoints)

  var renderedHomePage = h('div', {
    attributes: { filepath: __filename },
    style: homePageStyle
  }, [
    'islang gang 2018.',
    // TODO: this input doesn't belong here. just thrown in randomly for prototype
    PlaceInput.render(h, state),
    renderedPlaceList,
    GoogleMap.render(h, state),
    h('button', {
      style: {
        width: '200px',
        height: '100px',
        fontSize: '1em',
        backgroundColor: 'red',
        color: 'white'
      }
    }, 'Send Fastest Route to Driver'),
    h('button', {
      style: {
        width: '200px',
        height: '100px',
        fontSize: '1em',
        backgroundColor: 'green',
        color: 'white'
      }
    }, 'Send Shortest Route to Driver'),

    renderedDestinationList
  ])

  return renderedHomePage
}
