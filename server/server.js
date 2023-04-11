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
