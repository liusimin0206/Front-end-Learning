/*
 * @Author: your name
 * @Date: 2020-11-19 16:51:25
 * @LastEditTime: 2020-11-19 17:04:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\217.存在重复元素.js
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (obj[item] == undefined) {
      obj[item] = 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
