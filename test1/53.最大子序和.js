/*
 * @Author: your name
 * @Date: 2020-11-09 11:03:21
 * @LastEditTime: 2020-11-09 17:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\53.最大子序和.js
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    if (res < sum) {
      res = sum;
    }
  }
  return res;
};
// @lc code=end
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
