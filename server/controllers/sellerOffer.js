import SellerOffer from "../models/sellerOffer";

// export const sellProperty = async (req, res) => {
//   const propId = req.params.id;
//   const { seller_id, buyer_id, current_price } = req.body;

//   SellerOffer.findOne({ property_id: propId }, (err, seller) => {
//     if (err || !seller) {
//       let newUSeller = new SellerOffer({
//         seller_id: seller_id,
//         buyer_id: buyer_id,
//         current_price: current_price,
//         property_id: propId,
//       });


//       newUSeller.save((err, updatedSeller) => {
//         if (err) {
//           return res.status(400).json({
//             error: "Seller offer creation failed",
//           });
//         }
//         return res.status(200).json({
//           updatedSeller,
//           message: "Seller offer Uploaded",
//         });
//       });
//     }


//   });
// };

export const sellProperty = async (req, res) => {
  const propId = req.params.id;
  const { seller_id, buyer_id, current_price } = req.body;

  try {
    const seller = await SellerOffer.findOne({ property_id: propId });

    if (!seller) {
      const newSeller = new SellerOffer({
        seller_id: seller_id,
        buyer_id: buyer_id,
        current_price: current_price,
        property_id: propId,
      });

      const updatedSeller = await newSeller.save();

      return res.status(200).json({
        updatedSeller,
        message: "Seller offer Uploaded",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: "Seller offer creation failed",
    });
  }
};


export const getSellOffer = async (req, res) => {
  const buyId = req.params.id;
  // console.log(buyId)
  SellerOffer.find({ seller_id: buyId }, (err, sell) => {
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