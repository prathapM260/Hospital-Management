const mongoose = require("mongoose");

const receptionistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  shift: { type: String, required: true },
});

module.exports = mongoose.model("Receptionist", receptionistSchema);
