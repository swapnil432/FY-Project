import User from "../models/user";
import jwt from "jsonwebtoken";

const JWT_SECRET = "HJKKHNGBJUNDU728LLAD82NNQP123JDQLL";
export const getPublicKey = (req, res) => {
  try {
    const { wallet } = req.body;
    User.findOne({ public_key: wallet }).exec((err, user) => {
      if (user) {
        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        res.cookie("token", token, {
          httpOnly: true,
        });
        res.json(user);
      } else {
        let newUser = new User({ public_key: wallet });
        newUser.save((err, success) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              error: err,
            });
          }
          return res.json(newUser);
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Error Try Again",
    });
  }
};

export const logout = async (res, req) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logged Out Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const uploadUserInfo = async (req, res) => {
  const userId = req.params.id;
  const { id, name, email, age, phone, gender, aadhar } = req.body;
  console.log(userId, req.body, req.file);
  console.log(req.files["image1"][0]);

  User.findOne({ _id: userId }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user.name = name;
    user.email = email;
    user.age = age;
    user.phone = phone;
    user.gender = gender;
    user.aadhar = aadhar;
    user.user_photo = req.files["image1"][0].filename;
    user.user_aadhar_photo = req.files["image2"][0].filename;
    user.is_complete = true;
    user.save((err, updatedUser) => {
      if (err) {
        console.log("USER UPDATE ERROR", err);
        return res.status(400).json({
          error: "User update failed",
        });
      }
      return res.status(200).json({
        user,
        message: "User Details Uploaded",
      });
    });
  });
};
