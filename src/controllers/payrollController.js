const payrollService = require("../services/payrollService");

exports.getPayroll = (req, res) => {

    res.status(200).json(
        payrollService.getPayroll()
    );

};

exports.getPayrollByEmployee = (req, res) => {

    const payroll = payrollService.getPayrollByEmployee(
        req.params.id
    );

    if (!payroll) {

        return res.status(404).json({

            message: "Payroll record not found"

        });

    }

    res.json(payroll);

};