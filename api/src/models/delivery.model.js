'use strict';

const mongoose = require('mongoose');
const mainSchema = require("./main.model");

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
  // delivery_id: { type: String, required: true },
  pickup_time: { type: Date },
  start_time: { type: Date },
  end_time: { type: Date },
  location: { type: Object, default: { lat: 0, lng: 0 } },
  status: {
    type: String,
    enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed'],
    default: 'open',
  },
  package: { type: Schema.Types.ObjectId, ref: 'Package' },
});

// Populate virtual field (can be done pre or post query execution)
DeliverySchema.virtual('fullPackage', {
  localField: 'package',
  foreignField: '_id',
  ref: 'Package',
  justOne: true // Ensure it fetches only the associated package
});

/*DeliverySchema.pre('find', async function (next) {
  this.populate('fullPackage');
  next(); // Allow query to proceed
});*/

// Or populate after query execution (if pre-population isn't suitable)
DeliverySchema.post('find', async (results) => {
  for (const delivery of results) {
    delivery.fullPackage = await mongoose.model('Package').findById(delivery.package);
  }
  return results;
});

DeliverySchema.add(mainSchema);

module.exports = mongoose.model('Delivery', DeliverySchema);
