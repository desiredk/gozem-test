'use strict';
    
const MainMiddleware = require("./main.middleware");

class PackageMiddleware extends MainMiddleware {
    constructor() {
        super('Packages', require('../services/package.service'))

        this.verifyIfAttributesIsRequiredOrIsUnique = this.verifyIfAttributesIsRequiredOrIsUnique.bind(this);
        this.main = this.main.bind(this);
        this.filter = this.filter.bind(this);
        this.createAll = this.createAll.bind(this);
        this.updateAll = this.updateAll.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.mainOtherControl = this.mainOtherControl.bind(this);
        this.filterOtherControl = this.filterOtherControl.bind(this);
        this.createAllOtherControl = this.createAllOtherControl.bind(this);
        this.updateAllOtherControl = this.updateAllOtherControl.bind(this);
        this.createOtherControl = this.createOtherControl.bind(this);
        this.updateOtherControl = this.updateOtherControl.bind(this);
        this.deleteOtherControl = this.deleteOtherControl.bind(this);
    }
}

module.exports = new PackageMiddleware();
    