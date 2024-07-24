const express = require("express");
const { model } = require("mongoose");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// rouets object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

module.exports = router;
