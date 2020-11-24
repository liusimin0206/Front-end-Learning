/*
 * @Author: your name
 * @Date: 2020-11-24 11:08:27
 * @LastEditTime: 2020-11-24 11:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\buildUrl.js
 */
function buildUrl() {
  var qs = "?debug=true";
    with (location) {
      var url=href+qs
    }
    return url
}
