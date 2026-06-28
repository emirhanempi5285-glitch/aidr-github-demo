const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "CHANGE_ME_DEMO_SECRET";

module.exports = (req, res, next) => {

    const header = req.headers.authorization;

    if (!header)

        return res.status(401).json({

            message: "Authorization header missing"

        });

    const token = header.split(" ")[1];

    try {

        req.user = jwt.verify(token, SECRET);

        next();

    }

    catch {

        return res.status(401).json({

            message: "Invalid Token"

        });

    }

};