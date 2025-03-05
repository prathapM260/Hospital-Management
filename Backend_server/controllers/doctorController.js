const Doctor = require("../models/Doctor");

// Add Doctor
exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: "Doctor added successfully", doctor });
  } catch (error) {
    res.status(500).json({ message: "Error adding doctor", error });
  }
};

// Remove Doctor
exports.removeDoctor = async (req, res) => {
  try {
    const { id, name, email } = req.body; // Accept ID, name, or email from request

    let doctor;
    if (id) {
      doctor = await Doctor.findByIdAndDelete(id);
    } else if (name) {
      doctor = await Doctor.findOneAndDelete({ name });
    } else if (email) {
      doctor = await Doctor.findOneAndDelete({ email });
    } else {
      return res.status(400).json({ message: "Please provide ID, name, or email to delete a doctor." });
    }

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found." });
    }

    res.status(200).json({ message: "Doctor removed successfully", deletedDoctor: doctor });
  } catch (error) {
    res.status(500).json({ message: "Error removing doctor", error });
  }
};
