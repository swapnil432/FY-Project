const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    public_key: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    gender: {
      type: String,
      required: false
    },
    aadhar: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
      // unique: true,
      lowercase: true,
    },
    is_complete: {
      type: Boolean,
      default: false,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    user_type: {
      type: String,
      default: "user",
    },
    user_photo: {
      type: String,
      required: false,
    },
    user_aadhar_photo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
