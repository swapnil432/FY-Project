const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    buyer_id: {
      type: String,
      required: true,
    },
    property_id: {
      type: String,
      required: true,
    },
    is_viewed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
