const express = require("express");

const router = express.Router();

const performanceController = require("../controllers/performanceController");

router.get("/", performanceController.getPerformance);

router.get("/:id", performanceController.getPerformanceByEmployee);

module.exports = router;