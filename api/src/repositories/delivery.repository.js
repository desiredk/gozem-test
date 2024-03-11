'use strict';

const MainRepository = require("./main.repository");
const {sendDataIfSuccess, loggerAndThrowError} = require("../utils/constant");
const packageRepository = require('./package.repository')

class DeliveryRepository extends MainRepository {
    constructor() {
        super(require("../models/delivery.model"), 'Delivery')
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll() {
        try {
            const result = await this.repository.find();

            console.log("-----------------------  result :::::: ", result.length)

            // Access full package details
            for (const delivery of result) {
                delivery.package = delivery.fullPackage;
                // console.log(" ------ ------ Delivery package details:", delivery.fullPackage);
            }

            return sendDataIfSuccess(result, 'Get All', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Get All', `${this.entityName}`);
        }
    }

    async getOne(entityId) {
        try {
            const result = await this.repository.findById(entityId);

            const pkg = result.package.toString();
            const rep = await packageRepository.getOne(pkg);

            result.package = rep.body;

            return sendDataIfSuccess(result, 'Get', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Get', `${this.entityName}`);
        }
    }
}

module.exports = new DeliveryRepository();
