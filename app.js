const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

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
// app.use(express.static("public"));
// middleware for logging
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   //   res.send("<h1>SHANI</h1>");
//   res.sendFile("./views/index.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

// app.get("/about", (req, res) => {
//   //   res.send("<h1>SHANI</h1>");
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// // redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/about", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.render("about", { title: "About" });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.render("about", { title: "About" });
});

// redirects
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// 404 error
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found!" });
});
