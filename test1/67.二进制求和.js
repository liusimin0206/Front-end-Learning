/*
 * @Author: your name
 * @Date: 2020-11-11 11:32:06
 * @LastEditTime: 2020-11-11 14:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\67.二进制求和.js
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length < b.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  let res = [];
  res[0] = 0;
  function NaNto0(b) {
    if (isNaN(b)) {
      return 0;
    } else {
      return b;
    }
  }
  for (let i = 0; i < a.length; i++) {
    res[i + 1] = Math.floor(
      (Number(a[a.length - 1 - i]) +
        NaNto0(Number(b[b.length - 1 - i])) +
        res[i]) /
        2
    );
    res[i] =
      (Number(a[a.length - 1 - i]) +
        NaNto0(Number(b[b.length - 1 - i])) +
        res[i]) %
      2;
  }
  if (res[res.length - 1] === 0) {
    res.pop();
  }
  return res.reverse().join("");
};
// @lc code=end
addBinary("0", "0");
