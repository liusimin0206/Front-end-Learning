let http = require("http");
let server = http.createServer();
let fs = require("fs");

let wwwDir = "D:/1";

server.on("request", (req, res) => {
  // let url = req.url;
  fs.readFile("./temp.html", (err, data) => {
    if (err) {
      return res.end("404 Not Found");
    }
    var content = "";
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end("Can not find 1 dir");
      }
      // console.log(files);

      files.forEach(item => {
        content += ` <tr>
<td data-value="build/"><a class="icon dir" href="/D:/1/build/">${item}/</a></td>
<td class="detailsColumn" data-value="0"></td>
<td class="detailsColumn" data-value="1554776325">2019/4/9 上午10:18:45</td>
</tr>`;
      });
      data = data.toString();
      data = data.replace("^_^", content);
      res.end(data);
    });
  });
});

server.listen(3000, () => {
  console.log("running...");
});
