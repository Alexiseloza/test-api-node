const {createContainer,asClass, asValue, asFunction} = require("awilix");

// config
const config = require('../config');
const app = require('.');

// services
const {HomeService} = require('../services');

// controllers
const {HomeController} = require('../controllers');

// Routes
const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

//Models MOngo DB ( mongoose!)
const {Comment,Idea,User}= require('../models'),

const container = createContainer();

// container register
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
.register({
  User: asValue(User),
  Idea: asValue(Idea),
  Comment: asValue(Comment)
})



module.exports = container;