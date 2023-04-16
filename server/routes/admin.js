import express from "express";
import { login } from "../controllers/admin";
const router = express.Router();

router.post("/adminlogin", login);

module.exports = router;
