const mongoose = require('mongoose');

const freeTrial = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FreeTrial', freeTrial);