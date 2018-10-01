const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  joinedOn: {
    type: Date,
    default: Date.now()
  },
  lastPaid: Date,
  memberId: {
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
  work: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  payMode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Member", memberSchema);
