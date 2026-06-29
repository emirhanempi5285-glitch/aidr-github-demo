const performanceService = require("../services/performanceService");

exports.getPerformance = (req, res) => {

    res.status(200).json(
        performanceService.getPerformance()
    );

};

exports.getPerformanceByEmployee = (req, res) => {

    res.status(200).json(
        performanceService.getPerformanceByEmployee(req.params.id)
    );

};