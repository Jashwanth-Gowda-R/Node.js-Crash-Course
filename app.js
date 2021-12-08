const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://shani:akhilesh@nodejstuts.pje3i.mongodb.net/NodejsTuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    // listening for requests
    app.listen(3000);
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine
app.set("view engine", "ejs");

// // listening for requests
// app.listen(3000);

// middleware for static files
app.use(express.static("public"));

// for posting form data
app.use(express.urlencoded({ extended: true }));

// middleware for logging
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.redirect("/about");
});

// blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// blog post
app.post("/blogs", (req, res) => {
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
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "My Blog Details", blog: result });
    })
    .catch((e) => {
      console.log(e);
    });
});

// middleware for 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found!" });
});
