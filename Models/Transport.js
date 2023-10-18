const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  county: String,
  from: String,
  to: String,
  sacco: String,
  fareRange: String,
  postedBy: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transport', transportSchema);
