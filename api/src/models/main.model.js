const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mainSchema = new Schema(
  {
    isNotDelete: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

mainSchema.pre("find", function () {
  this.where({ isNotDelete: true, ...this.getQuery() });
});

mainSchema.pre("findOne", function () {
  this.where({ isNotDelete: true, ...this.getQuery() });
});

mainSchema.pre("count", function () {
  this.where({ isNotDelete: true, ...this.getQuery() });
});

mainSchema.pre("aggregate", function () {
  const index = this.pipeline().findIndex(item => Object.keys(item).includes('$match'))

  if (index === -1) {
    this.pipeline().unshift({ $match: { isNotDelete: true } });
  } else {
    this.pipeline()[index]['$match'] = {isNotDelete: true, ...this.pipeline()[index]['$match']}
  }
});

mainSchema.statics.getSoftDeleted = function () {
  return this.find({ isNotDelete: false });
};

module.exports = mainSchema;
