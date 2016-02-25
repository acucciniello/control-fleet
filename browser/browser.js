var mountLocation = document.getElementById('cf-app')
if (!mountLocation) {
  mountLocation = document.createElement('div')
  mountLocation.id = 'cf-app'
  document.body.appendChild(mountLocation)
}

var cfAppElement = require('../app/cf-web-app.js')().element
mountLocation.insertBefore(cfAppElement, mountLocation.children[0])
