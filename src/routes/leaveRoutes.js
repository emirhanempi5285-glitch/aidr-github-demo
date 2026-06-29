const express = require("express");

const router = express.Router();

const leaveController = require("../controllers/leaveController");

router.get("/", leaveController.getLeaves);

router.get("/:id", leaveController.getLeaveByEmployee);

module.exports = router;