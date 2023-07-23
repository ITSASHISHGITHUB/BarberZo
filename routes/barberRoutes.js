const express = require("express");
const {
  getBarberInfoController,
  updateProfileController,
  getBarberByIdController,
  barberAppointmentsController,
  updateStatusController,
} = require("../controllers/barberCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getBarberInfo", authMiddleware, getBarberInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getBarberById", authMiddleware, getBarberByIdController);

//GET Appointments
router.get(
  "/barber-appointments",
  authMiddleware,
  barberAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
