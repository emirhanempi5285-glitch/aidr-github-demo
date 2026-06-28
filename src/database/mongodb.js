const mongoose = require("mongoose");

async function connectDatabase() {

    const mongoUri =
        process.env.MONGODB_URI ||
        "mongodb://localhost:27017/hr-platform";

    try {

        await mongoose.connect(mongoUri);

        console.log("==================================");
        console.log("MongoDB Connected Successfully");
        console.log(`Database : ${mongoose.connection.name}`);
        console.log(`Host     : ${mongoose.connection.host}`);
        console.log("==================================");

    } catch (error) {

        console.error("==================================");
        console.error("MongoDB Connection Failed");
        console.error(error.message);
        console.error("==================================");

        process.exit(1);
    }
}

module.exports = connectDatabase;