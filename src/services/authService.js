const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "CHANGE_ME_DEMO_SECRET";

const users = [

    {

        id: 1,

        username: "admin",

        password: "Admin@123",

        role: "Administrator"

    }

];

exports.login = (username, password) => {

    const user = users.find(

        u =>

            u.username === username &&

            u.password === password

    );

    if (!user)

        return null;

    return jwt.sign(

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

};