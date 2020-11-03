/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = parseInt(s);
  if (isNaN(res)) {
    res = 0;
  }
  if (res > Math.pow(2, 31) - 1) {
    res = Math.pow(2, 31) - 1;
  }
  if (res < Math.pow(-2, 31)) {
    res = Math.pow(-2, 31);
  }

  return res;
};
// @lc code=end
console.log(myAtoi("www"));
