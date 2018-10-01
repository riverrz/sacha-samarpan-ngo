const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  joinedOn: {
    type: Date,
    default: Date.now()
  },
  internId: {
    type: String,
    required: true
  },
  internshipType: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  batch: {
    type: String
  },
  lastPaid: Date
});

module.exports = mongoose.model("Intern", internSchema);
