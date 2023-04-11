import express from "express";
import { getPublicKey, logout, uploadUserInfo } from "../controllers/user";
const router = express.Router();

router.post("/registerPublicKey", getPublicKey);
router.post("/logout", logout);
router.post("/uploadUserInfo/:id", uploadUserInfo);
module.exports = router;
