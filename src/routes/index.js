const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const {ErrorMiddeware, notFoundMiddleware} = require('../middlewares')

module.exports = function({HomeRoutes}){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet()).
    use(compression());


    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);

    // errors Middlewares!
    router.use(ErrorMiddeware);
    router.use(notFoundMiddleware);

    return router;
}