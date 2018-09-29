const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
  }
});

module.exports = mongoose.model("Intern", internSchema);
