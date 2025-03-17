const express = require('express');
const { createAppointment, getAppointmentsByUser, updateAppointment, deleteAppointment } = require('../controllers/appointmentsController');

const appointmentRouter = express.Router();

appointmentRouter.post('/', createAppointment);
appointmentRouter.get('/user/:userId', getAppointmentsByUser);
appointmentRouter.put('/:id', updateAppointment);
appointmentRouter.delete('/:id', deleteAppointment);

module.exports = appointmentRouter;