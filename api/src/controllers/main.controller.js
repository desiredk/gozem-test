module.exports = class MainController {
    constructor(entityService) {
        this.entityService = entityService
    }

    async getAll(req, res, next) {
        try {
            const result = await this.entityService.getAll();
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getOne(req, res, next) {
        try {
            const result = await this.entityService.getOne(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async create(req, res, next) {
        try {
            const result = await this.entityService.create(req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res, next) {
        try {
            const result = await this.entityService.update(req.body, req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async delete(req, res, next) {
        console.log("req.params.id ================= ", req.params.id)
        try {
            const result = await this.entityService.delete(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
