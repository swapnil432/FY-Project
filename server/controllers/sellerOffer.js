import SellerOffer from "../models/sellerOffer";

export const sellProperty = async (req, res) => {
  const propId = req.params.id;
  const { seller_id, buyer_id, current_price } = req.body;

  SellerOffer.findOne({ property_id: propId }, (err, seller) => {
    if (err || !seller) {
      let newUSeller = new SellerOffer();
      newUSeller.seller_id = seller_id;
      newUSeller.buyer_id = buyer_id;
      newUSeller.current_price = current_price;
      newUSeller.property_id = propId;
      newUSeller.save((err, updatedSeller) => {
        if (err) {
          return res.status(400).json({
            error: "Seller offer creation failed",
          });
        }
        return res.status(200).json({
          updatedSeller,
          message: "Seller offer Uploaded",
        });
      });
    }
    seller.seller_id = seller_id;
    seller.buyer_id = buyer_id;
    seller.current_price = current_price;
    seller.property_id = propId;

    seller.save((err, updatedSeller) => {
      if (err) {
        return res.status(400).json({
          error: "Seller offer creation failed",
        });
      }
      return res.status(200).json({
        updatedSeller,
        message: "Seller offer Uploaded",
      });
    });
  });
};
