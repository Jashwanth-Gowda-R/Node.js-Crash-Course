const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/plain");
  res.write("Hello Shanis");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening port 3000");
});
