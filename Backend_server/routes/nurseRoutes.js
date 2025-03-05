const express = require("express");
const { addNurse, removeNurse } = require("../controllers/nurseController");
const router = express.Router();

router.post("/add", addNurse);
router.delete("/remove", removeNurse);

module.exports = router;
