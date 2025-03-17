const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['provider', 'patient'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);