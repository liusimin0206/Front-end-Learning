/*
 * @Author: liusimin
 * @Date: 2020-12-01 17:23:47
 * @LastEditors: your name
 * @LastEditTime: 2020-12-01 17:25:41
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};
// @lc code=end
