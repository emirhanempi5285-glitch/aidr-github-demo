exports.health = (req, res) => {

    res.status(200).json({

        status: "Healthy",

        application: "CrowdStrike Enterprise HR Platform",

        timestamp: new Date(),

        uptime: process.uptime()

    });

};