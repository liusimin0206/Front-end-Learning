let http = require("http");
let server = http.createServer();
let fs = require("fs");

server.on("request", (req, res) => {
  let url = req.url;
  console.log(url);
  if (url === "/plain") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("hello world 世界");
  } else if (url === "/html") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<p>hello html我</p>");
  } else if (url === "/jpg") {
    fs.readFile("./resource/77.png", (err, data) => {
      if (!err) {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else {
    fs.readFile("./resource/index.html", (err, data) => {
      if (err) {
        res.setHeader("Context-Type", "text/plain; charset=ytf-8");
        console.log(err);
        res.end("读取文件失败");
      } else {
        res.setHeader("Context-Type", "text/html; charset=ytf-8");
        res.end(data);
      }
    });
  }
});
// 绑定端口号，启动服务器
server.listen(3000, () => {
  console.log("服务器启动成功，可以通过http://127.0.0.1:3000/ 来进行访问");
});
