const attendanceService = require("../services/attendanceService");

exports.getAttendance = (req, res) => {

    res.status(200).json(
        attendanceService.getAttendance()
    );

};

exports.getAttendanceByEmployee = (req, res) => {

    res.status(200).json(
        attendanceService.getAttendanceByEmployee(req.params.id)
    );

};