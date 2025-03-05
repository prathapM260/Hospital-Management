const express = require("express");
const {
  addDoctor,
  removeDoctor,
  addNurse,
  removeNurse,
  addReceptionist,
  removeReceptionist,
  addPatient,
  removePatient,
  getUserCounts,
} = require("../controllers/userController");

const router = express.Router();

// Doctor Routes
router.post("/doctor/add", addDoctor);
router.delete("/doctor/remove", removeDoctor);

// Nurse Routes
router.post("/nurse/add", addNurse);
router.delete("/nurse/remove", removeNurse);

// Receptionist Routes
router.post("/receptionist/add", addReceptionist);
router.delete("/receptionist/remove", removeReceptionist);

// Patient Routes
router.post("/patient/add", addPatient);
router.delete("/patient/remove", removePatient);

// Get user counts
router.get("/userCounts", getUserCounts);

module.exports = router;
