// const fs = require("fs");
module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/homework1_4_war": {
        target: "http://47.94.232.213:8080/homework1_4_war", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/homework1_4_war": ""
        }
      }
    }
    // ,before(app) {
    //   app.get("/homework1_4_war/*", (req, res) => {
    //     const data = fs.readFileSync(`mock/layers.json`).toString();
    //     const json = JSON.parse(data);
    //     return res.json(json);
    //   });
    // }
  }
};
