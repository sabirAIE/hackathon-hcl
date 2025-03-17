const DailyGoal = require('../models/DailyGoal');

exports.createGoal = async (req, res) => {
  const goal = await DailyGoal.create(req.body);
  res.json(goal);
};

exports.getPatientGoals = async (req, res) => {
  const goals = await DailyGoal.find({ userId: req.params.userId });
  res.json(goals);
};

exports.updateGoal = async (req, res) => {
  await DailyGoal.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Goal updated' });
};

exports.deleteGoal = async (req, res) => {
  await DailyGoal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Goal deleted' });
};
