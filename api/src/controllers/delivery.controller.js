'use strict';

const MainController = require("./main.controller");

class DeliveryController extends MainController {
    constructor() {
        super(require('../services/delivery.service'))
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
}

module.exports = new DeliveryController();
