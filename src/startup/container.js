const {createContainer,asClass, asValue, asFunction}= require('awilix');

// services
const {HomeService} = require('../services')

// controllers
const {HomeController} = require('../controllers')

// Routes
const {HomeRoutes} = require('../routes/index.routes')

const container = createContainer;

// container register
container
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})



module.exports = container;