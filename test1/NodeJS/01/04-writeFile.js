let fs = require("fs");
fs.writeFile("./data/wFile.md", "大家好", error => {
  if (!error) {
    console.log("写入成功");
  }
});
