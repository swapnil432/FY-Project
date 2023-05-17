import express from "express";
import {
  deleteSellOffer,
  getSellOffer,
  sellProperty,
} from "../controllers/sellerOffer";
const router = express.Router();

router.post("/sellproperty/:id", sellProperty);
router.get("/getselloffer/:id", getSellOffer);
router.post("/deleteselloffer/:id", deleteSellOffer);
module.exports = router;
