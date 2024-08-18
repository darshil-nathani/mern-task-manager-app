const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.controller");
const verifyUser = require("../middleware/user.middleware");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/", verifyUser, controller.verifyJwt);
router.get("/logout", controller.logout);

module.exports = router;