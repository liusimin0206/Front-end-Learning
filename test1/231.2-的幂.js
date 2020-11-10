/*
 * @Author: your name
 * @Date: 2020-11-09 10:07:06
 * @LastEditTime: 2020-11-09 10:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\231.2-的幂.js
 */
/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  let flag = true;
  while (n > 1) {
    let temp = n >> 1;
    if (temp * 2 !== n) {
      flag = false;
      break;
    } else {
      n = temp;
    }
  }
  return flag;
};
// @lc code=end
console.log(isPowerOfTwo(0));
