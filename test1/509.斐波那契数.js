/*
 * @Author: your name
 * @Date: 2020-11-24 16:35:07
 * @LastEditTime: 2020-11-24 16:40:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\509.斐波那契数.js
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let arr = [0, 1, 1, 2];
  for (let i = 4; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[N];
};
// @lc code=end
