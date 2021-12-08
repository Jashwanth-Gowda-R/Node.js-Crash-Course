const express = require("express");
const router = express.Router();
// const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

// blog routes
router.get("/blogs", blogController.blog_index);

router.get("/blogs/create", blogController.blog_create_get);

// blog post
router.post("/blogs", blogController.blog_create_post);

// find post by id
router.get("/blogs/:id", blogController.blog_details);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
