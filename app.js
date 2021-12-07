const express = require("express");

// express app
const app = express();

// listening for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.send("<h1>SHANI</h1>");
});
