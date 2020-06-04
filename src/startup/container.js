const {createContainer,asClass, asValue, asFunction}= require('awilix');

// services
const {HomeService} = require('../services')

const container = createContainer;

// container register
container.register({
    HomeService: asClass(HomeService).singleton()
})

module.exports = container;