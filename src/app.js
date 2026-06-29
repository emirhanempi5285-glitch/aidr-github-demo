const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const leaveRoutes = require("./routes/leaveRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/departments", departmentRoutes);
app.use("/leave", leaveRoutes);
app.use("/attendance", attendanceRoutes);

app.get("/", (req, res) => {

    res.json({

        application: "CrowdStrike Enterprise HR Platform",

        version: "1.0.0",

        status: "Running"

    });

});

app.use(errorMiddleware);

module.exports = app;