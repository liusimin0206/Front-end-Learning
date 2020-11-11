/*
 * @Author: your name
 * @Date: 2020-11-10 16:20:08
 * @LastEditTime: 2020-11-11 09:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\198.打家劫舍.js
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let res = [];
  res[-1] = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      res[i] = nums[0];
    } else if (i == 1) {
      res[i] = Math.max(nums[0], nums[1]);
    } else {
      res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
    }
  }
  return res[nums.length - 1];
};
// @lc code=end
console.log(rob());
