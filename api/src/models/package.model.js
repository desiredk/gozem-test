'use strict';

const mongoose = require('mongoose');
const mainSchema = require("./main.model");

const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  // package_id: { type: String, required: true },
  active_delivery_id: { type: String },
  description: { type: String },
  weight: { type: Number },
  width: { type: Number },
  height: { type: Number },
  depth: { type: Number },
  from_name: { type: String },
  from_address: { type: String },
  from_location: { type: Object, default: { lat: 0, lng: 0 } },
  to_name: { type: String },
  to_address: { type: String },
  to_location: { type: Object, default: { lat: 0, lng: 0 } },
});

PackageSchema.add(mainSchema);

module.exports = mongoose.model('Package', PackageSchema);
