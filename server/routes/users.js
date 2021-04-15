const { response } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: __dirname + "/.env" });

//Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create user

router.post("/", async (req, res) => {
  const user = new User({
    am: req.body.am,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    eduPersonAffiliation: req.body.eduPersonAffiliation,
    eduPersonPrimaryAffiliation: req.body.eduPersonPrimaryAffiliation,
    mail: req.body.mail,
    id: req.body.id,
    uid: req.body.uid,
  });

  const useruid = { uid: req.body.uid };

  User.findOne(useruid, async function (err, euser) {
    if (euser == null) {
      try {
        const savedUser = await user.save();
        // res.json(savedUser);
        const accessToken = jwt.sign(useruid, process.env.ACCESS_TOKEN_SECRET);
        res
          .status(202)
          .cookie("accessToken", accessToken, {
            sameSite: "strict",
            httpOnly: true,
          })
          .cookie("authSession", true, { sameSite: "strict" })
          .send({ msg: "Verified" });
      } catch (error) {
        res.json({ message: error });
      }
    } else {
      const accessToken = jwt.sign(useruid, process.env.ACCESS_TOKEN_SECRET);
      res
        .status(202)
        .cookie("accessToken", accessToken, {
          sameSite: "strict",
          httpOnly: true,
        })
        .cookie("authSession", true, { sameSite: "strict" })
        .send({ msg: "Verified" });
    }
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("accessToken").clearCookie("authSession").send("logout");
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHedaer && authHeader.split(" ")[1];
  if (token == null) return res.send(status(401));

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, useruid) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.useruid = useruid;
    next();
  });
}

// Get specific user
router.get("/:am", async (req, res) => {
  try {
    const user = await User.findOne({ am: req.params.am });
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete user
router.delete("/:uid", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ uid: req.params.uid });
    res.json(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
