const authService = require("../services/authService");
const { required } = require("../utils/validator");

exports.login = (req, res) => {
    try {
        const { username, password } = req.body;

        if (!required(username, password)) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required."
            });
        }

        const result = authService.login(username, password);

        if (!result) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token: result.token,
            user: result.user
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
};