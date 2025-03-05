const Nurse = require("../models/Nurse");

exports.addNurse = async (req, res) => {
  try {
    const nurse = new Nurse(req.body);
    await nurse.save();
    res.status(201).json({ message: "Nurse added successfully", nurse });
  } catch (error) {
    res.status(500).json({ message: "Error adding nurse", error });
  }
};

exports.removeNurse = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email && !name) {
      return res.status(400).json({ message: "Please provide an email or name to remove a nurse" });
    }

    const nurse = await Nurse.findOneAndDelete({ $or: [{ email }, { name }] });

    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    res.status(200).json({ message: "Nurse removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing nurse", error });
  }
};

