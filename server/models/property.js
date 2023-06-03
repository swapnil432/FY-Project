const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    owner_public_key: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    bedroom: {
      type: Number,
      required: false,
    },
    kitchen: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    pincode: {
      type: Number,
      required: false,
    },
    area: {
      type: String,
      required: false,
    },
    bathroom: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },

    is_verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Number,
      default: 0,
    },
    listProperty: {
      type: Boolean,
      default: true,
    },

    images: [],
    pdf: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
