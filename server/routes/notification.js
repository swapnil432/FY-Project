import express from "express";
import {
  createNotification,
  deleteNotification,
  getNotification,
  notificationViewed,
} from "../controllers/notification";
const router = express.Router();

router.post("/notification", createNotification);
router.post("/notificationviewed/:id", notificationViewed);
router.get("/getnotification/:id", getNotification);
router.post("/deletenotification/:id", deleteNotification);
module.exports = router;