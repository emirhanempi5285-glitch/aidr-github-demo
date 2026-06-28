require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;
const connectDatabase = require("./database/mongodb");

connectDatabase();
app.listen(PORT, () => {
    console.log("==================================");
    console.log("CrowdStrike Enterprise HR Platform");
    console.log(`Server running on port ${PORT}`);
    console.log("==================================");
});