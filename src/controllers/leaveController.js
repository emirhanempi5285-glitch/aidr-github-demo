const leaveService = require("../services/leaveService");

exports.getLeaves = (req, res) => {

    res.status(200).json(
        leaveService.getLeaves()
    );

};

exports.getLeaveByEmployee = (req, res) => {

    res.status(200).json(
        leaveService.getLeaveByEmployee(req.params.id)
    );

};