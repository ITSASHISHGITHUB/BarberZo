const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyBarberController
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
router.post("/getUserData", authMiddleware , authController);

//Auth || Post
router.post("/apply-barber", authMiddleware , applyBarberController);

module.exports = router;