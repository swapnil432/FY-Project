const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  public_key: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

adminSchema.methods.hashPassword = async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

adminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


module.exports = mongoose.model("Admin", adminSchema);

