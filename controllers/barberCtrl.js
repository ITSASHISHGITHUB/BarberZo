
const barberModel = require("../models/barberModel");
const userModel = require("../models/userModels");
const getBarberInfoController = async (req, res) => {
  try {
    const barber = await barberModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "barber data fetch success",
      data: barber,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching barber Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const barber = await barberModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "barber Profile Updated",
      data: barber,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "barber Profile Update issue",
      error,
    });
  }
};

//get single docotor
const getBarberByIdController = async (req, res) => {
  try {
    const barber = await barberModel.findOne({ _id: req.body.barberId });
    res.status(200).send({
      success: true,
      message: "Sigle Doc Info Fetched",
      data: barber,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Erro in Single docot info",
    });
  }
};

const barberAppointmentsController = async (req, res) => {
  try {
    const barber = await barberModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      barberId: barber._id,
    });
    res.status(200).send({
      success: true,
      message: "barber Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/barber-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getBarberInfoController,
  updateProfileController,
  getBarberByIdController,
  barberAppointmentsController,
  updateStatusController,
};
