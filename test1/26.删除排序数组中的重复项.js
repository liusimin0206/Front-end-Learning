/*
 * @Author: your name
 * @Date: 2020-11-02 17:42:48
 * @LastEditTime: 2020-11-02 17:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\26.删除排序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
// @lc code=end
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
