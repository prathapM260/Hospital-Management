const express = require("express");
const { addPatient, removePatient } = require("../controllers/patientController");
const router = express.Router();

router.post("/add", addPatient);
router.delete("/remove/:id", removePatient);

module.exports = router;
