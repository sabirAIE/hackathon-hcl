const Appointment = require('../models/Appointments');

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointments by user ID
exports.getAppointmentsByUser = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};