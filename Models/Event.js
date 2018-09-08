const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  Date: {
    type: Date,
    required: true
  },
  Timings: {
    type: String,
    required: true
  },
  Venue: {
    type: String,
    required: true
  },
  Subject: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Event", schema);
