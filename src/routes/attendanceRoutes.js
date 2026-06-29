const express = require("express");

const router = express.Router();

const attendanceController = require("../controllers/attendanceController");

router.get("/", attendanceController.getAttendance);

router.get("/:id", attendanceController.getAttendanceByEmployee);

module.exports = router;