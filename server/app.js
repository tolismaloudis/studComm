const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// express app
const app = express();

// load config
dotenv.config({ path: __dirname + "/config/config.env" });

try {
  connectDB();
} catch (error) {
  console.log(error);
}

// app listen
const PORT = process.env.PORT || 5000;

app.listen(PORT);
