/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let x_str = String(x);
  let x_str_array = [];
  for (let i = 0; i < x_str.length; i++) {
    x_str_array[i] = x_str[i];
  }
  if (x_str_array[0] == "-") {
    x_str_array.splice(0, 1);
    x_str_array.push("-");
  }
  let res = Number(x_str_array.reverse().join(""));
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    res = 0;
  }
  return res;
};
// @lc code=end
console.log(reverse(1534236469));
