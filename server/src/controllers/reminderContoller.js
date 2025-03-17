const Reminder = require('../models/Reminders');

exports.createReminder = async (req, res) => {
  const reminder = await Reminder.create(req.body);
  res.json(reminder);
};

exports.getPatientReminders = async (req, res) => {
  const reminders = await Reminder.find({ userId: req.params.userId });
  res.json(reminders);
};

exports.deleteReminder = async (req, res) => {
  await Reminder.findByIdAndDelete(req.params.id);
  res.json({ message: 'Reminder deleted' });
};
