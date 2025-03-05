const Patient = require("../models/Patient");

exports.addPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Error adding patient", error });
  }
};

exports.removePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Patient removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing patient", error });
  }
};
