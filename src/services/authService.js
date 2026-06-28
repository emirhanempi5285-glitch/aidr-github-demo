const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "CHANGE_ME_DEMO_SECRET";

const users = [
    {
        id: 1,
        username: "admin",
        password: "Admin@123", // Demo only
        role: "Administrator"
    }
];

exports.login = (username, password) => {

    const user = users.find(
        u =>
            u.username === username &&
            u.password === password
    );

    if (!user) {
        return null;
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        SECRET,
        {
            expiresIn: "8h"
        }
    );

    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        }
    };
};