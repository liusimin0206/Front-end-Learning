let http = require("http");
let server = http.createServer();

server.on("request", (req, res) => {
  let url = req.url;
  console.log(url);
  if (url === "/plain") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("hello world 世界");
  } else if (url === "/html") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<p>hello html我</p>");
  }
});
// 绑定端口号，启动服务器
server.listen(3000, () => {
  console.log("服务器启动成功，可以通过http://127.0.0.1:3000/ 来进行访问");
});
