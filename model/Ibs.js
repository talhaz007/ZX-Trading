const mongoose = require("mongoose");

const IbsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("ibs", IbsSchema);
