module.exports = class MainService {
    constructor(entityRepository) {
        this.entityRepository = entityRepository
    }

    async getAll() {
        return await this.entityRepository.getAll();
    }

    async getOne(entityId) {
        return await this.entityRepository.getOne(entityId);
    }

    async create(entity) {
        return await this.entityRepository.create(entity);
    }

    async update(entity, entityId) {
        return await this.entityRepository.update(entity, entityId);
    }

    async delete(entityId) {
        return await this.entityRepository.delete(entityId);
    }
};
