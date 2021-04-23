const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });
const verify = require("./verifyToken");

// get posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// new post
router.post("/", async (req, res) => {
  const post = new Post({
      user: req.body.new_post.user,
      title: req.body.new_post.title,
      body: req.body.new_post.body,
  });
  const savedPost = await post.save();
  res.status(201).send();
});

module.exports = router;
