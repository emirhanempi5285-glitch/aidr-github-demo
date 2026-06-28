const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {

    res.json({

        application: "CrowdStrike Enterprise HR Platform",

        version: "1.0.0",

        status: "Running"

    });

});

module.exports = app;
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(errorMiddleware);