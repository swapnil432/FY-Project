import express from "express";
const multer = require("multer");
import {
  uploadPropertyImages,
  uploadPropertyInfo,
  getHomeProperties,
  changePropertyPrice,
  changePropertyOwner,
  getUserProperties,
  changePropertyListing,
} from "../controllers/property";
const router = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images/property");
  },
  filename: (req, file, callback) => {
    callback(null, `PropertyImage-${Date.now()}.${file.originalname}`);
  },
});

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

const docconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/doc");
  },
  filename: (req, file, callback) => {
    callback(null, `PropertyDoc-${Date.now()}.${file.originalname}`);
  },
});

const isDoc = (req, file, callback) => {
  if (file.mimetype.startsWith("application/pdf")) {
    callback(null, true);
  } else {
    callback(new Error("only PDF is allowed"));
  }
};

const uploadPdf = multer({
  storage: docconfig,
  fileFilter: isDoc,
});

router.post(
  "/uploadPropertyInfo/:id",
  uploadPdf.array("documents"),
  uploadPropertyInfo
);

router.post(
  "/uploadPropertyImages/:id",
  upload.array("images"),
  uploadPropertyImages
);

router.get("/getallpropertieshome", getHomeProperties);

router.get("/getuserproperties/:id", getUserProperties);

router.put("/changePropertyPrice/:id", changePropertyPrice);

router.put("/changePropertyOwner/:id", changePropertyOwner);

router.put("/changePropertyListing/:id", changePropertyListing);


// router.post("/uploadPropertyInfo/:id", (req, res) => {
//   // Handle image upload
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).send({ error: err.message });
//     }

//     // Handle pdf upload
//     uploadPdf(req, res, (err) => {
//       if (err) {
//         return res.status(400).send({ error: err.message });
//       }

//       // Handle both uploads successfully
//       res.status(200).send("Upload successful!");
//     });
//   });
// });
module.exports = router;
