/*
 * @Author: your name
 * @Date: 2020-11-19 14:06:23
 * @LastEditTime: 2020-11-19 14:18:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\121.买卖股票的最佳时机.js
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
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
  let max = 0;
  let didian = 0;
  for (let i = 0; i < prices.length; i++) {
    let lirun = prices[i] - prices[didian];
    if (lirun > max) {
      max = lirun;
    }
    if (lirun < 0) {
      didian = i;
    }
  }
  return max;
};
// @lc code=end
