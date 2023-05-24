const mongoose = require("mongoose");

const sellerOfferSchema = new mongoose.Schema(
  {
    seller_id: {
      type: String,
      required: false,
    },
    buyer_id: {
      type: String,
      required: false,
    },
    current_price: {
      type: Number,
      required: false,
    },
    property_id: {
      type: String,
      required: false,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("SellerOffer", sellerOfferSchema);
