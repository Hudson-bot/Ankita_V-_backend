const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    enum: ['Yes', 'No'], // Only allow "Yes" or "No"
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Response', responseSchema);