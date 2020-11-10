/*
 * @Author: your name
 * @Date: 2020-11-10 11:59:16
 * @LastEditTime: 2020-11-10 12:02:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\268.丢失的数字.js
 */
/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let sum = ((n + 1) * n) >> 1;
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
};
// @lc code=end
