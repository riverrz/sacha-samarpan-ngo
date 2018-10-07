const mongoose = require("mongoose");

const schema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  timings: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String
});

module.exports = mongoose.model("Event", schema);
