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

export const getPropertyData = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id, is_verified: true }).exec((err, property) => {
    if (property) {
      return res.status(200).json({
        property,
      });
    }
    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
  });
};

export const getProperty = (req, res) => {
  Property.find({ is_verified: true }, (err, properties) => {
    if (err) {
      return res.status(400).json({
        error: "Some Error",
      });
    }
    if (err || !property) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    return res.status(200).json(properties);
  });
};

export const getHomeProperties = (req, res) => {
  Property.find({ status: 1, listProperty: true }, (err, properties) => {
    if (err) {
      return res.status(400).json({
        error: "Some Error",
      });
    }
    if (err || !properties) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    return res.status(200).json(properties);
  });
};

export const getUserProperties = (req, res) => {
  let userid = req.params.id;
  Property.find({ owner_public_key: userid, status : 1 }, (err, properties) => {
    if (err) {
      return res.status(400).json({
        error: "Some Error",
      });
    }
    if (err || !properties) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    return res.status(200).json(properties);
  });
};

export const changePropertyPrice = (req, res) => {
  const id = req.params.id;
  const price = req.body.price;
  Property.findOne({ _id: id }).exec((err, property) => {
    if (property) {
      property.price = price;
      property.save((err, success) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          message: "Price Updated Successfully",
        });
      });
    }

    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
  });
};

export const changePropertyOwner = (req, res) => {
  const id = req.params.id;
  const owner = req.body.owner_public_key;
  Property.findOne({ _id: id }).exec((err, property) => {
    if (property) {
      property.owner_public_key = owner;
      property.save((err, success) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          message: "Owner Updated Successfully",
        });
      });
    }

    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
  });
};

export const changePropertyListing = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }).exec((err, property) => {
    if (property) {
      property.listProperty = !property.listProperty;
      property.save((err, success) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          message: "Owner Updated Successfully",
        });
      });
    }

    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
  });
};
