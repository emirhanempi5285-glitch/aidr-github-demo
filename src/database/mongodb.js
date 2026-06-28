const mongoose = require("mongoose");

async function connectDatabase() {

    try {

        await mongoose.connect(

            process.env.MONGODB_URI ||

            "mongodb://localhost:27017/hr-platform"

        );

        console.log("MongoDB Connected");

    }

    catch (err) {

        console.error("MongoDB Connection Failed");

        console.error(err.message);

        process.exit(1);

    }

}

module.exports = connectDatabase;