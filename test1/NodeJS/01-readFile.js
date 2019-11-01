let fs = require("fs");
fs.readFile("./data/testFile.txt", (err, data) => {
  console.log(data.toString);
});
