import express from "express";
import {
  getPropertyDocuments,
  getPropertyImages,
  verifyProperty,
  statusApprove,
  statusReject,
  getAllUsers,
  getCompleteUsers,
  verifyUser,
  getAllProperty,
  login,
  getProperty,
  downloadDocuments,
} from "../controllers/admin";
const router = express.Router();

router.post("/adminlogin", login);
router.get("/createZipFile/:id", downloadDocuments);
router.get("/getallproperties", getAllProperty);
router.get("/getproperty/:id", getProperty);
router.get("/getallusers", getAllUsers);
router.get("/getcompleteusers", getCompleteUsers);
router.get("/verifyproperty/:id", verifyProperty);
router.get("/verifyuser/:id", verifyUser);
router.get("/statusApprove/:id", statusApprove);
router.get("/statusreject/:id", statusReject);
router.get("/getpropertydocs/:id", getPropertyDocuments);
router.get("/getpropertyimages/:id", getPropertyImages);

module.exports = router;
