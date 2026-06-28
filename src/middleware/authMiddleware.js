const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "CHANGE_ME_DEMO_SECRET";

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing."
        });
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Invalid authorization header format."
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, SECRET);

        req.user = decoded;

        next();

    } catch (error) {

        console.error("JWT Verification Failed:", error.message);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });

    }

};