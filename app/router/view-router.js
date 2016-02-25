var Router = require('routes')
var viewRouter = new Router()

var HomePage = require('../home-page/home-page.js')

module.exports = viewRouter

viewRouter.addRoute('/', HomePage.render)
