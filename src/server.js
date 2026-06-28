require("dotenv").config();

const app = require("./app");
const connectDatabase = require("./database/mongodb");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDatabase();

        app.listen(PORT, () => {
            console.log("==================================");
            console.log("CrowdStrike Enterprise HR Platform");
            console.log(`Server running on port ${PORT}`);
            console.log("==================================");
        });
    } catch (error) {
        console.error("Application startup failed.");
        console.error(error);
        process.exit(1);
    }
}

startServer();