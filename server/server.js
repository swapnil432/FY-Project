console.log("connected");
import fs from "fs";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 8000;

// //middleware
app.use(cors());
app.use(express.json());
// app.use(morgon("dev"));
//for images 
app.use("/resources", express.static(__dirname + "/public"));
// //routes
fs.readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

mongoose
  .connect(
    "mongodb+srv://realestateNFT:JYIDgXFJyyC4b2u2@cluster0.mhvhtyj.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Connection Error", err));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const Admin = require("./models/admin");

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

// seedUser();
