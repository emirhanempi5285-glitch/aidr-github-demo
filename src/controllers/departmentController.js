const departmentService = require("../services/departmentService");

exports.getDepartments = (req, res) => {

    res.json(
        departmentService.getDepartments()
    );

};

exports.getDepartmentById = (req, res) => {

    const department = departmentService.getDepartmentById(req.params.id);

    if (!department) {

        return res.status(404).json({
            message: "Department not found"
        });

    }

    res.json(department);

};