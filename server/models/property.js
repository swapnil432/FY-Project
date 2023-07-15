const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    owner_public_key: {
      type: String,
      required: true,
    },
    surveyNumber: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    bedroom: {
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
      type: Number,
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
    carpetArea: {
      type: Number,
      required: false,
    },
    maintenanceCharges: {
      type: Number,
      required: false,
    },
    noOfParking: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    ageOfBuilding: {
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
