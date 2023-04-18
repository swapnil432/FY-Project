import express from "express";
const multer = require("multer");
import { getPublicKey, logout, uploadUserInfo } from "../controllers/user";
const router = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images/users");
  },
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}-${Date.now()}.${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});


router.post("/registerPublicKey", getPublicKey);
router.get("/logout", logout);
router.post(
  "/uploadUserInfo/:id",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),

  uploadUserInfo
);
module.exports = router;
