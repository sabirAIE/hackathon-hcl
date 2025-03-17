const mongoose = require('mongoose');

const DailyGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goalText: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  dueDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('DailyGoal', DailyGoalSchema);
