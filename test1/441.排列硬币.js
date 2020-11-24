/*
 * @Author: your name
 * @Date: 2020-11-24 15:59:35
 * @LastEditTime: 2020-11-24 16:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\441.排列硬币.js
 */
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return (Math.sqrt(8 * n + 1) - 1) >> 1;
};
// @lc code=end
console.log(arrangeCoins(0));
