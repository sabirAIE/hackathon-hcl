const mongoose = require('mongoose');

const TipSchema = new mongoose.Schema({
  text: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['health', 'fitness', 'nutrition', 'mental-health', 'general'], 
    default: 'general' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Tip', TipSchema);
