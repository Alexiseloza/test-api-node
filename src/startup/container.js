const {createContainer,asClass, asValue, asFunction} = require("awilix");

// config
const config = require('../config');
const app = require('.');

// services
const {HomeService,IdeaService, CommentService, UserService} = require('../services');

// controllers
const {HomeController, CommentController, UserController, IdeaController} = require('../controllers');

// Routes
const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

//Models MOngo DB ( mongoose!)
const {Comment,Idea,User}= require('../models');

// Repositories
const {CommentRepository, IdeaRepository, UserRepository} = require('../repositories');


const container = createContainer();

// container register
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
.register({
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton()

})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton()

})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
.register({
  User: asValue(User),
  Idea: asValue(Idea),
  Comment: asValue(Comment)
})
.register({
  UserRepository: asClass(UserRepository).singleton(),
  CommentRepository: asClass(CommentRepository).singleton(),
  IdeaRepository: asClass(IdeaRepository).singleton()
})



module.exports = container;