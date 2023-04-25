const mongoose = require('mongoose');

const intervalSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  }
});

const citySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  intervals: {
    Monday: [intervalSchema],
    Tuesday: [intervalSchema],
    Wednesday: [intervalSchema],
    Thursday: [intervalSchema],
    Friday: [intervalSchema],
    Saturday: [intervalSchema],
    Sunday: [intervalSchema]
  }
});

const membershipSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

const AboutGymSchema = new mongoose.Schema({
  info: {
    memberships: [membershipSchema],
    cities: [citySchema]
  }
});

const AboutGym = mongoose.model('AboutGym', AboutGymSchema);

module.exports = AboutGym;