const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// blog routes
router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// blog post
router.post("/blogs", (req, res) => {
  //   console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

// find post by id
router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "My Blog Details", blog: result });
    })
    .catch((e) => {
      console.log(e);
    });
});
router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = router;
