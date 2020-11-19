/*
 * @Author: your name
 * @Date: 2020-11-19 17:27:23
 * @LastEditTime: 2020-11-19 17:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\219.存在重复元素-ii.js
 */
/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let obj = {};
  k++;
  for (let i = 0; i < Math.min(k, nums.length); i++) {
    let item = nums[i];
    if (obj[item] == undefined) {
      obj[item] = 1;
    } else {
      return true;
    }
  }
  for (let i = k; i < nums.length; i++) {
    let item = nums[i];
    obj[nums[i - k]] = undefined;
    if (obj[item] == undefined) {
      obj[item] = 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
