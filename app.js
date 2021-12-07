const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listening for requests
app.listen(3000);

// app.get("/", (req, res) => {
//   //   res.send("<h1>SHANI</h1>");
//   res.sendFile("./views/index.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.render("index");
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
  res.render("about");
});

app.get("/about", (req, res) => {
  //   res.send("<h1>SHANI</h1>");
  res.render("about");
});

// redirects
app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 error
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
app.use((req, res) => {
  res.status(404).render("404");
});
