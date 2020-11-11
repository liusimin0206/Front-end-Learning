/*
 * @Author: your name
 * @Date: 2020-11-11 10:06:03
 * @LastEditTime: 2020-11-11 10:09:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\136.只出现一次的数字.js
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let s = new Set();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!s.has(nums[i])) {
      s.add(nums[i]);
      res += nums[i];
    } else {
      res -= nums[i];
    }
  }
  return res;
};
// @lc code=end
