// vue.config.js
const ENV = process.env.NODE_ENV;

module.exports = {
  publicPath: ENV === "development" ? "" : "./",
  // indexPath: "../index.html"
};
