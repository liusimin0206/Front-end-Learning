/*
 * @Author: liusimin
 * @Date: 2020-12-01 17:27:56
 * @LastEditors: your name
 * @LastEditTime: 2020-12-01 17:34:49
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
function zuhe(n) {
  return (n * (n - 1)) / 2;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let obj = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] != 1) {
      sum += zuhe(obj[key]);
    }
  }
  return sum;
};
// @lc code=end
