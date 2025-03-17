const User = require('../models/User');
const DailyGoal = require('../models/DailyGoal');
const Reminder = require('../models/Reminders');

exports.getAllPatients = async (req, res) => {
  const patients = await User.find({ role: 'patient' });
  res.json(patients);
};

exports.getPatientDetails = async (req, res) => {
  const patient = await User.findById(req.params.id);
  if (!patient) return res.status(404).json({ error: 'Patient not found' });
  res.json(patient);
};
