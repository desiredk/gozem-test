'use strict';

const MainController = require("./main.controller");

class PackageController extends MainController {
    constructor() {
        super(require('../services/package.service'))
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
}

module.exports = new PackageController();
