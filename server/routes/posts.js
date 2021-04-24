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

router.get("/search", async (req, res) => {
  const searchParams = req.query.search;
  try {
    const searchedPost = await Post.find(
      {
        $text: { $search: `${searchParams}` },
      },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
    res.json(searchedPost);
  } catch (error) {
    console.log(error);
  }
});

//new post();
router.post("/", async (req, res) => {
  const post = new Post({
    user: req.body.user,
    title: req.body.title,
    body: req.body.body,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    console.log(error);
  }
  res.status(201).send();
});

router.delete("/:user", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ user: req.params.user });
    res.json(removePost);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
