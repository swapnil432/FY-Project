import express from "express";
import {
  createNotification,
  notificationViewed,
} from "../controllers/notification";
const router = express.Router();

router.post("/notification", createNotification);
router.post("/notificationviewed/:id", notificationViewed);
