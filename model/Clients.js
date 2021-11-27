const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("clients", ClientsSchema);