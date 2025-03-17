const express = require('express');
const { createReminder, getPatientReminders, deleteReminder } = require('../controllers/reminderContoller');

const router = express.Router();

router.post('/', createReminder);
router.get('/patient/:userId', getPatientReminders);
router.delete('/:id', deleteReminder);

module.exports = router;
