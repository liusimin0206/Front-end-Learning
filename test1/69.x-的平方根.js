/*
 * @Author: your name
 * @Date: 2020-11-03 16:26:03
 * @LastEditTime: 2020-11-03 18:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\69.x-的平方根.js
 */
/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0;
  let right = 65538;

  while (left < right) {
    let mid = (left + right) >> 1;
    let temp = mid * mid;
    if (x == temp) {
      return mid;
    } else if (x < temp) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //此时left = right

  return x >= left * left ? left : left - 1;
};
// @lc code=end
console.log(mySqrt(2147395599));
