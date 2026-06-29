const employeeService = require("../services/employeeService");

exports.getEmployees = (req, res) => {

    res.status(200).json(

        employeeService.getEmployees()

    );

};

exports.getEmployeeById = (req, res) => {

    const employee = employeeService.getEmployeeById(

        req.params.id

    );

    if (!employee) {

        return res.status(404).json({

            message: "Employee not found"

        });

    }

    res.json(employee);

};