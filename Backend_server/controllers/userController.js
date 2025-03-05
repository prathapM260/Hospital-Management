const Doctor = require("../models/Doctor");
const Nurse = require("../models/Nurse");
const Receptionist = require("../models/Receptionist");
const Patient = require("../models/Patient");

// Add Doctor
const addDoctor = async (req, res) => {
  const newDoctor = new Doctor(req.body);
  await newDoctor.save();
  res.status(201).json({ message: "Doctor added successfully!" });
};

// Remove Doctor
const removeDoctor = async (req, res) => {
  await Doctor.findOneAndDelete();
  res.json({ message: "Doctor removed successfully!" });
};

// Add Nurse
const addNurse = async (req, res) => {
  const newNurse = new Nurse(req.body);
  await newNurse.save();
  res.status(201).json({ message: "Nurse added successfully!" });
};

// Remove Nurse
const removeNurse = async (req, res) => {
  await Nurse.findOneAndDelete();
  res.json({ message: "Nurse removed successfully!" });
};

// Add Receptionist
const addReceptionist = async (req, res) => {
  const newReceptionist = new Receptionist(req.body);
  await newReceptionist.save();
  res.status(201).json({ message: "Receptionist added successfully!" });
};

// Remove Receptionist
const removeReceptionist = async (req, res) => {
  await Receptionist.findOneAndDelete();
  res.json({ message: "Receptionist removed successfully!" });
};

// Add Patient
const addPatient = async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.status(201).json({ message: "Patient added successfully!" });
};

// Remove Patient
const removePatient = async (req, res) => {
  await Patient.findOneAndDelete();
  res.json({ message: "Patient removed successfully!" });
};

// Get User Counts
const getUserCounts = async (req, res) => {
  const doctors = await Doctor.countDocuments();
  const nurses = await Nurse.countDocuments();
  const receptionists = await Receptionist.countDocuments();
  const patients = await Patient.countDocuments();

  res.json({ doctors, nurses, receptionists, patients });
};

module.exports = {
  addDoctor,
  removeDoctor,
  addNurse,
  removeNurse,
  addReceptionist,
  removeReceptionist,
  addPatient,
  removePatient,
  getUserCounts,
};
