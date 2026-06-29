module.exports = {

    mongodb: {

        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/hr-platform",

        database: "hr-platform"

    }

};