import Property from "../models/property";

export const uploadPropertyInfo = (req, res) => {
  //   console.log("info", req.files);
  const {
    name,
    state,
    bedroom,
    kitchen,
    type,
    address,
    pincode,
    area,
    bathroom,
    price,
  } = req.body;
  let newProperty = new Property({
    owner_public_key: req.params.id,
    name: name,
    state: state,
    bedroom: bedroom,
    kitchen: kitchen,
    type: type,
    address: address,
    pincode: pincode,
    area: area,
    bathroom: bathroom,
    price: price,
    pdf: req.files,
  });
  newProperty.save((err, success) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: err,
      });
    }
    return res
      .status(200)
      .json({ id: newProperty._id, message: "Documents Upload successful!" });
  });
};
export const uploadPropertyImages = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }, (err, property) => {
    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
    property.images = req.files;

    property.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        message: "Documents Upload successful!",
      });
    });
  });
};
