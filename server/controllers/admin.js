import jwt from "jsonwebtoken";
import Admin from "../models/admin";
import Property from "../models/property";
import User from "../models/user";

const JWT_SECRET = "34513HJKK34IJKBKHN9429GBJUND3JDQLL";

export const login = (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    const isValidPassword = user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "1D" });
    return res.status(200).json({
      messsage: "Welcome",
      token: token,
    });
  });
};

// Property

export const getAllProperty = (req, res) => {
  Property.find({}, (err, properties) => {
    if (err || !properties) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    return res.status(200).json(properties);
  });
};
export const verifyProperty = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }, (err, property) => {
    if (err || !property) {
      return res.status(400).json({
        error: "Property not found",
      });
    }
    property.is_verified = true;

    property.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        message: "Property Verified!",
      });
    });
  });
};
export const getPropertyDocuments = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }, (err, property) => {
    if (err || !property) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    const docs = property.pdf.map(({ destination, filename }) => ({
      path: `${destination}/${filename}`,
    }));

    return res.status(200).json(docs);
  });
};
export const getPropertyImages = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }, (err, property) => {
    if (err || !property) {
      return res.status(400).json({
        error: "No Properties found",
      });
    }
    const image = property.images.map(({ destination, filename }) => ({
      path: `${destination}/${filename}`,
    }));

    return res.status(200).json(image);
  });
};
export const statusApprove = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }).exec((err, property) => {
    if (err) {
      return res.status(400).json({
        error: "Property Not Found",
      });
    }
    if (property) {
      property.status = 1;
      property.save((err, updatedProperty) => {
        if (err) {
          return res.status(400).json({
            error: "property update failed",
          });
        }
        return res.status(200).json(updatedProperty);
      });
    }
  });
};
export const statusReject = (req, res) => {
  const id = req.params.id;
  Property.findOne({ _id: id }).exec((err, property) => {
    if (err) {
      return res.status(400).json({
        error: "Property Not Found",
      });
    }
    if (property) {
      property.status = 2;
      property.save((err, updatedProperty) => {
        if (err) {
          return res.status(400).json({
            error: "property update failed",
          });
        }
        return res.status(200).json(updatedProperty);
      });
    }
  });
};

//users
export const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({
        error: "No Users Found",
      });
    }
    return res.status(200).json(users);
  });
};
export const getCompleteUsers = (req, res) => {
  User.find({ is_complete: true }, (err, users) => {
    if (err) {
      return res.status(400).json({
        error: "No Users Found",
      });
    }
    return res.status(200).json(users);
  });
};

export const verifyUser = (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Users not found",
      });
    }
    user.is_verified = true;

    user.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        message: "User Verified!",
      });
    });
  });
};
