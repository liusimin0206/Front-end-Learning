/*
 * @Author: your name
 * @Date: 2020-11-19 14:55:58
 * @LastEditTime: 2020-11-19 15:05:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\204.计数质数.js
 */
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let h = [],
    r = 0;
  for (let i = 2; i * i < n; i++) {
    if (h[i] == undefined) {
      for (let j = i * i; j < n; j += i) {
        h[j] = false;
      }
    }
  }
  for (let j = n; j-- > 2; ) {
    if (h[j] == undefined) r++;
  }
  return r;
};
// @lc code=end
