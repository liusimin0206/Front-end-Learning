/*
 * @Author: your name
 * @Date: 2020-11-11 18:01:44
 * @LastEditTime: 2020-11-11 18:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\169.多数元素.js
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = 0;
    }
    if (++map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
// @lc code=end
