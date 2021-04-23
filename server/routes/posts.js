const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json("working");
});

module.exports = router;
