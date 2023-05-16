import express from "express";
import { sellProperty } from "../controllers/sellerOffer";
const router = express.Router();

router.post("/sellproperty/:id",sellProperty);