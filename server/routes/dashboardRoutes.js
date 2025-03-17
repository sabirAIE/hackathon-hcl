const express = require('express');
const dashboardRouter = express.Router();
const DailyGoal = require('../models/DailyGoal');
const Reminder = require('../models/Reminders');
const Appointment = require('../models/Appointments');

// Dashboard endpoint
dashboardRouter.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch goals, reminders, and appointments for the user
    const goals = await DailyGoal.find({ userId });
    const reminders = await Reminder.find({ userId });
    const appointments = await Appointment.find({ userId });

    // Return the aggregated data
    res.status(200).json({
      goals,
      reminders,
      appointments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = dashboardRouter;