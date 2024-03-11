'use strict';

const deliveryController = require('../controllers/delivery.controller');
// const deliveryMiddleware = require('../middlewares/delivery.middleware');
const { passToNext } = require("../utils/constant");

module.exports = [
    {
        method: 'get',
        path: '/',
        middleware: passToNext,
        function: deliveryController.getAll,
    },
    {
        method: 'get',
        path: '/:id',
        middleware: passToNext,
        function: deliveryController.getOne,
    },
    {
        method: 'post',
        path: '/',
        middleware: passToNext,
        function: deliveryController.create,
    },
    {
        method: 'put',
        path: '/:id',
        middleware: passToNext,
        function: deliveryController.update,
    },
    {
        method: 'delete',
        path: '/:id',
        middleware: passToNext,
        function: deliveryController.delete,
    },
];
