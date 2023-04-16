const Admin = require("../models/admin");

async function seedUser() {
  const username = "Admin";
  const public_key = "0xdd47fab7ad68bdbb1993ac1f2be7998a700561ac";
  const email = "admin@uri.com";
  const password = "password";

  const existingUser = await Admin.findOne({ email });

  if (existingUser) {
    console.log("User already exists in the database");
    return;
  }

  const admin = new Admin({
    username,
    public_key,
    email,
    password,
  });

  await admin.hashPassword();
  await admin.save();

  console.log("User created successfully");
}

seedUser();
