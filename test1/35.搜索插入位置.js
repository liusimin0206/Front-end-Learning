/*
 * @Author: your name
 * @Date: 2020-11-03 15:41:52
 * @LastEditTime: 2020-11-03 16:24:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\35.搜索插入位置.js
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  //小知识点： java数组的最大长度为let的最大值
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //此时left = right
  return target <= nums[left] ? left : left + 1;
};
// @lc code=end
console.log(searchInsert([1, 3, 5, 6], 4));
