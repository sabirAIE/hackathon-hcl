const express = require('express');
const { createGoal, getPatientGoals, updateGoal, deleteGoal } = require('../controllers/goalsController');

const router = express.Router();

router.post('/', createGoal);
router.get('/patient/:userId', getPatientGoals);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

module.exports = router;
