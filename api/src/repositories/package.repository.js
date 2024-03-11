'use strict';

const MainRepository = require("./main.repository");

class PackageRepository extends MainRepository {
    constructor() {
        super(require("../models/package.model"), 'Package')
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
}

module.exports = new PackageRepository();
