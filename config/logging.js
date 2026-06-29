module.exports = {

    level: process.env.LOG_LEVEL || "info",

    console: true,

    file: {

        enabled: true,

        path: "./logs/application.log"

    }

};