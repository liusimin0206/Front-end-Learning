/*
 * @Author: your name
 * @Date: 2020-11-19 09:23:50
 * @LastEditTime: 2020-11-19 10:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\283.移动零.js
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
function exchange(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] != 0) {
        exchange(nums, i, j);
        break;
      }
    }
  }
  return nums;
};
// @lc code=end
console.log(moveZeroes([0, 1, 0, 3, 12]));
