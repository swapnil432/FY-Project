const mongoose = require("mongoose");

const sellerOfferSchema = new mongoose.Schema(
  {
    seller_id: {
      type: String,
      required: true,
    },
    buyer_id: {
      type: String,
      required: true,
    },
    current_price: {
      type: Number,
      required: true,
    },
    property_id: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("SellerOffer", sellerOfferSchema);
