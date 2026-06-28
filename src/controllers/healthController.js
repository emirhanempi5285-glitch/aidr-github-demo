exports.health = (req, res) => {

    res.status(200).json({

        success: true,

        status: "Healthy",

        application: "CrowdStrike Enterprise HR Platform",

        version: "1.0.0",

        environment: process.env.NODE_ENV || "development",

        uptime: process.uptime(),

        timestamp: new Date().toISOString()

    });

};