/*
 * @Author: your name
 * @Date: 2020-11-25 09:57:00
 * @LastEditTime: 2020-11-25 09:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\292.nim-游戏.js
 */
/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return !(n % 4 == 0);
};
// @lc code=end
