'use strict';

const MainService = require("./main.service");

class PackageService extends MainService {
    constructor() {
        super(require('../repositories/package.repository'))
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
}

module.exports = new PackageService();
