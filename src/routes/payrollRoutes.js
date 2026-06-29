const express = require("express");

const router = express.Router();

const payrollController = require("../controllers/payrollController");

router.get("/", payrollController.getPayroll);

router.get("/:id", payrollController.getPayrollByEmployee);

module.exports = router;