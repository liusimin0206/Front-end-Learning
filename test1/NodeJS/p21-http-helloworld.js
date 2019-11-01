let http = require("http");
let server = http.createServer();
// let fs = require("fs");

server.on("request", (req, res) => {
  let url = req.url;
  console.log(url);
  if (url === "/") {
    res.end("hello world");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("running...");
});
