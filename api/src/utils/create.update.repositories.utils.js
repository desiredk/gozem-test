const { dbContent } = require("../config/db.content.config");
const { Op } = require("sequelize");
const {existsInKeys, getNodeJsFileNameR} = require("./constant");

class CreateUpdateRepositoriesUtils {

    constructor() {
        this.create = this.create.bind(this);
    }

    main() {

    }

    async create(entityName, entity, myCreate) {
        const rep = { isCreate: false, result: {} };

        // attributeWithSimpleJoin
        let resultT = await this.getAttributeWithSimpleJoin(entityName, entity);
        rep.result = { ...entity, ...resultT };

        // attributeWithMultipleJoin
        const keys = Object.keys(dbContent[entityName].attributeWithMultipleJoin);
        if (keys.length > 0 && existsInKeys(keys, Object.keys(entity))) {
            rep.result = (await myCreate(rep.result)).toJSON();

            resultT = await this.attributeWithMultipleJoin(entityName, entity, rep.result.id);
            rep.result = { ...rep.result, ...resultT };

            rep.isCreate = true;
        }

        return rep
    }

    async getAttributeWithSimpleJoin(entityName, entity) {
        const result = {};

        const keys = Object.keys(dbContent[entityName].attributeWithSimpleJoin);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const attributeWithSimpleJoin = dbContent[entityName].attributeWithSimpleJoin[key]

            /*console.log("dbContent[entityName].attributeWithSimpleJoin ::: ", dbContent[entityName].attributeWithSimpleJoin)
            console.log("key ::: ", key)
            console.log("entityName ::: ", entityName)*/

            if (key in entity) {
                let rep = {};
                if ('id' in entity[key]) {
                    rep = await require(`../repositories/${getNodeJsFileNameR(attributeWithSimpleJoin.entityName)}.repository`).update(entity[key]);
                } else {
                    rep = await require(`../repositories/${getNodeJsFileNameR(attributeWithSimpleJoin.entityName)}.repository`).create(entity[key]);
                }

                if (rep.success) {
                    result[attributeWithSimpleJoin.second] = rep.body.id
                }
            }
        }

        return result;
    }

    async attributeWithMultipleJoin(entityName, entity, attributeId, isCreate = true) {
        const result = {};

        const keys = Object.keys(dbContent[entityName].attributeWithMultipleJoin);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const attributeWithMultipleJoin = dbContent[entityName].attributeWithMultipleJoin[key]

            if (key in entity) {
                const createAllValue = {}
                createAllValue[attributeWithMultipleJoin.attributeName] = attributeId
                const saveData = entity[key].map(item => { return {...item, ...createAllValue } })

                let rep = '';
                if (isCreate) {
                    rep = await require(`../repositories/${getNodeJsFileNameR(attributeWithMultipleJoin.entityName)}.repository`).createAll(saveData);
                } else {
                    const updateSaveData = saveData.filter(data => 'id' in data)
                    const createSaveData = saveData.filter(data => !('id' in data))

                    rep = await require(`../repositories/${getNodeJsFileNameR(attributeWithMultipleJoin.entityName)}.repository`).updateAll(updateSaveData);
                    const rep2 = await require(`../repositories/${getNodeJsFileNameR(attributeWithMultipleJoin.entityName)}.repository`).createAll(createSaveData);
                    rep.body += rep2.body
                }

                if (rep.success) {
                    result[key] = rep.body
                }
            }
        }

        return result;
    }

    // Update
    async update(entityName, entity, myUpdate) {
        const rep = { result: {} };

        // attributeWithSimpleJoin
        let resultT = await this.getAttributeWithSimpleJoin(entityName, entity);
        rep.result = { ...entity, ...resultT };

        await myUpdate(rep.result)
        rep.result = { id: entity.id };

        // attributeWithMultipleJoin
        const keys = Object.keys(dbContent[entityName].attributeWithMultipleJoin);
        if (keys.length > 0 && existsInKeys(keys, Object.keys(entity))) {

            resultT = await this.attributeWithMultipleJoin(entityName, entity, rep.result.id, false);
            rep.result = { ...rep.result, ...resultT };
        }

        return rep.result
    }
}

module.exports = new CreateUpdateRepositoriesUtils();
