/*
 * @Author: your name
 * @Date: 2020-11-19 14:19:40
 * @LastEditTime: 2020-11-19 14:23:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\122.买卖股票的最佳时机-ii.js
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    let lirun = prices[i] - prices[i - 1];
    if (lirun > 0) {
      res += lirun;
    }
  }
  return res;
};
// @lc code=end
