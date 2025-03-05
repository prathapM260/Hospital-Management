const Receptionist = require("../models/Receptionist");

exports.addReceptionist = async (req, res) => {
  try {
    const receptionist = new Receptionist(req.body);
    await receptionist.save();
    res.status(201).json({ message: "Receptionist added successfully", receptionist });
  } catch (error) {
    res.status(500).json({ message: "Error adding receptionist", error });
  }
};

exports.removeReceptionist = async (req, res) => {
  try {
    await Receptionist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Receptionist removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing receptionist", error });
  }
};
