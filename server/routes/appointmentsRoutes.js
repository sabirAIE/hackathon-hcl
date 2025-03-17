const express = require('express');
const { createAppointment, getAppointmentsByUser, updateAppointment, deleteAppointment } = require('../controllers/appointmentsController');

const router = express.Router();

router.post('/', createAppointment);
router.get('/user/:userId', getAppointmentsByUser);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;