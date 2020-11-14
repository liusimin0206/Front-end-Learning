const fs = require("fs");
const path = "./";
function File(fileName) {
  this.type = "file";
  this.name = fileName;
}
function Directory(fileName) {
  this.type = "directory";
  this.name = fileName;
  this.childen = [];
}
const mypathObj = new Directory("./");
async function printAllfiles(path, pathObj) {
  const dir = fs.opendirSync(path);

  for await (const dirent of dir) {
    if (dirent.isFile()) {
      pathObj.childen.push(new File(dirent.name));
    } else {
      let newObj = new Directory(dirent.name);

      let newPath = `${path}${dirent.name}/`;

      printAllfiles(newPath, newObj);
      pathObj.childen.push(newObj);
    }
  }
}
printAllfiles(path, mypathObj).then(() => {
  const data = JSON.stringify(mypathObj);
  fs.writeFile("当前文件夹下文件目录.json", data, err => {
    if (err) throw err;
    console.log("文件已被保存");
  });
});
