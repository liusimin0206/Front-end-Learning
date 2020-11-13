/*
 * @Author: your name
 * @Date: 2020-11-11 15:18:17
 * @LastEditTime: 2020-11-11 15:23:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\172.阶乘后的零.js
 */
/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let num = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    num += n;
  }
  return num;
};
// @lc code=end
