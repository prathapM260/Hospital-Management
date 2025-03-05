const express = require("express");
const { addReceptionist, removeReceptionist } = require("../controllers/receptionistController");
const router = express.Router();

router.post("/add", addReceptionist);
router.delete("/remove/:id", removeReceptionist);

module.exports = router;
