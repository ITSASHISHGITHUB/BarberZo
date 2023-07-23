const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyBarberController,
  getAllNotificationController,
  deleteAllNotificationController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || Post
router.post("/getUserData", authMiddleware, authController);

//Apply barber|| Post
router.post("/apply-barber", authMiddleware, applyBarberController);

router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

module.exports = router;
