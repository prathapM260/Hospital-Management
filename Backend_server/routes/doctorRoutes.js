const express = require("express");
const { addDoctor, removeDoctor } = require("../controllers/doctorController");
const router = express.Router();

router.post("/add", addDoctor);
router.delete("/remove", removeDoctor);

module.exports = router;
