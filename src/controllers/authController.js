const authService = require("../services/authService");

exports.login = (req, res) => {

    const { username, password } = req.body;

    const token = authService.login(username, password);

    if (!token) {

        return res.status(401).json({

            message: "Invalid username or password"

        });

    }

    res.json({

        message: "Login Successful",

        token

    });

};