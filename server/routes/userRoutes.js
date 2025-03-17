const express = require('express');
const { getAllPatients, getPatientDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/patients', getAllPatients);
router.get('/:id', getPatientDetails);

module.exports = router;
