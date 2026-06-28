const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// Authentication
router.post("/login", authController.login);

// Future Endpoints
// router.post("/logout", authController.logout);
// router.post("/refresh-token", authController.refreshToken);
// router.get("/profile", authMiddleware, authController.profile);

module.exports = router;