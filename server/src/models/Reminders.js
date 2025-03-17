const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reminderText: { type: String, required: true },
  dueDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reminder', ReminderSchema);
