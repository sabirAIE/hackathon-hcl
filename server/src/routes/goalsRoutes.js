const express = require('express');
const { createGoal, getPatientGoals, updateGoal, deleteGoal } = require('../controllers/goalsController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createGoal);
router.get('/patient/:userId', protect, getPatientGoals);
router.put('/:id', protect, updateGoal);
router.delete('/:id', protect, deleteGoal);

module.exports = router;
