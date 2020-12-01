/*
 * @Author: liusimin
 * @Date: 2020-12-01 17:15:59
 * @LastEditors: your name
 * @LastEditTime: 2020-12-01 17:21:54
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const element = accounts[i];
    let sum = element.reduce((a, b) => {
      return a + b;
    });
    if (max < sum) {
      max = sum;
    }
  }
  return max;
};
// @lc code=end
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
