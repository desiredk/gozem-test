'use strict';

const MainService = require("./main.service");

class DeliveryService extends MainService {
    constructor() {
        super(require('../repositories/delivery.repository'))
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async locationChanged(deliveryId, location) {
        const result = {
            event: 'delivery_updated',
            success: false,
        };

        try {
            await this.update({ location }, deliveryId)
            const rep = await this.getOne(deliveryId)

            result['delivery_object'] =  rep['body'];
            result['success'] =  true;
        } catch (err) {
            result['error'] =  err;
        }

        return JSON.stringify(result);
    }

    async statusChanged(deliveryId, status) {
        const result = {
            event: 'delivery_updated',
            success: false,
        };

        const payLoad = {
            status
        };

        switch (status) {
            case 'picked-up':
                payLoad['pickup_time'] = new Date();
                break;
            case 'in-transit':
                payLoad['start_time'] = new Date();
                break;
            case 'delivered':
                payLoad['end_time'] = new Date();
                break;
            case 'failed':
                payLoad['end_time'] = new Date();
                break;
            default:
                payLoad['end_time'] = new Date();
        }

        try {
            await this.update({ status }, deliveryId)
            const rep = await this.getOne(deliveryId)

            result['delivery_object'] =  rep['body'];
            result['success'] =  true;
        } catch (err) {
            result['error'] =  err;
        }

        return JSON.stringify(result);
    }
}

module.exports = new DeliveryService();
