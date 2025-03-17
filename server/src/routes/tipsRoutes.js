const express = require('express');
const tipsRouter = express.Router();
const Tip = require('../models/Tips');

// Fetch all tips
tipsRouter.get('/', async (req, res) => {
  try {
    const tips = await Tip.find();
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = tipsRouter;