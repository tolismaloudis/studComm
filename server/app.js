const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// load config
dotenv.config({ path: __dirname + "/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:8080", credentials: true }));

try {
  connectDB();
} catch (error) {
  console.log(error);
}

const login = require("./routes/users");

app.use("/user", login);

// app listen
const PORT = process.env.PORT || 5000;

app.listen(PORT);
