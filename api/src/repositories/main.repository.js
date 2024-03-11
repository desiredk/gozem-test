'use strict';

const Package = require("../models/package.model");
const { sendDataIfSuccess, loggerAndThrowError } = require("../utils/constant");

module.exports = class MainRepository {
    constructor(repository, entityName) {
        this.repository = repository;
        this.entityName = entityName;
    }

    async getAll() {
        try {
            const result = await this.repository.find();

            console.log("result :::::: ", result.length)

            return sendDataIfSuccess(result, 'Get All', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Get All', `${this.entityName}`);
        }
    }

    async getOne(entityId) {
        try {
            const result = await this.repository.findById(entityId);

            return sendDataIfSuccess(result, 'Get', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Get', `${this.entityName}`);
        }
    }

    async create(entity) {
        try {
            const result = await this.repository.create(entity);

            return sendDataIfSuccess(result, 'Create', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Create', `${this.entityName}`);
        }
    }

    async update(entity, entityId) {
        try {
            const result = await this.repository.findByIdAndUpdate(
                { _id: entityId },
                { $set: entity },
                { new: true }
            );

            return sendDataIfSuccess(result, 'Update', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Update', `${this.entityName}`);
        }
    }

    async delete(entityId) {
        try {
            const result = await this.repository.findByIdAndUpdate(
                { _id: entityId },
                { $set: { isNotDelete: false } },
                { new: true }
            );

            return sendDataIfSuccess(result, 'Delete', `${this.entityName}`);
        } catch(err) {
            loggerAndThrowError(err, 'Delete', `${this.entityName}`);
        }
    }
}
