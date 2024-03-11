'use strict';

const packageController = require('../controllers/package.controller');
// const packageMiddleware = require('../middlewares/package.middleware');
const {passToNext} = require("../utils/constant");

module.exports = [
    {
        method: 'get',
        path: '/',
        middleware: passToNext,
        function: packageController.getAll,
    },
    {
        method: 'get',
        path: '/:id',
        middleware: passToNext,
        function: packageController.getOne,
    },
    {
        method: 'post',
        path: '/',
        middleware: passToNext,
        function: packageController.create,
    },
    {
        method: 'put',
        path: '/:id',
        middleware: passToNext,
        function: packageController.update,
    },
    {
        method: 'delete',
        path: '/:id',
        middleware: passToNext,
        function: packageController.delete,
    },
];
