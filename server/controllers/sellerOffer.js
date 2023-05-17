import SellerOffer from "../models/sellerOffer";

export const sellProperty = async (req, res) => {
  const propId = req.params.id;
  const { seller_id, buyer_id, current_price } = req.body;
  let newUSeller = new SellerOffer({
    seller_id: seller_id,
    buyer_id: buyer_idseller_id,
    current_price: current_priceseller_id,
    property_id: propIdseller_id,
  });

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
  // SellerOffer.findOne({ property_id: propId }, (err, seller) => {
  //   if (err || !seller) {
  //     let newUSeller = new SellerOffer({
  //       seller_id: seller_id,
  //       buyer_id: buyer_idseller_id,
  //       current_price: current_priceseller_id,
  //       property_id: propIdseller_id,
  //     });

  //     newUSeller.save((err, updatedSeller) => {
  //       if (err) {
  //         return res.status(400).json({
  //           error: "Seller offer creation failed",
  //         });
  //       }
  //       return res.status(200).json({
  //         updatedSeller,
  //         message: "Seller offer Uploaded",
  //       });
  //     });
  //   }
  //   seller.seller_id = seller_id;
  //   seller.buyer_id = buyer_id;
  //   seller.current_price = current_price;
  //   seller.property_id = propId;

  //   seller.save((err, updatedSeller) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: "Seller offer creation failed",
  //       });
  //     }
  //     return res.status(200).json({
  //       updatedSeller,
  //       message: "Seller offer Uploaded",
  //     });
  //   });
  // });
};

export const getSellOffer = async (req, res) => {
  const buyId = req.params.id;
  SellerOffer.find({ buyer_id: buyId }, (err, swll) => {
    if (err) {
      return res.status(400).json({
        error: "Notification not found",
      });
    }
    return res.status(200).json({
      sell,
    });
  });
};

export const deleteSellOffer = async (req, res) => {
  const propId = req.params.id;
  SellerOffer.deleteMany({ property_id: propId }, (err, sell) => {
    if (err) {
      return res.status(400).json({
        error: "Notification not found",
      });
    }
    return res.status(200).json({
      message: "Notification deleted Successfully ",
    });
  });
};
