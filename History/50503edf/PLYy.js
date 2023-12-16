const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");
const { model } = require("mongoose");

router.post("/", createUser);

model
