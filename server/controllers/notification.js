import Notification from "../models/notification";

export const createNotification = async (req, res) => {
  const { property_id, buyer_id } = req.body;
  let newNotification = new Notification();
  newNotification.buyer_id = buyer_id;
  newNotification.property_id = property_id;
  newNotification.save((err, updatedNotification) => {
    if (err) {
      return res.status(400).json({
        error: "Notification creation failed",
      });
    }
    return res.status(200).json({
      updatedNotification,
      message: "Notification Created",
    });
  });
};

export const notificationViewed = async (req, res) => {
  const propId = req.params.id;
  Notification.findOne({ property_id: propId }, (err, notification) => {
    if (err) {
    }
    notification.is_viewed = true;
    notification.save((err, updatedNotification) => {
      if (err) {
        return res.status(400).json({
          error: "Notification update failed",
        });
      }
      return res.status(200).json({
        updatedNotification,
        message: "Notification Updated",
      });
    });
  });
};
export const getNotification = async (req, res) => {
  const buyId = req.params.id;
  Notification.find({ buyer_id: buyId }, (err, notification) => {
    if (err) {
      return res.status(400).json({
        error: "Notification not found",
      });
    }
    return res.status(200).json({
      notification,
    });
  });
};

export const deleteNotification = async (req, res) => {
  const propId = req.params.id;
  Notification.deleteMany({ property_id: propId }, (err, notification) => {
    if (err) {
      return res.status(400).json({
        error: "Notification not found",
      });
    }
    return res.status(200).json({
      message: "Notification deleted Successfully ",
    });
  });
};