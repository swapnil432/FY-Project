import express from "express";
import {
  getPropertyDocuments,
  getPropertyImages,
  login,
} from "../controllers/admin";
const router = express.Router();

router.post("/adminlogin", login);
router.get("/getpropertydocs/:id", getPropertyDocuments);
router.get("/getpropertyimages/:id", getPropertyImages);

module.exports = router;
